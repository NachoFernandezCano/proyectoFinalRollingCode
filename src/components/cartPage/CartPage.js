import axios, { Axios } from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import "./cartPage.css";
import { Link } from "react-router-dom";

const CartPage = () => {
  const [cart, setCart] = useState([]);

  const getCart = async () => {
    const token = localStorage.getItem("user");
    const data = await axios.get("http://localhost:4000/cart/getCart", {
      headers: { Authorization: token },
    });
    setCart(data.data.cart.products);
    console.log(data.data.cart.products);
  };

  useEffect(() => {
    getCart();
  }, []);

  const handleDeleteProduct = async (product) => {
    try {
      const token = localStorage.getItem("user");
      await axios.patch("http://localhost:4000/cart/", { productId: product._id }, { headers: { Authorization: token } })
      getCart()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="bodyCartPage">
        <div>
          <h2>Carrito de compra</h2>
        </div>
        <div className="cartButtonArea">
          <Link to={`/FinalizarCompra`}>
            <button className="cartButton">
              Finalizar compra
            </button>
          </Link>
        </div>
        <div className="tableArea">
          {cart.length > 0 ? (
            cart.map((product) => (
              <div key={product._id}>
                <img
                  alt="Foto del producto"
                  src={product.product.image.img1}
                ></img>
                <div className="itemsData">
                  <h3>{product.product.name}</h3>
                  <div className="descriptionArea">
                    {product.product.description}
                  </div>
                  <div>
                    <p>Cantidad: {product.quantity}</p>
                    <p>${product.product.price}</p>
                  </div>
                </div>
                <div>
                  <button onClick={() => handleDeleteProduct(product)}>X</button>
                </div>
              </div>
            ))
          ) : (
            <tr>
              <td colSpan="4">No hay productos en el carrito</td>
            </tr>
          )}
        </div>
        <div className="tableAreaMobile">
          {cart.length > 0 ? (
            cart.map((product) => (
              <div key={product._id}>
                <img
                  alt="Foto del producto"
                  src={product.product.image.img1}
                ></img>
                <div className="itemsDataMobile">
                  <h3>{product.product.name}</h3>
                  <div>
                    {product.product.description}
                  </div>
                  <div>
                    <div>Cantidad: {product.quantity}</div>
                    <div>${product.product.price}</div>
                  </div>
                </div>
                <div>
                  <button onClick={() => handleDeleteProduct(product)}>Quitar producto</button>
                </div>
              </div>
            ))
          ) : (
            <tr>
              <td colSpan="4">No hay productos en el carrito</td>
            </tr>
          )}
        </div>
      </div>
    </>
  );
};

export default CartPage;
