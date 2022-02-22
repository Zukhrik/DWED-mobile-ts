import {Box, Grid} from '@mui/material'
import {bottomNavBarWithoutToken} from '../../../data'
import {NavLink} from 'react-router-dom'

export const BottomNavBar = () => {

    return (
        <Box
            sx={{
                position: 'fixed',
                bottom: 0,
                right: 0,
                left: 0,
                background: '#fff'
            }}
        >
            <Grid
                container
                direction='row'
                justifyContent='space-around'
                alignItems='center'
                sx={{
                    width: '100%',
                    height: '50px',
                    boxShadow: 'rgb(0 0 0 / 25%) 0px 6px 12px',
                    zIndex: 'appBar',
                }}
            >
                {
                    bottomNavBarWithoutToken.map((item, idx) => {
                        const Icon = item.icon
                        return (
                            <Grid
                                item
                                key={`${idx + 1}`}
                                sx={{
                                    padding: '6px'
                                }}
                            >
                                <NavLink
                                    to={item.path}
                                    style={({isActive}) => ({color: isActive ? '#1DA1F2' : '#262626'})}
                                >
                                    <Icon/>
                                </NavLink>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Box>
    )
}