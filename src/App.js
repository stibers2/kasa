import "./App.css";
import "./Containers/Home/Home.scss";
import { Component } from "react";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Header";
import Router from "./router";

export default class App extends Component {
	render() {
		return (
			<>
				
				<Router></Router>
				
			</>
		);
	}
}
