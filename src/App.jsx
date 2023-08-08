import './App.scss';

import { Route, Routes } from 'react-router';

import { Helmet } from 'react-helmet';

export default function App() {
  return (
    // <Routes>
    //   <Route path="/">
    <div className="App">
      <Helmet>
        <meta charset="utf-8"></meta>
        <meta name="description" content="!!!" />
        <meta name="keywords" content="!!!" />
    <meta content="width=device-width,initial-scale=1"
          name="viewport"></meta>
        {/* <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" /> */}
        <title>Sestry</title>
      </Helmet>
      HELLO!
    </div>
    //   </Route>
    // </Routes>
  );
}
