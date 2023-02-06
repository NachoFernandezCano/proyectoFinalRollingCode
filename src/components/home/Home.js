import Cards from "../cards/Cards";
import Advertisement from "../advertisement/Advertisement";
import "./home.css"

const Home = () => {
  return (
    <>
      <h2>Productos</h2>
      <section id="main" className="d-flex flex-row">
        <Cards />
        <Advertisement />
      </section>
    </>
  );
}

export default Home;
