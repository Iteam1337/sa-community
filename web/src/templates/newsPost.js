import React from 'react'
import { graphql } from 'gatsby'
import BlockContent from '../components/blockContent'

export const query = graphql`
  query newsPostTemplateQuery($id: String!) {
    sanityNewsPost(id: { eq: $id }) {
      id
      slug {
        current
      }
      title
      author {
        name
      }
      _rawBody(resolveReferences: { maxDepth: 10 })
    }
  }
`

const Component = (props) => {
  const {
    data: { sanityNewsPost: data },
  } = props

  return (
    <>
      <h1>{data.title}</h1>
      <BlockContent blocks={data._rawBody}></BlockContent>
    </>
  )
}

export default Component
