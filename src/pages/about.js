import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import AboutMain from '../components/about-main'
import aboutStyles from './about.module.scss'

const AboutPage = () => {
	return (
		<Layout>
			<Head title="About" />
			<h3 className={aboutStyles.topSubtitle}>More details</h3>
			<h1 className={aboutStyles.topTitle}>About Me?</h1>
			<div>
				I'm an Aikido fighter, programming teacher and a full stack developer based in Germany.
				<br />Need a developer for your webs and web apps?
				<br />一言で言うと合気道家であり、プログラミング講師であり、フルスタックエンジニアであり、ドイツ在住、たまに絵描き、それが私です。
			</div>
			<button>
				<Link to="/contact">contact me</Link>
			</button>
			<AboutMain />
		</Layout>
	)
}

export default AboutPage