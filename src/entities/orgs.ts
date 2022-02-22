import {ICategory, IRating, ISubs} from './category'

export interface IOrg {
    name: string
    slug_name: string
    category: ICategory
    subs: ISubs
    logo: string
    is_official: boolean
    rating: IRating
}