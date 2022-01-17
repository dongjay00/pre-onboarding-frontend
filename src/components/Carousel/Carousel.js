import "./Carousel.css";
import CarouselButton from "./CarouselButton/CarouselButton";
import CarouselCard from "./CarouselCard/CarouselCard";
import { carouselCardList } from "../../libs/Carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState, useEffect } from "react";

const arrows = {
  NEXT_ARROW: "NextArrow",
  PREV_ARROW: "PrevArrow",
};

const centerPadding = {
  CENTER_PADDING_SMALL: "40px",
  CENTER_PADDING_LARGE: "50px",
};

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <CarouselButton
      className={className}
      onClick={onClick}
      arrowType={arrows.NEXT_ARROW}
    />
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <CarouselButton
      className={className}
      onClick={onClick}
      arrowType={arrows.PREV_ARROW}
    />
  );
}

function Carousel() {
  const { CENTER_PADDING_SMALL, CENTER_PADDING_LARGE } = centerPadding;
  const [settings, setSettings] = useState({
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: CENTER_PADDING_LARGE,
    variableWidth: true,
    slidesToShow: 1,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  });

  const resizingHandler = () => {
    if (window.innerWidth <= 1200) {
      setSettings({
        ...settings,
        centerPadding: CENTER_PADDING_SMALL,
        variableWidth: false,
      });
    } else {
      setSettings({
        ...settings,
        centerPadding: CENTER_PADDING_LARGE,
        variableWidth: true,
      });
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      setSettings({
        ...settings,
        centerPadding: CENTER_PADDING_SMALL,
        variableWidth: false,
      });
    }

    window.addEventListener("resize", resizingHandler);
    return () => {
      window.removeEventListener("resize", resizingHandler);
    };
  }, []);

  return (
    <div className="TopBanner">
      <Slider {...settings}>
        {carouselCardList.length &&
          carouselCardList.map((carouselCardItem) => (
            <CarouselCard
              key={carouselCardItem.id}
              carouselCardItem={carouselCardItem}
            />
          ))}
      </Slider>
    </div>
  );
}

export default Carousel;
