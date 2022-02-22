import {IUserApi, IUserApiList, IUserApiPost} from '../types/user'
import {httpGet, httpPost} from './index'

export default {
    getUser: ({username}: IUserApi) => httpGet({url: `/users/${username}/`}),
    getUserSubsMe: ({username, params}: IUserApiList) => httpGet({url: `/users/${username}/subs/me/`, params}),
    createUserSubsMe: ({username}: IUserApi) => httpPost({url: `/users/${username}/subs/me/`}),
    createUserOffering: ({username, data}: Omit<IUserApiPost<any>, 'id'>) => httpPost({url: `/users/${username}/offerings/`, data}),
    updateUserOffering: ({username, data, id}: IUserApiPost<any>) => httpPost({url: `/users/${username}/offerings/${id}/`, data})
}