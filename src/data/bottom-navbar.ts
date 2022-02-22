import {HomeSvg, LogInSvg, ProfileSvg, SearchSvg} from '../icons'

export const bottomNavbarWithToken = [
    {
        path: '/',
        icon: HomeSvg
    },
    {
        path: '/search',
        icon: SearchSvg
    },
    {
        path: '/profile',
        icon: ProfileSvg
    }
]

export const bottomNavBarWithoutToken = [
    {
        path: '/',
        icon: HomeSvg
    },
    {
        path: '/search',
        icon: SearchSvg
    },
    {
        path: '/sign-in',
        icon: LogInSvg
    }
]