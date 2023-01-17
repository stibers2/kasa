const CarouselItem = ({ width, picture }) => {
    return (
        <div className="carousel-item" style={{ width: width }}>
            <div className="item">
                <div className="item__image">
                    <img src={picture} alt="" />
                </div>
            </div>
        </div>
    );
}

export default CarouselItem;