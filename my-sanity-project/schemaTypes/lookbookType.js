export const lookbookType = {
  name: 'lookbook',
  title: 'Lookbook (Foto Galerij)',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titel van de foto',
      type: 'string',
      description: 'Bijvoorbeeld: Modern kapsel of heren coupe (optioneel)'
    },
    {
      name: 'image',
      title: 'Afbeelding',
      type: 'image',
      options: {
        hotspot: true // Hiermee kan de kapper de foto mooi uitsnijden in Sanity
      },
      validation: Rule => Rule.required() // Een foto is verplicht
    }
  ]
}