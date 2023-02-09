import "../../assets/css/carousel.css";
import { Component } from "react";
import { AiFillCaretRight } from "react-icons/ai";
import { AiFillCaretLeft } from "react-icons/ai";

export default class Carousel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentSlide: 0,
		};
	}

	componentDidMount() {
		setInterval(() => {
			if (this.state.paused === false) {
				let newSlide =
					this.state.currentSlide === this.props.pictures.length - 1 ? 0 : this.state.currentSlide + 1;
				this.setState({ currentSlide: newSlide });
			}
		}, 4000);
	}

	nextSlide() {
		let newSlide =
			this.state.currentSlide === this.props.pictures.length - 1 ? 0 : this.state.currentSlide + 1;
		this.setState({ currentSlide: newSlide });
	}

	prevSlide() {
		let newSlide =
			this.state.currentSlide === 0 ? this.props.pictures.length - 1 : this.state.currentSlide - 1;
		this.setState({ currentSlide: newSlide });
	}

	setCurrentSlide = (index) => {
		this.setState({ currentSlide: index });
	};

	render() {
		return (
			<div className="container">
				<div className="carousel">
					<div className="carousel_navigation">
						<AiFillCaretLeft
							className="chevron"
							onClick={() => {
								this.prevSlide();
							}}
						/>

						<AiFillCaretRight
							className="chevron"
							onClick={() => {
								this.nextSlide();
							}}
						/>
					</div>

					{this.props.pictures.map((picture, index) => {
						return (
							<img
								alt=""
								src={picture}
								key={index}
								className={index === this.state.currentSlide ? "carousel_img" : "hide-img"}
							></img>
						);
					})}

					<span className="carousel_legend">
						{this.state.currentSlide + 1}/{this.props.pictures.length}
					</span>
				</div>
			</div>
		);
	}
}