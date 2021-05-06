import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'
import contactStyles from './contact.module.scss'

const ContactPage = () => {
	return (
		<Layout>
			<Head title="Contact" />
			<h3 className={contactStyles.topSubtitle}>Need a Developer?</h3>
			<h1 className={contactStyles.topTitle}>Contact Me</h1>
			<div>
				If you need a developer for your webs and web apps, just contact me through Twitter / Github. I'm very open to give web development talks in the events and conferences as well.
			</div>
			<div>
				ドイツで仕事をしています。web開発やwebアプリ開発、Lilacのサポート利用をご希望でしたら、お気軽にTwitter DM、GitHubからご連絡ください。
			</div>

			<button className={contactStyles.twitterColor}>
				<a href="https://twitter.com/arisa_dev" target="_blank" rel="noopener noreferrer">Twitter</a>
			</button>

			<button className={contactStyles.githubColor}>
				<a href="https://github.com/schabibi1" target="_blank" rel="noopener noreferrer">GitHub</a>
			</button>
		</Layout>
	)
}

export default ContactPage