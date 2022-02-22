import React, {FC} from 'react'
import {Box, Grid} from '@mui/material'
import {ArrowLeftSvg} from '../../../icons'

interface IFixedHeaderProps {
    title?: string
    component?: object
    goBack?: () => void
    height?: string | undefined
    border?: boolean
}

export const FixedHeader: FC<IFixedHeaderProps> = (
    {
        title,
        component,
        goBack,
        height,
        border
    }
) => {
    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                right: 0,
                left: 0,
                width: '100%',
                height: height ? height : '50px',
                borderBottom: border ? 'none' : '0.5px solid rgb(242, 242, 242)',
                background: '#FFFFFF'
            }}
        >
            {
                component
                    ? component
                    : <Grid
                        container
                        direction='row'
                        justifyContent='flex-start'
                        alignItems='center'
                        sx={{
                            width: '100%',
                            height: '100%',
                            padding: '0 12px'
                        }}
                    >
                        <Grid item onClick={goBack}>
                            <ArrowLeftSvg/>
                        </Grid>
                        <Grid item>
                            {title}
                        </Grid>
                    </Grid>
            }
        </Box>
    )
}