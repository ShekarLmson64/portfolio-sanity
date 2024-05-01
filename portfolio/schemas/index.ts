import {core} from '../features/core'
import {pim} from '../features/pim'
import {bootstrap} from './bootstrap'
import {homePage} from '../features/homepage'

export const schemas = bootstrap([core, pim, homePage])
