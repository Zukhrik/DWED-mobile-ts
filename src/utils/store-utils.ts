import {IStore} from '../types/store'
import {AxiosResponse} from 'axios'

interface IStoreCommon<D> {
    response: AxiosResponse
    state: IStore<D>
    clear?: boolean | undefined
    limit?: number | undefined
}

export function commonStoreList<D>({response, state, clear, limit}: IStoreCommon<D[]>): IStore<D[]> {
    const {data: {results: list, ...configs}} = response
    const result = {
        ...configs,
        nextOffset: state.result.nextOffset
            ? limit &&  state.result.nextOffset + limit
            : limit
    }
    const data = clear ? list : [...state.data, ...list]

    return {
        ...state,
        result,
        data
    }
}