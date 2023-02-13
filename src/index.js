import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import router from './router';
import { RouterProvider } from 'react-router-dom'
/*
ReactDOM.render(
	<BrowserRouter>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</BrowserRouter>,
	document.getElementById("root")
);*/

ReactDOM.createRoot(document.getElementById('root')).render(

	<React.StrictMode>
	  <RouterProvider router={router} />
	</React.StrictMode>
  );