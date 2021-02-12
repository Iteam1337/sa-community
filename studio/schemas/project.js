export default {
  name: 'project',
  type: 'document',
  title: 'Projekt',
  initialValue: () => ({
    tableOfContents: true,
  }),
  fields: [
    {
      type: 'titleString',
      name: 'title',
    },
    {
      type: 'text',
      title: 'En kortare beskrivning av vad artikeln handlar om.',
      name: 'SEOText',
      description: 'Denna text används för SEO.',
    },
    { type: 'defaultSlug', name: 'slug' },
    { type: 'bodyPortableText', name: 'Body' },
    { type: 'tableOfContents', name: 'tableOfContents' },
  ],
  orderings: [
    {
      name: 'createdDateAsc',
      title: 'Created date new–>old',
      by: [
        {
          field: '_createdAt',
          direction: 'desc',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
      media: 'bodyImage',
      name: 'name',
    },
    prepare({ title = 'No name', slug = {}, media, name = 'projekt' }) {
      const path = `/projekt/${slug.current}`

      return {
        path,
        title,
        media,
        subtitle: path,
      }
    },
  },
}
