import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useLocation } from '@reach/router'
import { useStaticQuery, graphql } from 'gatsby'

const query = graphql`
  query SEO {
    sanitySiteSettings {
      description
      title
      URL
      keywords
    }
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl: url
        defaultKeywords: keywords
      }
    }
  }
`

const SEO = ({ title, description, article }) => {
  const { sanitySiteSettings, site } = useStaticQuery(query)
  const { pathname } = useLocation()

  const seo = {
    title: title || sanitySiteSettings.title || site.siteMetadata.defaultTitle,
    description:
      description ||
      sanitySiteSettings.description ||
      site.siteMetadata.defaultDescription,
    url: `${
      sanitySiteSettings.url
        ? sanitySiteSettings.url
        : site.siteMetadata.siteUrl
    }${pathname}`,
    keywords:
      sanitySiteSettings.keywords.join(',') ||
      site.siteMetadata.defaultKeywords.join(','),
  }
  return (
    <Helmet title={seo.title}>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {article && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  article: PropTypes.bool,
}
SEO.defaultProps = {
  title: null,
  description: null,
  article: false,
}