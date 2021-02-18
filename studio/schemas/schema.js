// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import project from './project'
import siteSettings from './siteSettings'
import bodyImage from './bodyImage'
import sectionLink from './sectionLink'
import slug from './slug'
import home from './home'
import about from './aboutUsPage'
import heroImage from './heroImage'
import focusArea from './focusArea'
import api from './api'
import newsPost from './newsPost'
import editor from './editor'
import youtube from './youtube'
import bodyPortableText from './bodyPortableText'
import communication from './communication'
import apiPage from './apiPage'
import tableOfContents from './tableOfContents'
import sourceCode from './sourceCode'
import newsPage from './news'
import projectPage from './projectPage'
import title from './title'
import keywords from './keywords'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    project,
    siteSettings,
    bodyPortableText,
    bodyImage,
    slug,
    sectionLink,
    home,
    heroImage,
    focusArea,
    about,
    api,
    newsPage,
    newsPost,
    editor,
    youtube,
    communication,
    apiPage,
    tableOfContents,
    sourceCode,
    projectPage,
    title,
    keywords,
  ]),
})
