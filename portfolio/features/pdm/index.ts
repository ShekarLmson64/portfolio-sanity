import {FeatureSchemaDefinition} from '../../schemas/types'
import {Project} from './documents/project'
import {Pair} from './objects/pair'

export const pdm: FeatureSchemaDefinition = {
  schemas: [Project, Pair],
  items: {
    pageItems: [
      {
        type: 'project',
      },
    ],
  },
}
