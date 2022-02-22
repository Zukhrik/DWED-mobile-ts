import {Grid} from '@mui/material'
import {DWEDSvg} from '../../../icons'

export const HomeFixedHeaderComponent = () => {
    return (
        <Grid
            container
            direction='row'
            justifyContent='flex-start'
            alignItems='center'
            sx={{
                width: '100%',
                height: '100%',
                padding: '0 12px',
                color: 'primary.main'
            }}
        >
            <Grid item>
                <DWEDSvg/>
            </Grid>
        </Grid>
    )
}