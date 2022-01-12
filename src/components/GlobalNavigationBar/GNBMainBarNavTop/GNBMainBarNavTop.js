import { Link } from "react-router-dom";
import "./GNBMainBarNavTop.css";

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
          <span>wanted</span>
        </Link>
      </div>
    </div>
  );
}

export default GNBMainBarNavTop;
