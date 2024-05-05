import {Content, SchemaInputProps} from '../../../schemas/types'

export class Project extends Content {
  name = 'project'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      title: 'Project',
      name: 'project',
      type: 'document',
      fields: [
        {
          title: 'Name',
          name: 'name',
          type: 'string',
        },
        {
          title: 'URL',
          name: 'url',
          type: 'string',
        },
        {
          title: 'Description',
          name: 'description',
          type: 'string',
        },
        {
          title: 'Is Current Project?',
          name: 'isCurrent',
          type: 'boolean',
        },
        {
          title: 'Technology',
          name: 'technology',
          type: 'string',
        },
        {
          title: 'Thumbnails',
          name: 'thumbnail',
          type: 'array',
          of: [{type: 'image'}],
        },
        {
          name: 'logo',
          title: 'Logo',
          type: 'image',
          fields: [
            {
              name: 'altText',
              type: 'string',
              title: 'Alternative Text',
            },
          ],
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
        },
        {
          name: 'pairs',
          type: 'array',
          of: [{type: 'pair'}],
        },
        {
          title: 'Roles',
          name: 'roles',
          type: 'array',
          of: [{type: 'string'}],
        },
      ],
    }
  }
}
