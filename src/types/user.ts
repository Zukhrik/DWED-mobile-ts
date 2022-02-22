import {IQueryParams} from './query-params'

export interface IUserApi {
    username: string
    id: number
}

export interface IUserApiList extends Omit<IUserApi, 'id'> {
   params: IQueryParams
}

export interface IUserApiPost<D> extends IUserApi {
    data: D
}
