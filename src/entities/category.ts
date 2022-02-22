export interface ICategory {
    id: number
    slug: string
    name: string
    description: string
    image: string
    has_subs: boolean
}

export interface IRegion {
    id: number
    name: string
    reg_code: string
    parent: number | null
    has_subs: boolean
}

export interface ISubs {

}

export interface IRating {

}