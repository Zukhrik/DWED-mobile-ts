import React from 'react'
import {useStore} from 'effector-react'
import {$orgModel} from '../../../models/org'
import {ShortCard} from '../../../Components/Cards'
import {useOrgList} from '../../../hooks/org'

export default () => {
    useOrgList()
    const {$orgList: {data}} = useStore($orgModel)

    return (
        <>
            <h5>Organization list</h5>
            {
                data && data.map((item, idx) => (
                    <ShortCard
                        key={`${idx + 1}`}
                        imgSize={40}
                        avaUrl={item.logo}
                        title={item.name}
                        text={item.category.name}
                    />
                ))
            }
        </>
    )
}