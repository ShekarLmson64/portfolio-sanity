import { Content, SchemaInputProps } from '../../../schemas/types'

export class Pair extends Content {
  name = 'role'
  getSchema({ variants, items }: SchemaInputProps) {
    return {
      title: 'Pair',
      name: 'pair',
      type: 'object',
      fields: [
        { title: 'Key', name: 'key', type: 'string' },
        { title: 'Value', name: 'value', type: 'string' },
      ],
    }
  }
}
