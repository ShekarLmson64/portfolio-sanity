import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemas as types} from './schemas'
import {media} from 'sanity-plugin-media'

export default defineConfig([
  {
    name: 'Dev',
    title: 'Portfolio - Dev',
    projectId: 'rzdcmrnx',
    dataset: 'dev',
    basePath: '/dev',
    plugins: [structureTool(), visionTool(), media()],
    schema: {
      types: types,
    },
  },
  {
    name: 'Production',
    title: 'Portfolio - Production',
    projectId: 'rzdcmrnx',
    dataset: 'production',
    basePath: '/production',
    plugins: [structureTool(), visionTool(), media()],
    schema: {
      types: types,
    },
  },
])
