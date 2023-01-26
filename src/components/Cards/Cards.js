import { Link } from "react-router-dom";
import { Card, Button, Col, Row } from "react-bootstrap";
import { FaHeart, FaRegStar, FaShoppingCart } from 'react-icons/fa';
import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "./cards.css"

const Cards = () => {
  const [product, setProduct] = useState([]);
  const getProduct = async () => {
    try {
      const info = await axios.get("http://localhost:4000/products/products");
      console.log(info);
      setProduct(info.data)
    } catch (error) {
      alert('Los productos no pudieron cargarse correctamente. Intente de nuevo más tarde')
    }
  };
  useEffect(() => {
    getProduct()
  }, []);
  return (
    <Row xs={1} sm={3} md={3} lg={5} className="g-0 justify-content-between rowContainer" key={product._id}> {product.map((product) =>
      <Col>
        <Card className="card">
          {/* <FaRegStar className="hotItem" /> */}
          <Card.Img variant="top"
            src={product.image} />
          <Card.Title className="cardTitle">{product.brand}</Card.Title>
          <Card.Text className="cardTitle text-bolder">{product.name}</Card.Text>
          {/* <Card.Text className="p-2 text-justify">{product.description}</Card.Text> */}
          <Card.Body className="cardBody">
            <Card.Text>${product.price}</Card.Text>
            <Card.Link href="#">
              <FaHeart className="favIcon" />
            </Card.Link>
            <Card.Link href="#">
              <FaShoppingCart className="cartIcon favIcon" />
            </Card.Link>
          </Card.Body>
          <Link className="cardsBtn" to="/"> Ver más </Link>
        </Card>
      </Col>
    )}
    </Row>
  )
};

export default Cards;
