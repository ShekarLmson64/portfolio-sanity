import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemas as types} from './schemas'

export default defineConfig([
  {
    name: 'Dev',
    title: 'Portfolio - Dev',
    projectId: 'rzdcmrnx',
    dataset: 'dev',
    basePath: '/dev',
    plugins: [structureTool(), visionTool()],
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
    plugins: [structureTool(), visionTool()],
    schema: {
      types: types,
    },
  },
])
