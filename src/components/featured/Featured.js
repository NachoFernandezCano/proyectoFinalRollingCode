import { Link } from "react-router-dom";
import { Card, Col, Row } from "react-bootstrap";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import axios from "config/axiosInit";
import { useState, useEffect } from "react";
import Loader from "components/util/loader/Loader";
import "../cards/cards.css";
import "./featured.css";

const Featured = () => {
  const [hot, setHot] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getHotItem();
  }, []);

  const getHotItem = async () => {
    try {
      setIsLoading(true);
      const hotItem = await axios.get("/api/products/hotItem");
      setHot(hotItem.data.hotItem);
      console.log(hotItem);
      setIsLoading(false);
    } catch (error) {
      if (error?.response?.data?.error === "There is nothing here") {
        setHot([]);
      } else {
        alert("Algo salio mal intente mas tarde");
      }
      setIsLoading(false);
    }
  };

  return (
    <>
      <h2 className="fTitle">Los más destacados</h2>
      <Row
        xs={2}
        sm={3}
        md={3}
        lg={5}
        className="g-0 justify-content-between rowContainer"
      >
        {!isLoading ? (
          hot?.length !== 0 ? (
            hot?.map((product) => (
              <Col key={hot._id}>
                <Card className="cardProduct" >
                  <Card.Img
                    variant="top"
                    className="pCardImg"
                    src={product.image.img1}
                  />
                  <Card.Title className="mCardT">{product.brand}</Card.Title>
                  <Card.Text className="mCardT text-bolder">
                    {product.name}
                  </Card.Text>
                  <Card.Body className="cardBody">
                    <Card.Text className="mCardPrice">
                      ${product.price}
                    </Card.Text>
                    <Card.Link href="#">
                      <FaHeart className="favIcon" />
                    </Card.Link>
                    <Card.Link href="#">
                      <FaShoppingCart className="cartIcon favIcon" />
                    </Card.Link>
                  </Card.Body>
                  <Link className="cardsBtn" to={`/productPage/${product._id}`}>
                    {" "}
                    Ver más{" "}
                  </Link>
                </Card>
              </Col>
            ))
          ) : (
            <>no hay productos para tu busqueda</>
          )
        ) : (
          <Loader />
        )}
      </Row>
    </>
  );
};

export default Featured;
