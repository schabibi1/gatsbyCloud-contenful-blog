import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import blogStyles from './blog.module.scss'

const BlogPage = () => {
	const data = useStaticQuery(graphql`
		query {
			allContentfulBlogPost (
				sort: {
					fields:publishedDate,
					order:DESC
				}
			) {
				edges {
					node {
						title
						slug
						publishedDate(formatString:"MMMM Do, YYYY")
						tag
						description
						topImage {
							title
							resize (width: 2000, height: 550) {
								src
							}
						}
					}
				}
			}
		}
	`)

	return (
		<Layout>
			<Head title="Blog" />
			<h3 className={blogStyles.topSubtitle}>Looking for ...</h3>
			<h1 className={blogStyles.topTitle}>My Blog?</h1>
			<p>
				Are you interested in Aikido, programming and German life?
				<br />合気道、プログラミング、ドイツ情報を気ままに書いてます。
			</p>
			<ol className={blogStyles.posts}>
				{data.allContentfulBlogPost.edges.map((edge) => {
					return (
						<li className={blogStyles.post}>
							<Link to={`/blog/${edge.node.slug}`}>
								<h4 className={blogStyles.tags}>{edge.node.tag}</h4>
								<h2>{edge.node.title}</h2>
								<h3>{edge.node.publishedDate}</h3>
								<img 
									src={edge.node.topImage.resize.src}
									alt={edge.node.topImage.title}
								/>
								<p>{edge.node.description}</p>
							</Link>
						</li>
					)
				})}
			</ol>
		</Layout>
	)
}

export default BlogPage