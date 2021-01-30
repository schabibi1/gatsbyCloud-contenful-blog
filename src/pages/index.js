import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import AikidoProgrammingImg from '../images/aikido_programming_img.png'
import indexStyles from './index.module.scss'

const IndexPage = () => {
	return (
		<Layout>
			<Head title="Home" />
			<div className={indexStyles.topWrapper}>
				<div>
					<h3 className={indexStyles.topSubtitle}>Do you wanna know</h3>
					<h1 className={indexStyles.topTitle}>WHO AM I?</h1>
					<p>
						Hiya, I'm Arisa, a full-stack developer and an Aikido fighter living in Germany.
						<br />ドイツ在住、武道家フルスタックエンジニアのArisaです。
					</p>
					<button>
						<Link to="/contact">contact me</Link>
					</button>
				</div>
				<div className={indexStyles.topImage}>
					<img src={AikidoProgrammingImg} alt="aikidoProgrammingImg"　/>
				</div>
			</div>
		</Layout>
	)
}

export default IndexPage