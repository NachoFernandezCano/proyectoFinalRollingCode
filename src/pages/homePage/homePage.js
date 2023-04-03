import Slider from "../../components/slider/Slider";
import Home from "../../components/home/Home";
// import Categories from "../../components/categories/Categories";


const Homepage = ({setProductQuantity}) => {
  return ( 
    <>
    <Slider/>
    <Home setProductQuantity={setProductQuantity}/>
    {/* <Categories/> */}
    </>
  );
}

export default Homepage;
