import './App.scss';

import { Route, Routes } from 'react-router';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Helmet } from 'react-helmet';

export default function App() {
  return (
    <>
      <Helmet>
        <meta charset="utf-8"></meta>
        <meta name="description" content="!!!" />
        <meta name="keywords" content="!!!" />
        <meta content="width=device-width,initial-scale=1"
          name="viewport"></meta>
        {/* <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" /> */}
        <title>Sestry</title>
      </Helmet>
      <Header />
    {/* <Routes> */}
    {/* <Route path="/"> */}
    <main className="main">
      HELLO!
    </main>
    {/* </Route> */}
      {/* </Routes> */ }
      <Footer />
  </>
  );
}
