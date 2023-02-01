import Cards from "../Cards/Cards";
import Advertisement from "../Advertisement/Advertisement";
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
