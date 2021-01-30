import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import DojoMain from '../components/dojo-main'
import DojoCourse from '../components/dojo-course'
import aboutStyles from './about.module.scss'

const Dojo = () => {
	return (
		<Layout>
			<Head title="Courses" />
			<h3 className={aboutStyles.topSubtitle}>Wanna know</h3>
			<h1 className={aboutStyles.topTitle}>MY COURSES?</h1>
			<div>
				Depends on your goals, I provide Frontend courses and Freelance Developer Support.
				<br />マンツーマンのオンラインプログラミング学習コースとサポートの提供をLilac（ライレック）でしています。エンジニアの海外フリーランス、バックグラウンドゼロからの受注から納品までのノウハウも、全提供コースに含まれています。（電子書籍教材を除く）
			</div>
			<button>
				<Link to="/contact">受講する</Link>
			</button>
			<DojoMain />
      <DojoCourse />
		</Layout>
	)
}

export default Dojo