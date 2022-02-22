import React, {FC} from 'react'
import {Avatar, Box, Grid, Paper, Typography} from '@mui/material'
import {ShortCardWrapper} from '../atoms'

interface ShortCardProps {
    avaUrl?: string
    title?: string
    text?: string
    imgSize?: number
    titleSize?: string
    textSize?: string
}

export const ShortCard: FC<ShortCardProps> = (
    {
        avaUrl,
        title,
        text,
        imgSize,
        titleSize,
        textSize
    }
) => {

    return (
        <ShortCardWrapper>
            <Box>
                <Paper elevation={0}>
                    <Grid
                        container
                        spacing={0}
                        wrap='nowrap'
                        sx={{
                            padding: 0,
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        {
                            avaUrl && (
                                <Grid item sx={{paddingRight: 0.5}}>
                                    <Avatar
                                        alt='short-card'
                                        src={avaUrl}
                                        sx={{
                                            width: imgSize ? imgSize : 30,
                                            height: imgSize ? imgSize : 30
                                        }}
                                    />
                                </Grid>
                            )
                        }
                        <Grid item zeroMinWidth>
                            <Typography
                                noWrap
                                sx={{
                                    fontSize: titleSize ? titleSize : '12px',
                                    fontWeight: 500
                                }}
                            >
                                {title}
                            </Typography>
                            <Typography
                                noWrap
                                sx={{
                                    fontSize: textSize ? textSize : '12px'
                                }}
                            >
                                {text}
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
        </ShortCardWrapper>
    )
}
