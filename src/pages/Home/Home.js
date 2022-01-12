import "./Home.css";
import GlobalNavigationBar from "../../components/GlobalNavigationBar/GlobalNavigationBar";
import Carousel from "../../components/Carousel/Carousel";

function Home() {
  return (
    <div className="Home">
      <GlobalNavigationBar />
      <main className="Main">
        <Carousel />
      </main>
    </div>
  );
}

export default Home;
