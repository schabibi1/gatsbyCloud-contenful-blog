import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Helmet } from 'react-helmet'
import Prism from 'prismjs'
import './prism.css'

import Layout from '../components/layout'
import templateBlogStyles from './template-blog.module.scss'
import ogpImage from '../images/portfolio_blog_top.png'

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      tag
      slug
      description
      topImage {
        title
        fixed (width: 2800, height: 1500) {
          src
        }
      }
      body {
        json
      }
    }
  }
`

const Blog = (props) => {
  useEffect(() => {
    Prism.highlightAll();
  })

  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt= node.data.target.fields.title['en-US'];
        const url = node.data.target.fields.file['en-US'].url;
        return <img className={templateBlogStyles.blogImage} alt={alt} src={url} />
      }
    }
  }

  return (
    <Layout>
      <Helmet
        title={props.data.contentfulBlogPost.title}
        meta={[
          {
            property: 'og:image',
            content:
            `https://aiki-developer.com${ogpImage}`
          },
          {
            property: 'og:url',
            content: props.data.contentfulBlogPost.slug
          },
          {
            property: 'og:title',
            content: props.data.contentfulBlogPost.title
          },
          {
            property: 'og:description',
            content: props.data.contentfulBlogPost.description
          },
          {
            name: 'description',
            content: props.data.contentfulBlogPost.description
          },
          {name: 'twitter:card', content: 'summary_large_image'},
          {name: 'twitter:site', content: '@arisa_dev'},
          {property: 'fb:app_id', content: '2427104070868143'}
        ]}
      />
      <h4 className={templateBlogStyles.tags}>{props.data.contentfulBlogPost.tag}</h4>
      <h1 className={templateBlogStyles.entryTitle}>
        {props.data.contentfulBlogPost.title}
      </h1>
      <h4>{props.data.contentfulBlogPost.publishedDate}</h4>
      <img
        src={props.data.contentfulBlogPost.topImage.fixed.src}
        alt={props.data.contentfulBlogPost.topImage.title}
      />
      {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
    </Layout>
  )
}

export default Blog