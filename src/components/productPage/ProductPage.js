import React, { useState, useEffect } from "react";
import {
  Card,
  Dropdown,
  DropdownButton,
  Form,
  Modal,
} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { FaShieldAlt, FaShippingFast } from "react-icons/fa";
import "./productPage.css";
import Amex from "../../assets/images/mediosDePago/Amex.svg";
import MasterCard from "../../assets/images/mediosDePago/MasterCard.svg";
import Naranja from "../../assets/images/mediosDePago/Naranja.svg";
import Visa from "../../assets/images/mediosDePago/visa.svg";
import { useParams } from "react-router";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useCartContext } from "../../context/cartContext";



const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [show, setShow] = useState(false);
  const [imagenPrincipalProduct, setImagenPrincipalProduct] = useState([])
  const [quantity, setQuantity] = useState(1);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const getProduct = async () => {
    try {
      const info = await axios.get(
        `http://localhost:4000/products/getProduct/` + id
      );
      setProduct(info.data.product);
      setImagenPrincipalProduct(info.data.product.image?.img1);
    } catch (error) {
      alert("Algo salió mal, intente más tarde");
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const imageHandle = (image) => {
    setImagenPrincipalProduct(image)
  }

  const handleQuantityChange = (event) => {
    const value = event.target.value;
    if (value <= product.stock) {
      setQuantity(value);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Cantidad no disponible',
        text: `Solo quedan ${product.stock} unidades disponibles.`,
      });
    }
  };

  let navigate = useNavigate();
  const goToSell = () => {
    navigate("/ComprarProductPage")
  }



  return (
    <div className="productPageContainer">
      <div className="containerImgProduct">
        <div className="containerImagenPrincipal">
          <img
            className="imagenPrincipalProduct" src={imagenPrincipalProduct}>
          </img>
        </div>
        <div className="miniaturasProductContainer">
          <div className="miniaturaProducto">
            <img
              className="thumbnail" onClick={() => imageHandle(product.image?.img1)} src={product.image?.img1}
            ></img>
          </div>
          <div className="miniaturaProducto">
            <img
              className="thumbnail" onClick={() => imageHandle(product.image?.img2)} src={product.image?.img2}
            ></img>
          </div>
          <div className="miniaturaProducto">
            <img
              className="thumbnail" onClick={() => imageHandle(product.image?.img3)} src={product.image?.img3}
            ></img>
          </div>
        </div>
      </div>
      <div className="productInfo">
        <h5 className="productName">
          <div> {product.brand} {product.name}</div>
        </h5>
        <div className="precioMediosDePago">
          <div className="precioProductPage">
            <h2>${product.price}</h2>
          </div>
          <div className="containerBtnMediosDePago">
            <Button onClick={handleShow} className="btn-verMediosDePago">
              Ver los medios de pago
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Medios de pago aceptados</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="containerMedioDePagos">
                  <div>
                    <img src={Visa}></img>
                  </div>
                  <div>
                    <img src={Amex}></img>
                  </div>
                  <div>
                    <img src={MasterCard}></img>
                  </div>
                  <div>
                    <img src={Naranja}></img>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                  Cerrar
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
        <div className="btn-comprasCarrito">
          <div className="containerBtnComprarYa">
            <Button className="btn-comprarYa">Comprar</Button>
          </div>
          <div className="containerBtnAgregarAlcarrito">
            <Button className="btn-agregarAlCarrito">Agregar al carrito</Button>
          </div>
        </div>
        <div className="containerMasCaracteristicas">
          <Card className="masCaracteristicasCard">
            <Card.Text className="masCaracteristicasText">
              {product.description}
            </Card.Text>
          </Card>
        </div>
      </div>
      <div className="containerCardProduct">
        <Card
          className="cardProductPage"
          style={{ width: "18rem", height: "35rem" }}
        >
          <Card.Header>
            <Card.Subtitle className="mt-1 text-muted Envios_mantenimiento">
              <FaShippingFast />
              Estamos trabajando para poder realizar envios.
            </Card.Subtitle>
          </Card.Header>
          <Card.Body className="Info_card">
            <h6 className="Info_Vendedor">Marca {product.brand}</h6>
            <div className="infoStockCompra">
              <h5>Stock disponible</h5>
              <div className="text-muted">({product.stock} Unidad/es)</div>
              <div className="selectorDeCantidadCompra">
                <div>
                  <div>
                    <input type="number" id={quantity} value={quantity} onChange={handleQuantityChange} />
                  </div>
                </div>
              </div>
            </div>
          </Card.Body>
          <Card.Body className="Botones_card_utiles">
            <Button className="btn-reembolso"><Link to='/Error404'>Solicitá una devolución</Link></Button>
          </Card.Body>
          <Card.Body className="infoGarantiaDevoluciones">
            <Card.Subtitle className="mt-1 text-muted">
              <div>
                <p>
                  <FaShieldAlt /> Recibí el producto que esperabas o te
                  devolvemos tu dinero.
                </p>
                <p>3 meses de garantía de fábrica.</p>
              </div>
            </Card.Subtitle>
          </Card.Body>
        </Card>
      </div>
      <h6>Productos que podrían interesarte</h6>
      <div className="containerProductosInteresantes">
      </div>
    </div>
  );
};

export default ProductPage;
