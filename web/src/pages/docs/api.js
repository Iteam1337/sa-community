import * as React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import BlockContent from '../../components/blockContent'
import ArticleSideMenu from '../../components/articleSideMenu'
import * as Typography from '../../components/typography'
import SEO from '../../components/seo'
import * as Layout from '../../components/layout/'
import * as Links from '../../components/links'

const query = graphql`
  query api {
    allSanityApi {
      edges {
        node {
          id
          slug {
            current
          }
          title
          description
          _type
        }
      }
    }
    sanityApiPage {
      title
      _rawBody
      keywords
    }
    sanitySiteSettings {
      keywords
      title
      description
    }
  }
`

const Component = () => {
  const {
    sanityApiPage: data,
    allSanityApi,
    sanitySiteSettings = {},
  } = useStaticQuery(query)
  const apis = allSanityApi.edges.map(({ node }) => node) || []

  if (!data && !Boolean(apis.length))
    return <h2 className="text-xl">Data saknas....</h2>

  return (
    <Layout.FlexWrapper>
      <SEO
        title={data.title || sanitySiteSettings.title}
        description={data.description || sanitySiteSettings.description}
        keywords={data.keywords || sanitySiteSettings.keywords}
      />
      <Layout.Aside>
        <ArticleSideMenu title={'API'} posts={apis} url={'docs/api'} />
      </Layout.Aside>
      <Layout.Article>
        <Typography.H1>{data.title}</Typography.H1>
        <BlockContent blocks={data._rawBody} withAnchor={true} />
        {apis.map((item) => (
          <div className="my-3">
            <Links.Anchor slug={item.slug.current}>{item.title}</Links.Anchor>
            <Typography.DescriptionParagraph>
              {item.descriptionText}
            </Typography.DescriptionParagraph>
          </div>
        ))}
      </Layout.Article>
    </Layout.FlexWrapper>
  )
}

export default Component
