import {createEvent} from 'effector'
import {fetchAllOrg} from './effects'
import {IQueryParams} from '../../types/query-params'

export const orgListMount = createEvent<IQueryParams>()

orgListMount.watch(fetchAllOrg)