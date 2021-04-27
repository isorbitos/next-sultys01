import Head from 'next/head'
import "@fortawesome/fontawesome-svg-core/styles.css"
import {config} from "@fortawesome/fontawesome-svg-core"

import '../styles/globals.css'
import Layout from '../components/layout/layout'

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return <Layout> <Head>
    <title>Natūralios sultys</title>
    
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head> <Component {...pageProps} />
  </Layout>
}

export default MyApp
