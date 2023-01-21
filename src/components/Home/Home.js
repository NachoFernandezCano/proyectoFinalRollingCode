import { Link } from "react-router-dom";
import { Card, Button, Col, Row } from "react-bootstrap";
import Cards from "../Cards/Cards"
import adPicture from "../../Assets/images/Advertisement/Advertisement2.png"
import adPicture2 from "../../Assets/images/Advertisement/Advertisement3.png"
import adPicture3 from "../../Assets/images/Advertisement/Advertisement1.png"
import axios from "axios";
import { useEffect, useState } from "react";
import "./home.css"

const Home = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [charToShow, setCharToShow] = useState({});

  // const [page, setPage] = useState(1);
  // const [pagesCount, setPagesCount] = useState(1);
  // const [searchFilter, setSearchFilter] = useState('');

  //   useEffect(() => {
  //     handleGetCharacters();
  //   }, [page, searchFilter]);

  // {product.hotItem === "true"? <hotItemCard/>}
  const [product, setProduct] = useState([]);
  const getProducts = async () => {
    try {
      const info = await axios.get("http://localhost:4000/layout");
      setProduct(info.data)
    } catch (error) {
      alert('Los productos no pudieron cargarse correctamente. Intente de nuevo más tarde')
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <section id="main">
        <div class="container-fluid">
          <Row xs={1} sm={3} md={3} lg={5} className="g-0">
            {
              !isLoading ? (
                product.length !== 0 ? (
                  product?.map((product) => (
                    <Col
                      key={product.id}
                    >
                      {Cards}
                    </Col>
                  ))
                ) : (
                  <>no hay productos para tu busqueda</>
                )
              ) : (
                <>Loading...</>
              )
            }

            <div
              class="advertisement d-none d-md-flex align-items-center flex-column col-md-2 col-lg-2 p-0"
            >
              <img
                class="publicity my-3"
                alt="Publicidad"
                src={adPicture}
              />
              <img
                class="publicity my-3"
                alt="Publicidad"
                src={adPicture2}
              />
              <img
                class="publicity my-3"
                alt="Publicidad"
                src={adPicture3}
              />
            </div>
            {/* <div className="pagination">
                <div className="pagination_button">
                  <Button
                    onClick={() => setPage(page - 1)} 
                    disabled={page === 1}
                  >
                    {'<'}
                  </Button>
                  <b className="text-white fs-4">{page}</b>
                  <Button
                    onClick={() => setPage(page + 1)} 
                    disabled={page === pagesCount}
                  >
                    {'>'}
                  </Button>
                </div>
              </div> */}
          </Row>
        </div>
      </section>
    </>
  );
}

export default Home;

// onClick={() => datailsModalToggle(product)}