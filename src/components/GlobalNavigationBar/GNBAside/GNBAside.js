import { Link } from "react-router-dom";
import "./GNBAside.css";
import { ReactComponent as SearchButton } from "../../../assets/icons/search-button.svg";
import { ReactComponent as NotiButton } from "../../../assets/icons/noti-button.svg";
import { ReactComponent as MenuButton } from "../../../assets/icons/menu-button.svg";
import { asideList } from "../../../libs/GlobalNavigationBar";

const avatarImage = {
  imageUrl: "",
  alt: "profile",
  defaultImageUrl: "https://static.wanted.co.kr/images/profile_default.png",
};
const DASH_BOARD_BUTTON = "DashboardButton";

function ProfileButton() {
  return (
    <div className="AvatarBorder">
      <img
        className="AvatarImage"
        src={avatarImage.imageUrl || avatarImage.defaultImageUrl}
        alt={avatarImage.alt}
      />
    </div>
  );
}

function GNBAside() {
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
              {asideItem.btnClassName === DASH_BOARD_BUTTON ? (
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
