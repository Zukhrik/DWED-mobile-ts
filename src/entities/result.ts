export interface IResult<D> {
    count?: number
    next?: string
    previous?: number
    results: D
}