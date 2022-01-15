import { Link } from "react-router-dom";
import "./CarouselCard.css";
import { ReactComponent as GtsButton } from "../../../assets/icons/gts-button.svg";

function CarouselCardImage({ carouselCardItem }) {
  return (
    <div className="Image">
      <Link className="CarouselLink" to="/">
        <img
          className="Image_Image"
          src={carouselCardItem.imageUrl}
          alt={carouselCardItem.title}
        />
      </Link>
    </div>
  );
}

function CarouselCardInformation({ carouselCardItem }) {
  return (
    <div className="Information">
      <h2>{carouselCardItem.title}</h2>
      <h3>{carouselCardItem.subTitle}</h3>
      <hr className="Divider Information_Divider" />
      <Link
        to="/"
        className="Button_Root Button_Text Button_TextPrimary Button_SizeMedium Information_DirectButton"
      >
        <span className="Button_Label">
          바로가기
          <span className="Button_EndIcon">
            <span className="SvgIcon">
              <GtsButton />
            </span>
          </span>
        </span>
      </Link>
    </div>
  );
}

function CarouselCard({ carouselCardItem }) {
  return (
    <div className="SlickSlide SlickCloned">
      <div>
        <div>
          <CarouselCardImage carouselCardItem={carouselCardItem} />
          <CarouselCardInformation carouselCardItem={carouselCardItem} />
        </div>
      </div>
    </div>
  );
}

export default CarouselCard;
