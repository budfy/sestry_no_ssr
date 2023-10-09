// import { Route, Routes } from 'react-router';

import './App.scss'

import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Helmet } from 'react-helmet'

// import fbConfig from './config/firebase.config'
// import { getAnalytics } from 'firebase/analytics'
// import { initializeApp } from 'firebase/app'

export default function App() {
  // const fb_app = initializeApp(fbConfig)
  // const fb_analytics = getAnalytics(fb_app)
  return (
    <>
      <Helmet>
        <meta charset="utf-8"></meta>
        <meta name="description" content="!!!" />
        <meta name="keywords" content="!!!" />
        <meta
          content="width=device-width,initial-scale=1"
          name="viewport"
        ></meta>
        {/* <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" /> */}
        <title>Sestry</title>
      </Helmet>
      <div className="full-page flex w-full flex-col min-h-screen">
        <Header className="basis-auto grow-0" />
        <div className="content grow">
          {/* <Routes> */}
          {/* <Route path="/"> */}
          HELLO!
          {/* </Route> */}
          {/* </Routes> */}
        </div>
        <Footer className="basis-auto grow-0" />
      </div>
    </>
  )
}
