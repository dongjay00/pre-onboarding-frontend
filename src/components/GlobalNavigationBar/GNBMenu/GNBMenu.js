import "./GNBMenu.css";
import { Link } from "react-router-dom";
import { ReactComponent as MenuBeta } from "../../../assets/icons/menu-beta.svg";
import { ReactComponent as MenuNew } from "../../../assets/icons/menu-new.svg";

function GNBMenu() {
  const menuList = [
    {
      title: "채용",
      type: "",
    },
    {
      title: "이벤트",
      type: "",
    },
    {
      title: "직군별 연봉",
      type: "",
    },
    {
      title: "이력서",
      type: "",
    },
    {
      title: "커뮤니티",
      type: "New",
    },
    {
      title: "프리랜서",
      type: "",
    },
    {
      title: "AI 합격예측",
      type: "Beta",
    },
  ];

  return (
    <ul className="Menu">
      {menuList.map((menuItem) => (
        <li key={menuItem.title}>
          <Link to="/">{menuItem.title}</Link>
          {menuItem.type === "New" && (
            <span>
              <MenuNew />
            </span>
          )}
          {menuItem.type === "Beta" && (
            <span>
              <MenuBeta />
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

export default GNBMenu;
