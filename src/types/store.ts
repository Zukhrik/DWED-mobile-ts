interface IStoreResult {
    count?: number
    next?: string | null
    prev?: string | null
    nextOffset?: number
}

export interface IStore<D> {
    result: IStoreResult,
    data: D,
    loading: boolean,
    error: any
}