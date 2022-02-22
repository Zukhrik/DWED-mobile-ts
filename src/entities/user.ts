import {ICategory, IRegion} from './category'

export interface IUserBasic {
    full_name: string
    avatar: string
    username: string
    is_official: boolean
}

export interface IUserFull extends IUserBasic {
    main_cat: ICategory
    region: IRegion
}