import { defineType, defineField } from 'sanity'

const salonInfo = defineType({
  name: 'salonInfo',
  title: 'Salon Informatie',
  type: 'document',
  
  // Hiermee dwingen we de naam "Salon Informatie" af in de zijbalk
  preview: {
    prepare() {
      return {
        title: 'Salon Informatie'
      }
    }
  },

  // Hier definiëren we de tabbladen
  groups: [
    { name: 'tijden', title: 'Openingstijden', default: true },
    { name: 'fotos', title: "Lookbook & Foto's" }
  ],

  fields: [
    // --- OPENINGSTIJDEN ---
    defineField({ name: 'maandag', title: 'Maandag', type: 'string', group: 'tijden' }),
    defineField({ name: 'dinsdag', title: 'Dinsdag', type: 'string', group: 'tijden' }),
    defineField({ name: 'woensdag', title: 'Woensdag', type: 'string', group: 'tijden' }),
    defineField({ name: 'donderdag', title: 'Donderdag', type: 'string', group: 'tijden' }),
    defineField({ name: 'vrijdag', title: 'Vrijdag', type: 'string', group: 'tijden' }),
    defineField({ name: 'zaterdag', title: 'Zaterdag', type: 'string', group: 'tijden' }),
    defineField({ name: 'zondag', title: 'Zondag', type: 'string', group: 'tijden' }),

    // --- FOTO GALERIJ ---
    defineField({
      name: 'galerij',
      title: 'Lookbook Foto\'s',
      type: 'array',
      group: 'fotos',
      of: [{ 
        type: 'image',
        options: { hotspot: true }
      }]
    })
  ]
})

export const schemaTypes = [salonInfo]