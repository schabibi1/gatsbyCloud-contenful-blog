import React from 'react'

import AikidoImg from '../images/aikido_img.svg'
import LilacLogo from '../images/lilac-about.png'
import DeJpImg from '../images/de_jp_img.svg'
import FullStackImg from '../images/full_stack_img.svg'
import aboutMainStyles from './about-main.module.scss'

const AboutMain = () => {
  return (
    <main>
      <div className={aboutMainStyles.mainGrid}>
        <img src={AikidoImg} alt="aikidoImg" className={aboutMainStyles.mainImg} />
        <div className={aboutMainStyles.mainDesc}>
          I've been trained Aikido in Germany. Endlessly, I can talk about the benefit from Aikido and Budo.
          <br />合気道をドイツの道場で修行中。自称、武道家プログラマー。合気道や武道全般の面白さやメリットを語り始めると止まりません。
        </div>
      </div>

      <div className={aboutMainStyles.mainGrid}>
        <img src={LilacLogo} alt="LilacLogo" className={aboutMainStyles.mainImg} />
        <div className={aboutMainStyles.mainDesc}>
          I love teaching programming. I've taught programming 2 years in CodeGrit. Currently, I teach and create textbooks in <a href="https://zenn.dev/arisa_dev" target="_blank" rel="noopener noreferrer">Lilac</a>. I'm a founder of <a href="https://zenn.dev/arisa_dev" target="_blank" rel="noopener noreferrer">Lilac</a> as well.
          <br />2017年よりオンラインプログラミングスクールのメンター講師を2年務めました。現在はそのキャリアを基に独立して<a href="https://zenn.dev/arisa_dev" target="_blank" rel="noopener noreferrer">Lilac（ライレック）</a>を立ち上げ、教材販売と個別プログラミング学習サポート提供をしています。40名以上マンツーマンで担当した実績があります。
        </div>
      </div>

      <div className={aboutMainStyles.mainGrid}>
        <img src={DeJpImg} alt="deJpImg" className={aboutMainStyles.mainImg} />
        <div className={aboutMainStyles.mainDesc}>
          I'm from Japan. Currently, I've been living in Germany since 2017 with my programmer job.
          <br />Before living in Germany, I used to work in an airline in Dubai.
          <br />日本出身ですが、2017年からドイツに住んでいます。ドイツに移住する前は、ドバイの航空会社で客室乗務員を1年ほどしていました。
        </div>
      </div>

      <div className={aboutMainStyles.mainGrid}>
        <img src={FullStackImg} alt="fullStackImg" className={aboutMainStyles.mainImg} />
        <div className={aboutMainStyles.mainDesc}>
          I build websites and web apps. My favorite frameworks and libraries are Gastby.js and React.
          <br />web開発やwebアプリ開発もフルスタックエンジニアとして行なっています。Gatsby.jsやReactでの開発が大好きでこのサイトもGatsbyで構築しています。
        </div>
      </div>
    </main>
  )
}

export default AboutMain