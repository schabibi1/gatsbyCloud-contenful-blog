import React from 'react';
import { Link } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';

import footerStyles from './footer.module.scss';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className={footerStyles.footer}>
      <h5>Created by {data.site.siteMetadata.author}, © 2021</h5>
      <h5>
        <Link
          to="/privacyPolicy"
          className={footerStyles.footer}>
          プライバシーポリシー
        </Link>
      </h5>
    </footer>
  )
}

export default Footer