import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes, useParams, useSearchParams } from 'react-router-dom'
import './index.css';
/*import App from './App';*/
import reportWebVitals from './reportWebVitals';
import Layout from './components/Layout';
// import Footer from './components/Footer';
// import Header from './components/Header';
import Home from './pages/Home'
import About from './pages/About'
import Rental from './pages/Rental'
import Error from './pages/Error'
import Test from './pages/Test'
import Features from './pages/Features'
import CarouselPic from './pages/CarouselPic';
import data from './assets/logements.json'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="" element={<Layout />}>
    <Route exact path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/test" element={<Test />} />
    <Route
      path="/rental/:rentalId"
      element={<Rental />}
      errorElement={<Error/>}
      loader={({params}) => {
        const { rentalId } = params;
        console.log('rentalId', rentalId);
        if (rentalId === undefined || rentalId === null) {
          throw new Error("Not found !");
        }
        const rental = data.find(({id}) => rentalId === id);
        if (rental === undefined || rental == null) {
          throw new Error("Not found !");
        }
        console.log('rental', rental);
        return { rental }
      }}
    />
    <Route path="/features" element={<Features />} />
    <Route path="/carousel/:rentalId" element={<CarouselPic />}
      loader={({ params }) => {
        // const { rentalId } = params;
        const pId = params.rentalId;
        if (pId === undefined || pId === null || pId === "") {
          throw new Response("Not found", { status: 404 });
        }
        const rental = data.find(({ id }) => id === pId);
        if (rental === undefined || rental === null) {
          throw new Response("Not found", { status: 404 });
        }
        return { rental };
      }}
      errorElement={<Error />} />
      <Route path="*" element={<Error />} />
  </Route>
));

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
