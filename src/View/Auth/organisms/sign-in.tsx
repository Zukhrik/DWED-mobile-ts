import {Box, Button, Grid, TextField} from '@mui/material'

export default () => {

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                padding: '0 12px'
            }}
        >
            <Box
                component='form'
                sx={{
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <Grid
                    container
                    spacing={1.5}
                >
                    <Grid
                        item
                    >
                        Sign in
                    </Grid>
                    <Grid
                        item
                        sx={{width: '100%'}}
                    >
                        <TextField
                            label='username'
                            variant='filled'
                            sx={{width: '100%'}}
                        />
                    </Grid>
                    <Grid
                        item
                        sx={{width: '100%'}}
                    >
                        <TextField
                            label='password'
                            variant='filled'
                            sx={{width: '100%'}}
                        />
                    </Grid>
                    <Grid
                        item
                        sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'flex-end'
                        }}
                    >
                        <Button variant='contained'>
                            Log in
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}