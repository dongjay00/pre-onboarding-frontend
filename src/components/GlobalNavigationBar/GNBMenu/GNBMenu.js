import "./GNBMenu.css";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { ReactComponent as MenuBeta } from "../../../assets/icons/menu-beta.svg";
import { ReactComponent as MenuNew } from "../../../assets/icons/menu-new.svg";
import { menuList } from "../../../libs/GlobalNavigationBar";

const SELECTED_NAV = "SelectedNav";
const NEW = "new";
const BETA = "beta";

function GNBMenu() {
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
            {menuItem.type === NEW && (
              <span>
                <MenuNew />
              </span>
            )}
            {menuItem.type === BETA && (
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
