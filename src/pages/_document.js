import { Html, Head, Main, NextScript } from 'next/document'

import Header_ft from '~/src/templates/header_ft';
import Main_ft from '~/src/templates/main_ft';
import Footer_ft from '~/src/templates/footer_ft';

import gs from '~/src/pages/global.sass'
import as from '~/src/styles/utils/_animate.sass'

const {ftwrapper} = require(`~/package.json`);

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {ftwrapper && <Header_ft/>}
      </Head>
      <body className="pc">
        <main className="main" id="content">
          {ftwrapper && <Main_ft />}
          <Main />
          <NextScript />
          {ftwrapper && <Footer_ft />}
        </main>
      </body>
    </Html>
  )
}