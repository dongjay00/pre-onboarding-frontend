import "./Carousel.css";
import CarouselButton from "./CarouselButton/CarouselButton";
import CarouselCard from "./CarouselCard/CarouselCard";
import { carouselCardList, btnList } from "../../libs/Carousel";

function Carousel() {
  return (
    <div className="TopBanner">
      <div className="SlickSlider SlickInitialized">
        <div className="SlickList">
          <div className="SlickTrack">
            {carouselCardList.map((carouselCardItem) => {
              return (
                <CarouselCard
                  key={carouselCardItem.id}
                  carouselCardItem={carouselCardItem}
                />
              );
            })}
          </div>
        </div>
      </div>
      {btnList.map((btnItem) => (
        <CarouselButton key={btnItem.arrowType} arrowType={btnItem.arrowType} />
      ))}
    </div>
  );
}

export default Carousel;
