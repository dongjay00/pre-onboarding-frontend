import { Link } from "react-router-dom";
import "./GNBMainBarNavTop.css";
import wantedLogo from "../../../assets/images/wanted_logo.png";

const menuIcon = {
  imageUrl: "https://static.wanted.co.kr/images/icon-menu.png",
  imageAlt: "Hamburger",
};

function GNBMainBarNavTop() {
  return (
    <div className="MainBar_Nav_Top">
      <div className="MainBar_Nav_Top_Logo">
        <button className="MainBar_Hamburger">
          <img
            src={menuIcon.imageUrl}
            alt={menuIcon.imageAlt}
            className="MainBar_Hamburger_Image"
          />
        </button>
        <Link to="/" className="MainBar_Logo">
          <img src={wantedLogo} alt="wanted_logo" />
        </Link>
      </div>
      <button id="GNBSignupBtn" type="button">
        회원가입하기
      </button>
    </div>
  );
}

export default GNBMainBarNavTop;
