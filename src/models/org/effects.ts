import {createEffect} from 'effector'
import org from '../../services/org'

export const fetchAllOrg = createEffect({
    handler: org.getAllOrg
})