import { Link } from "react-router-dom";
import "./GNBAside.css";
import { ReactComponent as SearchButton } from "../../../assets/icons/search-button.svg";
import { ReactComponent as NotiButton } from "../../../assets/icons/noti-button.svg";

function GNBAside() {
  return (
    <aside className="Aside">
      <ul>
        <li>
          <button type="button" className="SearchButton">
            <SearchButton />
          </button>
        </li>
        <li>
          <button type="button" className="NotiButton">
            <NotiButton />
          </button>
        </li>
        <li className="MdMoreVisible ProfileBox">
          <button type="button" className="ProfileButton">
            <div className="AvatarBorder">
              <img
                className="AvatarImage"
                src="https://static.wanted.co.kr/images/profile_default.png"
                alt="profile"
              />
            </div>
          </button>
        </li>
        <li className="MdMoreVisible LeftDivision">
          <Link className="DashboardButton" to="/">
            기업 서비스
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default GNBAside;
