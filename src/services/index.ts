import axios, {AxiosPromise, AxiosRequestConfig} from 'axios'
import Cookies from 'js-cookie'

let isRefreshing = false
let refreshSubscribers: Function[] = []

const httpClient = axios.create({})

function subscribeTokenRefresh(cb: (token: string) => void) {
    refreshSubscribers.push(cb)
}

function onRefreshed(token: string) {
    refreshSubscribers.map((cb: any) => cb(token))
    refreshSubscribers = []
}

httpClient.interceptors.response.use((response) => response, (error) => {
    if (error && error.response) {
        const {config, response: {status, data}} = error
        const originalRequest = config
        const refreshToken: string | undefined | null = Cookies.get('refresh-token')

        if (status === 401) {
            if (refreshToken) {
                if (!isRefreshing) {
                    isRefreshing = true
                    axios.post('/v1.0/api/account/token-refresh/', {refresh: refreshToken})
                        .then((res) => {
                            if (res) {
                                isRefreshing = false
                                onRefreshed(res.data.access)
                                Cookies.set('token', res.data.access)
                                Cookies.set('refresh-token', res.data.refresh)
                            }
                        })
                        .catch(() => {
                            window.location.replace('/sign-in')
                            isRefreshing = false
                        })
                }

                return new Promise((resolve) => {
                    subscribeTokenRefresh((token: string) => {
                        originalRequest.headers.Authorization = `Bearer ${token}`
                        resolve(axios(originalRequest))
                    })
                })
            }
            Cookies.remove('token')
            Cookies.remove('refresh-token')
            isRefreshing = false
        } else if (status === 400) {
            if (data.errors && Array.isArray(data.errors)) {
                for (let err of data.errors) {
                    console.log(err)
                }
            }
        } else {
            return Promise.reject(error)
        }
    }
})

httpClient.interceptors.request.use((config) => {
    const token = Cookies.get('token')

    if (config.headers) {
        config.headers['x-device-id'] = '0'
    }

    if (config.url) {
        config.url = config.url.indexOf('/v1.0/api') === -1 ? `/v1.0/api${config.url}` : config.url
    }
    if (token) {
        if (!config?.headers?.notAuth || !config?.headers?.userToken) {
            config.headers = Object.assign(config.headers, {Authorization: `Token ${token}`})
        } else {
            delete config.headers.notAuth
        }

        if (config?.headers?.userToken) {
            config.headers = Object.assign(config.headers, {Authorization: `Token ${config?.headers?.userToken}`})
        }
        return config
    }
    delete config?.headers?.Authorization
    return config
})

interface IParams<D, P> {
    url: string,
    headers?: any
    data?: D,
    params?: P,
    onUploadProgress?: AxiosRequestConfig['onUploadProgress'],
}

export function httpGet<D, P, R>(params: IParams<D, P>): AxiosPromise<R> {
    return httpClient({
        method: 'get',
        ...params
    })
}

export function httpPost<D, P, R>(params: IParams<D, P>): AxiosPromise<R> {
    return httpClient({
        method: 'post',
        ...params
    })
}

export function httpPut<D, P, R>(params: IParams<D, P>): AxiosPromise<R> {
    return httpClient({
        method: 'put',
        ...params
    })
}

export function httpPatch<D, P, R>(params: IParams<D, P>): AxiosPromise<R> {
    return httpClient({
        method: 'patch',
        ...params
    })
}

export function httpDelete<D, P, R>(params: IParams<D, P>): AxiosPromise<R> {
    return httpClient({
        method: 'delete',
        ...params
    })
}