import React from "react"
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup"
import { FaHeart, FaRegStar, FaShoppingCart, FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import axios from "axios";
import { useEffect, useState } from "react";

const Cards = () => {
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
    <Card>
      <FaRegStar className="hot-item" />
      <Card.Img variant="top"
        src={product.img} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{product.price}</ListGroup.Item>
      </ListGroup>
      <Card.Body className="card-body">
        <Card.Link href="#">
          <FaHeart className="fav-icon" />
        </Card.Link>
        <Card.Link href="#">
          <FaShoppingCart className="cart-icon fav-icon" />
        </Card.Link>
      </Card.Body>
      <Link className="cards-btn" to="/"> Ver más </Link>
    </Card>
  );
}

export default Cards;
