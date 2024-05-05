import {FeatureSchemaDefinition} from '../../schemas/types'
import {Category} from './documents/category'
import {Page} from './documents/page'
import {Card} from './objects/card'
import {Divider} from './objects/divider'
import {Group} from './objects/group'

export const core: FeatureSchemaDefinition = {
  schemas: [Page, Category, Card, Group, Divider],
  items: {
    pageItems: [
      {
        type: 'card',
      },
      {
        type: 'group',
      },
      {
        type: 'divider',
      },
    ],
  },
}
