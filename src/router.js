import { Routes, Route } from "react-router-dom";
import About from "./pages/About/index.jsx";
import Error from "./pages/Error/index.jsx";
import Home from "./pages/Home/index.jsx";
import Rental from "./pages/Rental/index.jsx";
import Layout from './components/Layout';

const Router = () => {
	return (
		<Routes>
			<Route path="" element={<Layout />}  >
			<Route path="*" element={<Error />}></Route> 
			<Route path="/about" element={<About />}></Route>
			<Route path="/rental/:id" element={<Rental />}></Route>
			<Route path="/" element={<Home />}></Route>
			</Route>
		</Routes>
	);
};

export default Router