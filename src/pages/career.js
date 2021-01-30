import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import Lilac from '../images/lilac-top.png'
import PortfolioBlogTop from '../images/portfolio_blog_top.png'
import NeutralMusicAcademy from '../images/neutral-music-academy-top.png'
import GoFreelance from '../images/go-freelance-top.png'
import KCreation from '../images/k-creation.png'
import WPTheme from '../images/WPtheme.png'
import PrevPortfolio from '../images/prev-portfolio.png'
import JBConsulting from '../images/jb-consulting-ipad.png'

import careerStyles from './career.module.scss'

const Career = () => {
  return (
    <Layout>
      <Head title="Career" />
      <h3 className={careerStyles.topSubtitle}>Check out</h3>
			<h1 className={careerStyles.topTitle}>MY CAREER</h1>
			<p>
				Here's something what I used to do and developed.
				<br />エンジニアとしての開発成果物と、エンジニア転身前後のキャリアです。
			</p>
			<button>
				<Link to="/contact">contact me</Link>
			</button>

      <ol className={careerStyles.posts}>
        <li className={careerStyles.post}>
          <a href="https://zenn.dev/arisa_dev">
            <div className={careerStyles.category}>
              <h4 className={careerStyles.tags}>Course Teacher</h4>
              <h4 className={careerStyles.tags}>Founder</h4>
              <h4 className={careerStyles.tags}>Personal Programming Support</h4>
              <h4 className={careerStyles.tags}>Online Programming Courses</h4>
            </div>
            <h2>Lilac</h2>
            <h3>11. 2019 - present, Germany Göppingen (Full-Remote)</h3>
            <img src={Lilac} alt="Lilac" className={careerStyles.careerImg} />
          </a>
        </li>

        <li className={careerStyles.post}>
          <Link to="/">
            <div className={careerStyles.category}>
              <h4 className={careerStyles.tags}>Gatsby</h4>
              <h4 className={careerStyles.tags}>Netlify</h4>
              <h4 className={careerStyles.tags}>Contentful</h4>
              <h4 className={careerStyles.tags}>Illustration</h4>
            </div>
            <h2>Portfolio and Blog</h2>
            <h3>05. 2019, Germany Göppingen</h3>
            <img src={PortfolioBlogTop} alt="portfolioBlogTop" className={careerStyles.careerImg} target="_blank" rel="noopener noreferrer" />
          </Link>
        </li>

        <li className={careerStyles.post}>
          <a href="https://trusting-curran-b7363f.netlify.com/">
            <div className={careerStyles.category}>
              <h4 className={careerStyles.tags}>Gatsby</h4>
              <h4 className={careerStyles.tags}>Stripe</h4>
              <h4 className={careerStyles.tags}>AWS Lambda</h4>
              <h4 className={careerStyles.tags}>Netlify</h4>
            </div>
            <h2>Natural Music Academy, Kazune Koyama and WSBI Salon</h2>
            <h3>2018, Germany Göppingen (Full-Remote)</h3>
            <img src={NeutralMusicAcademy} alt="neutralMusicAcademyTop" className={careerStyles.careerImg} target="_blank" rel="noopener noreferrer" />
          </a>
        </li>

        <li className={careerStyles.post}>
          <a href="https://berlin.codegrit.jp/">
            <div className={careerStyles.category}>
              <h4 className={careerStyles.tags}>Frontend</h4>
              <h4 className={careerStyles.tags}>Git</h4>
              <h4 className={careerStyles.tags}>Team director</h4>
            </div>
            <h2>Freelance School in Cebu Colaborated with CodeGrit BTB and WSBI salon</h2>
            <h3>2018, Germany Göppingen (Full-Remote)</h3>
            <img src={GoFreelance} alt="goFreelanceTop" className={careerStyles.careerImg} target="_blank" rel="noopener noreferrer" />
          </a>
        </li>

        <li className={careerStyles.post}>
          <a href="https://www.codegrit.jp/">
            <div className={careerStyles.category}>
              <h4 className={careerStyles.tags}>Course Teacher</h4>
              <h4 className={careerStyles.tags}>Organizer</h4>
              <h4 className={careerStyles.tags}>Course Material</h4>
            </div>
            <h2>CodeGrit</h2>
            <h3>10. 2017 - 1.2020, Germany Göppingen (Full-Remote)</h3>
          </a>
        </li>

        <li className={careerStyles.post}>
          <a href="https://wsbi.net/">
            <div className={careerStyles.category}>
              <h4 className={careerStyles.tags}>Frontend Developer</h4>
              <h4 className={careerStyles.tags}>Full Stack Developer</h4>
            </div>
            <h2>Private Client, Yuko Fujisawa (wasabi)</h2>
            <h3>09. 2017 - Present, Germany Göppingen (Full-Remote)</h3>
          </a>
        </li>

        <li className={careerStyles.post}>
          <a href="http://k-creation.click/">
            <div className={careerStyles.category}>
              <h4 className={careerStyles.tags}>Frontend</h4>
              <h4 className={careerStyles.tags}>Wordpress</h4>
              <h4 className={careerStyles.tags}>PHP</h4>
              <h4 className={careerStyles.tags}>Server</h4>
            </div>
            <h2>Tomiyama Coating/Printing Co., Ltd. K-Creation Business Department</h2>
            <h3>2017, Germany Göppingen (Full-Remote)</h3>
            <img src={KCreation} alt="kCreation" className={careerStyles.careerImg} target="_blank" rel="noopener noreferrer" />
          </a>
        </li>

        <li className={careerStyles.post}>
          <a href="https://frontendlifeinde.com/">
            <div className={careerStyles.category}>
              <h4 className={careerStyles.tags}>Frontend</h4>
              <h4 className={careerStyles.tags}>Wordpress</h4>
              <h4 className={careerStyles.tags}>PHP</h4>
              <h4 className={careerStyles.tags}>AWS EC2</h4>
            </div>
            <h2>Original WordPress Theme Theme "pastel-pastel1" Blog</h2>
            <h3>2017, Germany Göppingen</h3>
            <img src={WPTheme} alt="wpTheme" className={careerStyles.careerImg} target="_blank" rel="noopener noreferrer" />
          </a>
        </li>

        <li className={careerStyles.post}>
          <a href="http://arisa.fukuzaki.portfolio.s3-website.eu-central-1.amazonaws.com/">
            <div className={careerStyles.category}>
              <h4 className={careerStyles.tags}>Frontend</h4>
              <h4 className={careerStyles.tags}>Design</h4>
              <h4 className={careerStyles.tags}>AWS s3</h4>
            </div>
            <h2>Portfolio 2017</h2>
            <h3>2017, Germany Göppingen</h3>
            <img src={PrevPortfolio} alt="previousPortfolio" className={careerStyles.careerImg} target="_blank" rel="noopener noreferrer" />
          </a>
        </li>

        <li className={careerStyles.post}>
          <a href="https://crowdworks.jp/">
            <div className={careerStyles.category}>
              <h4 className={careerStyles.tags}>Freelance</h4>
              <h4 className={careerStyles.tags}>Frontend Developer</h4>
            </div>
            <h2>Crowdworks</h2>
            <h3>02. 2017 - 04. 2018, Germany Göppingen (Full-Remote)</h3>
          </a>
        </li>

        <li className={careerStyles.post}>
          <a href="http://jbeducational.com/">
            <div className={careerStyles.category}>
              <h4 className={careerStyles.tags}>Frontend</h4>
              <h4 className={careerStyles.tags}>Firebase</h4>
              <h4 className={careerStyles.tags}>Real time chat app</h4>
            </div>
            <h2>JB CONSULTING JB EDUCATIONAL</h2>
            <h3>03. 2017 - 06. 2017, Japan Hiroshima</h3>
            <img src={JBConsulting} alt="jbIpad" className={careerStyles.careerImg} target="_blank" rel="noopener noreferrer" />
          </a>
        </li>

        <li className={careerStyles.post}>
          <a href="https://www.emirates.com/de/english/">
            <div className={careerStyles.category}>
              <h4 className={careerStyles.tags}>Cabin Crew</h4>
              <h4 className={careerStyles.tags}>Aviation</h4>
            </div>
            <h2>Emirates Airline, Cabin Crew</h2>
            <h3>02. 2016 - 02. 2017, UAE Dubai</h3>
          </a>
        </li>
			</ol>
    </Layout>
  )
}

export default Career