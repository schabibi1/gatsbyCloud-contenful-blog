import React from 'react'
import { Link } from 'gatsby'

import HtmlCssCourse from '../images/avel-chuklanov-DUmFLtMeAbQ-unsplash.jpg'
import GitCourse from '../images/domenico-loia-hGV2TfOh0ns-unsplash.jpg'
import FrontendCourse from '../images/corinne-kutz-tMI2_-r5Nfo-unsplash.jpg'
import WordpressCourse from '../images/fikret-tozak-Zk--Ydz2IAs-unsplash.jpg'
import FreelanceNote from '../images/freelance_course_note.png'
import VSCodeBook from '../images/vscode_book.png'
import HTMLBook from '../images/htmlbook.png'
import CSSBook from '../images/css-book.png'
import FloatBook from '../images/markup-lesson3.png'
import FlexboxBook from '../images/markup-flexbox-book.png'
import OocssBook from '../images/lesson5-oocss.png'
import CssGrid from '../images/css-grid.png'

import careerStyles from '../pages/career.module.scss'

const DojoCourse = () => {
  return (
      <ol className={careerStyles.posts}>
        <li className={careerStyles.post}>
          <Link to="/contact">
            <div className={careerStyles.tagWrapper}>
              <div className={careerStyles.category}>
                <h4 className={careerStyles.tags}>HTML</h4>
                <h4 className={careerStyles.tags}>CSS</h4>
                <h4 className={careerStyles.tags}>レスポンシブデザイン</h4>
                <h4 className={careerStyles.tags}>Bootstrap</h4>
                <h4 className={careerStyles.tags}>Sass</h4>
                <h4 className={careerStyles.tags}>Freelance</h4>
                <h4 className={careerStyles.tags}>Job Support</h4>
              </div>
              <div>
                <h4 className={careerStyles.priceTags}>¥8,000/週 + 納品案件報酬の30%</h4>
              </div>
            </div>
            <h2>web制作入門コース</h2>
            <h3>
              HTMLやCSSをメインに、webサイトの表面を開発するコース。
              <br />案件受注と納品のノウハウや、案件受注に関する質問への回答、アドバイス、受注作業の補助も含まれており、受講生一人一人オーダーメイドの内容でサポート
            </h3>
            <img src={HtmlCssCourse} alt="HtmlCssCourse" className={careerStyles.careerImg} target="_blank" rel="noopener noreferrer" />
          </Link>
        </li>

        <li className={careerStyles.post}>
          <Link to="/contact">
            <div className={careerStyles.tagWrapper}>
              <div className={careerStyles.category}>
                <h4 className={careerStyles.tags}>Git</h4>
                <h4 className={careerStyles.tags}>Github</h4>
                <h4 className={careerStyles.tags}>Command Line</h4>
                <h4 className={careerStyles.tags}>Freelance</h4>
                <h4 className={careerStyles.tags}>Job Support</h4>
              </div>
              <div>
                <h4 className={careerStyles.priceTags}>¥8,000/週 + 納品案件報酬の30%</h4>
              </div>
            </div>
            <h2>Git, Githubコース</h2>
            <h3>
              GitやGithubで、コードの管理ができるようになるコース。
              <br />案件受注と納品のノウハウや、案件受注に関する質問への回答、アドバイス、受注作業の補助も含まれており、受講生一人一人オーダーメイドの内容でサポート
              </h3>
            <img src={GitCourse} alt="GitCourse" className={careerStyles.careerImg} target="_blank" rel="noopener noreferrer" />
          </Link>
        </li>

        <li className={careerStyles.post}>
          <Link to="/contact">
            <div className={careerStyles.tagWrapper}>
              <div className={careerStyles.category}>
                <h4 className={careerStyles.tags}>Frontend</h4>
                <h4 className={careerStyles.tags}>JavaScript</h4>
                <h4 className={careerStyles.tags}>React</h4>
                <h4 className={careerStyles.tags}>Freelance</h4>
                <h4 className={careerStyles.tags}>Job Support</h4>
              </div>
              <div>
                <h4 className={careerStyles.priceTags}>¥8,000/週 + 納品案件報酬の30%</h4>
              </div>
            </div>
            <h2>フロントエンドマスターコース</h2>
            <h3>
              JavaScript(ES6)やReactを学び、webやwebアプリケーションの機能の実装や、動きを付けることができるようになるコース。
              <br />案件受注と納品のノウハウや、案件受注に関する質問への回答、アドバイス、受注作業の補助も含まれており、受講生一人一人オーダーメイドの内容でサポート
              </h3>
            <img src={FrontendCourse} alt="FrontendCourse" className={careerStyles.careerImg} target="_blank" rel="noopener noreferrer" />
          </Link>
        </li>

        <li className={careerStyles.post}>
          <Link to="/contact">
            <div className={careerStyles.tagWrapper}>
              <div className={careerStyles.category}>
                <h4 className={careerStyles.tags}>WordPress</h4>
                <h4 className={careerStyles.tags}>Theme Dev</h4>
                <h4 className={careerStyles.tags}>PHP</h4>
                <h4 className={careerStyles.tags}>Freelance</h4>
                <h4 className={careerStyles.tags}>Job Support</h4>
              </div>
              <div>
                <h4 className={careerStyles.priceTags}>¥8,000/週 + 納品案件報酬の30%</h4>
              </div>
            </div>
            <h2>WordPress開発サポートコース</h2>
            <h3>
              WordPressテーマ開発を学び、WordPress開発案件受注ができる開発スキルを身に付けるコース。
              <br />案件受注と納品のノウハウや、案件受注に関する質問への回答、アドバイス、受注作業の補助も含まれており、受講生一人一人オーダーメイドの内容でサポート
            </h3>
            <img src={WordpressCourse} alt="WordpressCourse" className={careerStyles.careerImg} target="_blank" rel="noopener noreferrer" />
          </Link>
        </li>

        <li className={careerStyles.post}>
          <a href="https://note.com/frontendlifeinde/n/n23fa328f6935">
            <div className={careerStyles.tagWrapper}>
              <div className={careerStyles.category}>
                <h4 className={careerStyles.tags}>Freelance</h4>
                <h4 className={careerStyles.tags}>Job Support</h4>
              </div>
              <div>
                <h4 className={careerStyles.priceTags}>単品¥2,500</h4>
              </div>
            </div>
            <h2>案件受注&amp;納品サポート（記事版）</h2>
            <h3>上記個別サポート版を記事版でひとまとめにした、さくっと読めるnote有料記事</h3>
            <img src={FreelanceNote} alt="FreelanceNote" className={careerStyles.careerImg} target="_blank" rel="noopener noreferrer" />
          </a>
        </li>

        <li className={careerStyles.post}>
          <a href="https://zenn.dev/arisa_dev/books/markup-lesson0">
            <div className={careerStyles.tagWrapper}>
              <div className={careerStyles.category}>
                <h4 className={careerStyles.tags}>VS Code</h4>
                <h4 className={careerStyles.tags}>Book</h4>
              </div>
              <div>
                <h4 className={careerStyles.priceTags}>無料</h4>
              </div>
            </div>
            <h2>マークアップ言語シリーズ: Lesson 0 Visual Studio Codeを導入してみよう（電子書籍）</h2>
            <h3>これからプログラミング学習を始める人のための、Visual Studio Code導入と使い方の基本</h3>
            <img src={VSCodeBook} alt="VSCodeBook" className={careerStyles.careerImg} target="_blank" rel="noopener noreferrer" />
          </a>
        </li>

        <li className={careerStyles.post}>
          <a href="https://zenn.dev/arisa_dev/books/markup-lesson1">
            <div className={careerStyles.tagWrapper}>
              <div className={careerStyles.category}>
                <h4 className={careerStyles.tags}>HTML</h4>
                <h4 className={careerStyles.tags}>Book</h4>
              </div>
              <div>
                <h4 className={careerStyles.priceTags}>一部無料 単品¥2,000</h4>
              </div>
            </div>
            <h2>マークアップ言語シリーズ: Lesson 1 HTMLの基本（電子書籍）</h2>
            <h3>これからプログラミング学習を始める人のための、HTMLの基本</h3>
            <img src={HTMLBook} alt="HTMLBook" className={careerStyles.careerImg} target="_blank" rel="noopener noreferrer" />
          </a>
        </li>

        <li className={careerStyles.post}>
          <a href="https://zenn.dev/arisa_dev/books/markup-lesson2">
            <div className={careerStyles.tagWrapper}>
              <div className={careerStyles.category}>
                <h4 className={careerStyles.tags}>CSS</h4>
                <h4 className={careerStyles.tags}>Book</h4>
              </div>
              <div>
                <h4 className={careerStyles.priceTags}>一部無料 単品¥2,000</h4>
              </div>
            </div>
            <h2>マークアップ言語シリーズ: Lesson 2 CSSの基本（電子書籍）</h2>
            <h3>これからプログラミング学習を始める人のための、CSSの基本</h3>
            <img src={CSSBook} alt="CSSLBook" className={careerStyles.careerImg} target="_blank" rel="noopener noreferrer" />
          </a>
        </li>

        <li className={careerStyles.post}>
          <a href="https://zenn.dev/arisa_dev/books/markup-lesson3">
            <div className={careerStyles.tagWrapper}>
              <div className={careerStyles.category}>
                <h4 className={careerStyles.tags}>CSS</h4>
                <h4 className={careerStyles.tags}>float</h4>
                <h4 className={careerStyles.tags}>Book</h4>
              </div>
              <div>
                <h4 className={careerStyles.priceTags}>一部無料 単品¥2,000</h4>
              </div>
            </div>
            <h2>マークアップ言語シリーズ: Lesson 3 並列、float（電子書籍）</h2>
            <h3>これからプログラミング学習を始める人のための、CSSとfloatの基本</h3>
            <img src={FloatBook} alt="FloatLBook" className={careerStyles.careerImg} target="_blank" rel="noopener noreferrer" />
          </a>
        </li>

        <li className={careerStyles.post}>
          <a href="https://zenn.dev/arisa_dev/books/markup-lesson4">
            <div className={careerStyles.tagWrapper}>
              <div className={careerStyles.category}>
                <h4 className={careerStyles.tags}>CSS</h4>
                <h4 className={careerStyles.tags}>Flexbox</h4>
                <h4 className={careerStyles.tags}>Book</h4>
              </div>
              <div>
                <h4 className={careerStyles.priceTags}>一部無料 単品¥2,000</h4>
              </div>
            </div>
            <h2>マークアップ言語シリーズ: Lesson 4 並列、Flexbox（電子書籍）</h2>
            <h3>これからプログラミング学習を始める人のための、CSSとFlexboxの基本</h3>
            <img src={FlexboxBook} alt="FlexboxBook" className={careerStyles.careerImg} target="_blank" rel="noopener noreferrer" />
          </a>
        </li>

        <li className={careerStyles.post}>
          <a href="https://zenn.dev/arisa_dev/books/markup-lesson5">
            <div className={careerStyles.tagWrapper}>
              <div className={careerStyles.category}>
                <h4 className={careerStyles.tags}>CSS</h4>
                <h4 className={careerStyles.tags}>OOCSS</h4>
                <h4 className={careerStyles.tags}>Book</h4>
              </div>
              <div>
                <h4 className={careerStyles.priceTags}>一部無料 単品¥2,000</h4>
              </div>
            </div>
            <h2>マークアップ言語シリーズ: Lesson 5 オブジェクト指向CSS（OOCSS）（電子書籍）</h2>
            <h3>これからプログラミング学習を始める人のための、CSSとオブジェクト指向CSSの基本</h3>
            <img src={OocssBook} alt="OocssBook" className={careerStyles.careerImg} target="_blank" rel="noopener noreferrer" />
          </a>
        </li>

        <li className={careerStyles.post}>
          <a href="https://zenn.dev/arisa_dev/books/markup-lesson6">
            <div className={careerStyles.tagWrapper}>
              <div className={careerStyles.category}>
                <h4 className={careerStyles.tags}>CSS</h4>
                <h4 className={careerStyles.tags}>CSS Grid</h4>
                <h4 className={careerStyles.tags}>Book</h4>
              </div>
              <div>
                <h4 className={careerStyles.priceTags}>一部無料 単品¥2,000</h4>
              </div>
            </div>
            <h2>マークアップ言語シリーズ: Lesson 6 CSSグリッドレイアウト （電子書籍）</h2>
            <h3>これからプログラミング学習を始める人のための、CSSとCSSグリッドの基本</h3>
            <img src={CssGrid} alt="CssGrid" className={careerStyles.careerImg} target="_blank" rel="noopener noreferrer" />
          </a>
        </li>
			</ol>
  )
}

export default DojoCourse