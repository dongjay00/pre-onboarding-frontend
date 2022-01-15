import "./Home.css";
import GlobalNavigationBar from "../../components/GlobalNavigationBar/GlobalNavigationBar";
import Carousel from "../../components/Carousel/Carousel";

function Home() {
  return (
    <>
      <GlobalNavigationBar />
      <main className="Main">
        <Carousel />
      </main>
    </>
  );
}

export default Home;
