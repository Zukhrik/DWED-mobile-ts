export interface IResList<D> {
    count: number,
    next: string | null,
    prev: string | null,
    results: D[]
}