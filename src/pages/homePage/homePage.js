import Slider from "../../components/slider/Slider";
import Home from "../../components/home/Home";


const Homepage = ({setProductQuantity}) => {
  return ( 
    <>
    <Slider/>
    <Home setProductQuantity={setProductQuantity}/>
    </>
  );
}

export default Homepage;
