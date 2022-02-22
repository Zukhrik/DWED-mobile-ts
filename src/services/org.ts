import {httpGet} from './index'
import {IQueryParams} from '../types/query-params'
import {IResList} from '../types/api'
import {IOrg} from '../entities/orgs'

export default {
    getAllOrg: (params: IQueryParams) => httpGet<any, any, IResList<IOrg>>({url: '/orgs/', params})
}