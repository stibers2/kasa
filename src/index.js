import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css';
/*import App from './App';*/
import reportWebVitals from './reportWebVitals';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home'
import About from './pages/About'
import Rental from './pages/Rental'
import Error from './pages/Error'
import Test from './pages/Test'
import Features from './pages/Features'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route exact path="/"  element={<Home/>} />
        <Route path="/about"  element={<About/>} />
        <Route path="/test"  element={<Test/>} />
        <Route path="/rental"  element={<Rental/>} />
        <Route path="/features"  element={<Features/>} />
       {/*} <Route
          path="/rental/:id"
          render={(props) => <Rental {...props} />}
/> */}
        <Route path="*" element={<Error/>} />
      </Routes>
      {/*<App />*/}
      <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
