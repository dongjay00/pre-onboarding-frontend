import "./GlobalNavigationBar.css";
import GNBMainBarNavTop from "./GNBMainBarNavTop/GNBMainBarNavTop";
import GNBMenu from "./GNBMenu/GNBMenu";
import GNBAside from "./GNBAside/GNBAside";

function GlobalNavigationBar() {
  return (
    <div className="NavBar">
      <div className="MainBar">
        <nav className="MainBar_Nav">
          <GNBMainBarNavTop />
          <GNBMenu />
          <GNBAside />
        </nav>
      </div>
    </div>
  );
}

export default GlobalNavigationBar;
