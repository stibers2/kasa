import About from "./pages/About/index.jsx";
import Error from "./pages/Error/index.jsx";
import Home from "./pages/Home/index.jsx";
import Rental from "./pages/Rental/index.jsx";
import Layout from './components/Layout';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import data from './assets/logements.json'


const router = createBrowserRouter(createRoutesFromElements(
	<Route path="" element={<Layout />}>
		<Route exact path="/" element={<Home />}
			loader={() => { return { data } }
			} />
		<Route path="/about" element={<About />} />
		<Route
			path="/rental/:rentalId"
			element={<Rental />}
			errorElement={<Error />}
			loader={({ params }) => {
				const { rentalId } = params;
				if (rentalId === undefined || rentalId === null) {
					throw new Error("Not found !");
				}
				const rental = data.find(({ id }) => rentalId === id);
				if (rental === undefined || rental == null) {
					throw new Error("Not found !");
				}
				return { rental }
			}}
		/>
		<Route path="*" element={<Error />} />

	</Route>
));



export default router