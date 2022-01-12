import "./GNBMenu.css";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { ReactComponent as MenuBeta } from "../../../assets/icons/menu-beta.svg";
import { ReactComponent as MenuNew } from "../../../assets/icons/menu-new.svg";

const SELECTED_NAV = "SelectedNav";

function GNBMenu() {
  const menuList = [
    {
      title: "홈",
      type: "",
      className: "XsHomeButton XsOnly",
    },
    {
      title: "채용",
      type: "",
      className: "",
    },
    {
      title: "이벤트",
      type: "",
      className: "",
    },
    {
      title: "직군별 연봉",
      type: "",
      className: "SmMoreVisible",
    },
    {
      title: "이력서",
      type: "",
      className: "SmMoreVisible",
    },
    {
      title: "커뮤니티",
      type: "New",
      className: "SmMoreVisible",
    },
    {
      title: "프리랜서",
      type: "",
      className: "SmMoreVisible",
    },
    {
      title: "AI 합격예측",
      type: "Beta",
      className: "SmMoreVisible",
    },
  ];

  const handleSelect = (e) => {
    const li = ReactDOM.findDOMNode(e.target).parentNode;
    const liBros = li.parentElement.children;

    for (let i = 0; i < liBros.length; i++) {
      if (liBros[i].classList.contains(SELECTED_NAV)) {
        liBros[i].classList.remove(SELECTED_NAV);
        break;
      }
    }

    li.classList.add(SELECTED_NAV);
  };

  return (
    <ul className="Menu">
      {menuList.map((menuItem) => (
        <li
          className={menuItem.className}
          key={menuItem.title}
          onClick={handleSelect}
        >
          <Link className="Menu_Link" to="/">
            {menuItem.title}
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
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default GNBMenu;
