import React from 'react'

import StudyingImg from '../images/studying.svg'
import Certified from '../images/certified.svg'
import CareerChange from '../images/career-change.svg'
import AikidoProgrammingSmall from '../images/aikido_programming_img_small.svg'
import aboutMainStyles from './about-main.module.scss'

const DojoMain = () => {
  return (
    <main>
      <div className={aboutMainStyles.mainGrid}>
        <img src={StudyingImg} alt="StudyingImg" className={aboutMainStyles.mainImg} />
        <div className={aboutMainStyles.mainDesc}>
          My students have various goals. Mostly, they want to be developers, being interested in full remote work, etc...
          <br />フロントエンド、マークアップエンジニア、コーダーを目指される方や、自分のブログ運営に役立てたい方、海外フリーランスのエンジニアになりたい方、場所を選ばない働き方を実現したい方など、様々な方が受講しています。
        </div>
      </div>

      <div className={aboutMainStyles.mainGrid}>
        <img src={Certified} alt="Certified" className={aboutMainStyles.mainImg} />
        <div className={aboutMainStyles.mainDesc}>
          I have 3 years experience of teaching over 40 students. 8 of my students got job offers as developers in Japanese companies &amp; German company, and gained the career as freelance developers.
          <br />プログラミング講師歴約3年、40名以上マンツーマンで担当した実績があります。国内とドイツで企業就職された方や、フリーランスとしてキャリアアップされた方を、8名輩出しました。
        </div>
      </div>

      <div className={aboutMainStyles.mainGrid}>
        <img src={CareerChange} alt="CareerChange" className={aboutMainStyles.mainImg} />
        <div className={aboutMainStyles.mainDesc}>
          My mission is to let people know programming is fun.
          <br />With this mission, I teach based on my own experience changing career from a cabin crew to a developer.
          <br />パソコン初心者から、マークアップエンジニアの経歴がある方まで、幅広いレベルの方に対応しています。私自身が客室乗務員から独学でエンジニアになった経験を踏まえ、「プログラミングは楽しい」と思っていただけるサポートを大事にしています。
        </div>
      </div>

      <div className={aboutMainStyles.mainGrid}>
        <img src={AikidoProgrammingSmall} alt="AikidoProgrammingSmall" className={aboutMainStyles.mainImg} />
        <div className={aboutMainStyles.mainDesc}>
          All personalized freelance tips are here to get job offers and to control work-life balance.
          <br />経歴ゼロからのフリーランス案件受注から納品までのノウハウもオーダーメイドのサポートも、全コースに含まれているのが特徴です。クライアント獲得方法からワークライフバランスのコントロールなど、実際に経歴ゼロから海外フリーランスエンジニアになった私と卒業生の経験をもとにしたサポート内容です。
        </div>
      </div>
    </main>
  )
}

export default DojoMain