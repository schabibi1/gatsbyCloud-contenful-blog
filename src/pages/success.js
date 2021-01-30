import React from 'react'

import Head from '../components/head'
import Layout from '../components/layout'
import successStyles from './success.module.scss'

const Success = () => (
  <Layout>
    <Head title="Success Page" />

    <div>
      <header>
        <h1 className={successStyles.topTitle}>Thank you!</h1>
      </header>
      <p>
        Your form is sent successflly.
        <br />You'll be contacted shortly.
      </p>
      <p>
        フォームは無事送信されました。
        <br />後ほど返信させていただきます。
      </p>
    </div>
  </Layout>
)

export default Success