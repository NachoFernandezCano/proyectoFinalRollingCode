import Cards from "../cards/Cards";
import Advertisement from "../advertisement/Advertisement";
import "./home.css"

const Home = ({setProductQuantity}) => {
  return (
    <>
      <h2 className="homePTitle">Productos</h2>
      <section id="main" className="d-flex flex-row homeMain">
        <Cards setProductQuantity={setProductQuantity}/>
        <Advertisement />
      </section>
    </>
  );
}

export default Home;
