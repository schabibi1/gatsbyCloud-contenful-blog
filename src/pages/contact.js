import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'
import ContactForm from '../components/contact-form'
import contactStyles from './contact.module.scss'

const ContactPage = () => {
	return (
		<Layout>
			<Head title="Contact" />
			<h3 className={contactStyles.topSubtitle}>Need a Developer?</h3>
			<h1 className={contactStyles.topTitle}>Contact Me</h1>
			<div>
				I work as a freelance. If you need a developer for your webs and web apps, just contact me through Twitter / Github / a contact form in below. I'd love to help you.
				<br />フリーランスのエンジニアとしてドイツで仕事をしています。web開発やwebアプリ開発、プログラミング学習の個別サポート、Lilacコースのご受講をご希望でしたら、お気軽にTwitter、Github、もしくは以下のフォームからご連絡ください。
				<br />フリーランス、海外エンジニア転職などのご相談は、MENTAにて 1,000円/単発(チャット)で承っております👉 <a href="https://menta.work/plan/2157" target="_blank" rel="noopener noreferrer">MENTAご相談受付ページ</a>
			</div>

			<button className={contactStyles.twitterColor}>
				<a href="https://twitter.com/arisa_dev" target="_blank" rel="noopener noreferrer">Twitter</a>
			</button>

			<button className={contactStyles.githubColor}>
				<a href="https://github.com/schabibi1" target="_blank" rel="noopener noreferrer">Github</a>
			</button>

			<ContactForm />
		</Layout>
	)
}

export default ContactPage