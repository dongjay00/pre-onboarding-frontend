import { Link } from "react-router-dom";
import "./GNBAside.css";
import { ReactComponent as SearchButton } from "../../../assets/icons/search-button.svg";
import { ReactComponent as NotiButton } from "../../../assets/icons/noti-button.svg";
import { ReactComponent as MenuButton } from "../../../assets/icons/menu-button.svg";

function ProfileButton() {
  return (
    <div className="AvatarBorder">
      <img
        className="AvatarImage"
        src="https://static.wanted.co.kr/images/profile_default.png"
        alt="profile"
      />
    </div>
  );
}

function GNBAside() {
  const asideList = [
    {
      liClassName: "",
      btnClassName: "SearchButton",
    },
    {
      liClassName: "",
      btnClassName: "NotiButton",
    },
    {
      liClassName: "MdMoreVisible ProfileBox",
      btnClassName: "ProfileButton",
    },
    {
      liClassName: "MdMoreVisible LeftDivision",
      btnClassName: "DashboardButton",
    },
    {
      liClassName: "AsideVisibleMenu",
      btnClassName: "MenuButton",
    },
  ];

  const components = {
    SearchButton,
    NotiButton,
    ProfileButton,
    MenuButton,
  };

  return (
    <aside className="Aside">
      <ul>
        {asideList.map((asideItem) => {
          const AsideComponent = components[asideItem.btnClassName];
          return (
            <li key={asideItem.btnClassName} className={asideItem.liClassName}>
              {asideItem.btnClassName === "DashboardButton" ? (
                <Link className={asideItem.btnClassName} to="/">
                  기업 서비스
                </Link>
              ) : (
                <button type="button" className={asideItem.btnClassName}>
                  <AsideComponent />
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default GNBAside;
