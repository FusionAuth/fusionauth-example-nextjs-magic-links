import type { NextPage } from 'next'
import Head from 'next/head'
import LoginButton from './components/login-btn'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Welcome to FusionAuth + Next.js</title>
      </Head>
      <h1>Welcome to FusionAuth + Next.js</h1>
      <LoginButton />
    </div>
  )
}

export default Home
