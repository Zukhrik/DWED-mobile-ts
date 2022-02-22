import {combine, createStore} from 'effector'
import {IStore} from '../../types/store'
import {IOrg} from '../../entities/orgs'
import {fetchAllOrg} from './effects'
import {commonStoreList} from '../../utils/store-utils'

const $orgList = createStore<IStore<IOrg[]>>({result: {}, loading: false, error: false, data: []})
    .on(fetchAllOrg.pending, (state, loading) => ({...state, loading}))
    .on(fetchAllOrg.fail, (state, {error}) => ({
        ...state, error, data: [], result: {}
    }))
    .on(fetchAllOrg.done, (state, {result: response, params}) => {
        const processed = commonStoreList<IOrg>({
            response, state, clear: params.clear
        })
        return {
            ...processed
        }
    })


export const $orgModel = combine({
    $orgList
})