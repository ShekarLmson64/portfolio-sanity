import {IoApps, IoCard as Icon, IoSettings} from 'react-icons/io5'
import {Content, SchemaInputProps} from '../../../schemas/types'
import {Rule} from 'sanity'

export class Card extends Content {
  name = 'card'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      name: 'card',
      title: 'Card',
      type: 'object',
      icon: Icon,
      groups: [
        {name: 'main', title: 'Main', icon: IoApps},
        {name: 'configuration', title: 'Configuration', icon: IoSettings},
      ],
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          group: 'main',
        },
        {
          name: 'subTitle',
          title: 'Sub Title',
          type: 'string',
          group: 'main',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 6,
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
          name: 'variant',
          title: 'Variant',
          type: 'string',
          options: {
            list: [...(variants?.card ?? [])],
          },
          group: 'main',
          validation: (rule: Rule) => rule.required(),
        },
        {
          name: 'largeVariant',
          title: 'Large Variant',
          type: 'string',
          options: {
            list: [...(variants?.card ?? [])],
          },
          group: 'main',
          validation: (rule: Rule) => rule.required(),
        },
        {
          name: 'logo',
          title: 'Logo',
          type: 'image',
          group: 'main',
        },
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          fields: [
            {
              name: 'altText',
              type: 'string',
              title: 'Alternative Text',
            },
          ],
          group: 'main',
        },
        {
          name: 'largeImage',
          title: 'Large Image',
          description: 'Image that will be used for larger screens like Desktop',
          type: 'image',
          fields: [
            {
              name: 'altText',
              type: 'string',
              title: 'Alternative Text',
            },
          ],
          group: 'main',
        },
        {
          name: 'backgroundImage',
          title: 'Background Image',
          type: 'image',
          group: 'main',
        },
      ],
      preview: {
        select: {
          title: 'title',
          subtitle: 'description',
          media: 'image',
          hidden: 'isHidden',
        },
        prepare({title, subtitle, hidden, media}: any) {
          const hiddenIndicator = hidden ? '🚫 ' : ''

          return {
            title: `${hiddenIndicator}${title ?? '<Card>'}`,
            subtitle,
            media,
          }
        },
      },
    }
  }
}
