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
    <meta name="description" content="Natūralios sultys - obuolių ir kitų vaisių, daržovių sultys, be priedų ir konservantų, gaminamos iš mūsų pačių užaugintų sodo gėrybių" />
  </Head> <Component {...pageProps} />
  </Layout>
}

export default MyApp
