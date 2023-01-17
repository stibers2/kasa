import React, { useState } from "react";
import { useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import './carousel.css'

const Carousel = ({ children, pictures }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }
        setActiveIndex(newIndex);
    }
    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) {
                updateIndex(activeIndex + 1);
            }
        }, 1000);
        return () => {
            if (interval) {
                clearInterval(interval);
            }
        }
    });

    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + 1),
        onSwipedRight: () => updateIndex(activeIndex - 1),
    })
    return (
        <div
            {...handlers}
            className="carousel"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div className="carousel__inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: '100%' });
                })}
            </div>
            <div className="indicators">
                <button onClick={() => { updateIndex(activeIndex - 1) }}>Previous</button>
                {React.Children.map(children, (child, index) => {
                    return (
                        <button
                            className={`${index === activeIndex ? "active" : ""}`}
                            onClick={() => { updateIndex(index) }}> {index + 1}</button>
                    );
                })}
                <button onClick={() => { updateIndex(activeIndex + 1) }}>Next</button>
            </div>
            <div className="miniature">
                {React.Children.map(children, (element, index) => {
                    if (!React.isValidElement(element)) return;

                    const {picture} = element.props;
                    console.log('source', picture);
                    return (
                        <div className="miniature__image">
                            <img src={picture} alt="" />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Carousel;