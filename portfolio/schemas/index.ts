import {core} from '../features/core'
import {pdm} from '../features/pdm'
import {bootstrap} from './bootstrap'
import {homePage} from '../features/homepage'

export const schemas = bootstrap([core, pdm, homePage])
