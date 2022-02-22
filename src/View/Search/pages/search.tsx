import React from 'react'
import {useOrgList} from '../../../hooks/org'
import OrgList from './org-list'

export default () => {
    useOrgList()

    return (
        <>
            <h1>Search Page</h1>

            <OrgList/>
        </>
    )
}