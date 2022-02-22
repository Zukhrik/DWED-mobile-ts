import React from 'react'
import {Link} from 'react-router-dom'
import {ShortCard} from '../../../Components/Cards'
import testImg from '../../../Assets/test-imgs/samolet_propeller_art_149754_2560x1600.jpeg'
import {FixedHeader} from '../../../Components/FixedHeader'
import {Box} from '@mui/material'
import {HomeFixedHeaderComponent} from '../organisms'

export default () => {


    return (
        <Box sx={{paddingTop: '62px'}}>
            <FixedHeader
                component={<HomeFixedHeaderComponent/>}
            />
            <h1>Home Page</h1>
            <ShortCard
                title='Zukhrik'
                text='Front-end'
                titleSize='18px'
                avaUrl={testImg}
                imgSize={60}
            />
            <Link to='/organizations'>
                Organization
            </Link>
        </Box>
    )
}