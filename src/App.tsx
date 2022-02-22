import React, {Suspense, useMemo} from 'react'
import {Route, Routes, useLocation} from 'react-router-dom'
import {HomePage} from './View/Home'
import {LocalizationProvider} from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import ruLocale from 'date-fns/locale/ru'
import {useStore} from 'effector-react'
import {$appModel} from './models/app'
import {getTheme} from './config/theme'
import {ThemeProvider} from '@mui/material'
import {BottomNavBar} from './Components/BottomNavBar'
import {SignIn} from './View/Auth'
import {OrgList, Search} from './View/Search'


const App = () => {
    const {pathname} = useLocation()
    const {$appConfigs: {theme: themeMode}} = useStore($appModel)
    const theme = useMemo(() => getTheme(themeMode), [themeMode])

    const generateBottomNavbar = (
        pathname.indexOf('sign-in') === -1 &&
        pathname.indexOf('sign-up') === -1 &&
        pathname.indexOf('records') === -1
        // pathname.match(/([^/]*)\/[^/]*$/)[1] !== 'offerings'
        // pathname.match(/([^/]*)\/[^/]*$/)[1] !== 'records' &&
        // pathname.match(/([^/]*)\/[^/]*$/)[1] !== 'repost' &&
        // pathname.match(/([^/]*)\/[^/]*$/)[1] !== 'tape' &&
        // pathname.match(/([^/]*)\/[^/]*$/)[1] !== 'unregistered' &&
        // pathname.match(/([^/]*)\/[^/]*$/)[1] !== 'checkout' &&
        // pathname.match(/([^/]*)\/[^/]*$/)[1] !== 'stream'
    )

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
            <ThemeProvider theme={theme}>
                <Routes>
                    <Route
                        path='/'
                        element={
                            <Suspense fallback={<>...loading</>}>
                                <HomePage/>
                            </Suspense>
                        }/>
                    <Route
                        path='/organizations'
                        element={
                            <Suspense fallback={<>...loading</>}>
                                <OrgList/>
                            </Suspense>
                        }/>
                    <Route
                        path='/search'
                        element={
                            <Suspense fallback={<>...loading</>}>
                                <Search/>
                            </Suspense>
                        }/>
                    <Route path='/sign-in' element={
                        <Suspense fallback={<>...loading</>}>
                            <SignIn/>
                        </Suspense>
                    }/>
                </Routes>
                {generateBottomNavbar && <BottomNavBar/>}
            </ThemeProvider>
        </LocalizationProvider>
    )
}

export default App