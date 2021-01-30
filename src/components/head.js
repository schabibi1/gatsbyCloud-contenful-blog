import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import ogpImage from '../images/portfolio_blog_top.png'

const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
          author
          social {
            twitter
            fbAppID
          }
        }
      }
    }
  `)

  return (
    <Helmet
      title={`${title} | ${data.site.siteMetadata.title}`}
      meta={[
        {
          name: 'keywords',
          content: 'Arisa Fukuzaki, portfolio, full-stack, frontend, developer, enginner, programmer, programming, gatsby, aikido, CodeGrit, ポートフォリオ, フルスタック, フロントエンド, ディベロッパー, エンジニア, プログラマー, プログラミング, 合気道',
        },
      ]}
      meta={[
        {name: 'description', content: data.site.siteMetadata.description},
        {property: 'og:title', content: data.site.siteMetadata.title},
        {property: 'og:type', content: 'website'},
        {property: 'og:url', content: data.site.siteMetadata.siteUrl},
        {property: 'og:image', content: `https://aiki-developer.com${ogpImage}`},
        {property: 'og:description', content: data.site.siteMetadata.description},
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'twitter:image', content: `https://aiki-developer.com${ogpImage}`},
        {name: 'twitter:site', content: data.site.siteMetadata.social.twitter},
        {name: 'twitter:title', content: data.site.siteMetadata.title},
        {property: 'twitter:description', content: data.site.siteMetadata.description},
        {property: 'fb:app_id', content: data.site.siteMetadata.social.fbAppID}
      ]}
    />
  )
}

export default Head