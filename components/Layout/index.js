import Head from 'next/head';
import Header from '../Header/index'
import 'lazysizes';
export default ({children}) => (
  <div>
    <Head>
      <title>next-yicha</title>
      <link rel="icon" href="/static/favicon.ico"/>
    </Head>
    <Header></Header>
    {children}
  </div>
)