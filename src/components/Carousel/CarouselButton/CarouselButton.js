import "./CarouselButton.css";
import { ReactComponent as NextArrow } from "../../../assets/icons/next-arrow.svg";
import { ReactComponent as PrevArrow } from "../../../assets/icons/prev-arrow.svg";

function CarouselButton(props) {
  const { arrowType } = props;
  const components = {
    NextArrow,
    PrevArrow,
  };
  const ArrowTag = components[arrowType];
  return (
    <button type="button" className={`TopBanner_Arrow TopBanner_${arrowType}`}>
      <span className="SvgIcon">
        <ArrowTag />
      </span>
    </button>
  );
}

export default CarouselButton;
