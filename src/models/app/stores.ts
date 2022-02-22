import {IAppConfigs} from './types'
import {combine, createStore} from 'effector'

const appConfigs: IAppConfigs = localStorage.getItem('appConfigs')
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    ? JSON.parse(<string>localStorage.getItem('appConfigs'))
    : {theme: 'light'}

const $appConfigs = createStore<IAppConfigs>(appConfigs)

export const $appModel = combine({
    $appConfigs
})