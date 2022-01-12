import { Link } from "react-router-dom";
import "./GNBMainBarNavTop.css";
import wantedLogo from "../../../assets/images/wanted_logo.png";

function GNBMainBarNavTop() {
  return (
    <div className="MainBar_Nav_Top">
      <div className="MainBar_Nav_Top_Logo">
        <button className="MainBar_Hamburger">
          <img
            src="https://static.wanted.co.kr/images/icon-menu.png"
            alt="Hamburger"
            className="MainBar_Hamburger_Image"
          />
        </button>
        <Link to="/" className="MainBar_Logo">
          <img src={wantedLogo} alt="wanted_logo" />
        </Link>
      </div>
    </div>
  );
}

export default GNBMainBarNavTop;
