export default {
  name: 'aboutUs',
  type: 'document',
  title: 'About',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe your site for search engines and social media.',
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Add keywords that describes your site.',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
  ],
}
