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
				<br />GatsbyConf 2021 speaker, podcaster and tech blog writer.
				<br />合気道家であり、プログラミング講師であり、フルスタックエンジニアであり、ドイツ在住、たまに絵描き。GastbyConf 2021登壇、Podcast<a href="https://open.spotify.com/show/1VUEHqY3885ToC3uKU5CkP">「アノニマスですけど何か」</a>、テックブログ執筆 etc.
			</div>
			<button>
				<Link to="/contact">contact me</Link>
			</button>
			<AboutMain />
		</Layout>
	)
}

export default AboutPage