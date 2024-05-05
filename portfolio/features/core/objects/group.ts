import {IoApps, IoLayers as Icon, IoSettings} from 'react-icons/io5'
import {Content, SchemaInputProps} from '../../../schemas/types'
import {hiddenField} from '../../../utils/shared-utils'

export const groupPreview = {
  select: {
    title: 'title',
    items: 'items',
    subtitle: 'subtitle',
    hidden: 'isHidden',
  },
  prepare({title, items, subtitle, hidden}: any) {
    const count = items?.length || 0
    const countText = count === 1 ? '1 item' : `${count} items`
    const hiddenIndicator = hidden ? '🚫 ' : ''
    return {
      title: `${hiddenIndicator}${title ?? '<Group>'}`,
      subtitle: `${subtitle || ''} (${countText})`,
    }
  },
}

export class Group extends Content {
  name = 'group'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      name: 'group',
      title: 'Group',
      type: 'object',
      icon: Icon,
      groups: [
        {name: 'main', title: 'Main', icon: IoApps},
        {name: 'configuration', title: 'Configuration', icon: IoSettings},
      ],
      fields: [
        {
          ...hiddenField,
          group: 'configuration',
        },
        {
          title: 'Is Title Center?',
          name: 'isCenter',
          type: 'boolean',
        },
        {
          title: 'Is Full Screen?',
          name: 'isFull',
          type: 'boolean',
        },
        {
          name: 'padding',
          title: 'Padding',
          type: 'object',
          fields: [
            {
              name: 'mobile',
              title: 'Mobile',
              type: 'string',
            },
            {
              name: 'desktop',
              title: 'Desktop',
              type: 'string',
            },
          ],
        },
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          group: 'main',
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
          group: 'main',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'string',
          group: 'main',
        },
        {
          name: 'ctaLabel',
          title: 'CTA Label',
          type: 'string',
          group: 'main',
        },
        {
          name: 'url',
          title: 'Url',
          type: 'string',
          group: 'main',
        },
        {
          name: 'urlType',
          title: 'Url Type',
          type: 'string',
          options: {
            list: ['internal', 'external', 'link', 'dialog'],
          },
          group: 'main',
        },
        {
          title: 'Tags',
          name: 'tags',
          type: 'array',
          of: [{type: 'string'}],
        },
        {
          name: 'variant',
          title: 'Variant',
          type: 'string',
          options: {
            list: variants?.group,
          },
          group: 'main',
        },
        {
          name: 'largeVariant',
          title: 'Large Variant',
          type: 'string',
          options: {
            list: variants?.group,
          },
          group: 'main',
        },
        {
          name: 'backgroundImage',
          title: 'Background Image',
          type: 'image',
          group: 'main',
        },
        {
          name: 'items',
          title: 'Items',
          type: 'array',
          of: items?.pageItems,
          group: 'main',
        },
      ],
      preview: groupPreview,
    }
  }
}
