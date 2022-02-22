import {useEffect} from 'react'
import {orgListMount} from '../../models/org/events'

export function useOrgList() {
    useEffect(() => {
        orgListMount({limit: 20, offset: 0})
    }, [])
}