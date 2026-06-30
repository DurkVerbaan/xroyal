import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

export default defineConfig({
  title: 'Kapper Dashboard',
  projectId: 'ghjlt25x', // <-- Plak hier jouw ID
  dataset: 'production',
  plugins: [deskTool()],
  schema: {
    types: [
      {
        name: 'salonInfo',
        title: 'Salon Informatie',
        type: 'document',
        fields: [
          { name: 'maandag', title: 'Maandag', type: 'string' },
          { name: 'dinsdag', title: 'Dinsdag', type: 'string' },
          { name: 'woensdag', title: 'Woensdag', type: 'string' },
          { name: 'donderdag', title: 'Donderdag', type: 'string' },
          { name: 'vrijdag', title: 'Vrijdag', type: 'string' },
          { name: 'zaterdag', title: 'Zaterdag', type: 'string' },
          { name: 'zondag', title: 'Zondag', type: 'string' },
          {
            name: 'galerij',
            title: 'Foto Galerij',
            type: 'array',
            of: [{ type: 'image' }]
          }
        ]
      }
    ],
  },
})