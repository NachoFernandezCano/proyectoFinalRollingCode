import axios, { Axios } from "axios";
import React, { useEffect, useContext } from "react";
import { useState } from "react";
import "./cartPage.css";
import Swal from "sweetalert2";
import { useCartContext } from "../../context/cartContext";

const CartPage = ({setProductQuantity}) => {
  const [cart, setCart] = useState([]);
  const { getCartCount, deleteCartItem} = useCartContext();

  const getCart = async () => {
    const token = localStorage.getItem("user");
    const data = await axios.get("http://localhost:4000/cart/getCart", {
      headers: { Authorization: token },
    });
    setCart(data.data.cart.products);
  };

  useEffect(() => {
    getCart();
  }, []);
  
  useEffect(() => {
    const showCartQuantity = async () => {
      setProductQuantity(await getCartCount());
    };
    showCartQuantity();
  }, []);


    const handleDeleteProduct = async (product) => {
    try {
      const token = localStorage.getItem("user");
      if (token){
      await axios.patch("http://localhost:4000/cart/", { productId: product._id }, { headers: { Authorization: token } })
      const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });
  
        Toast.fire({
          icon: "success",
          title: "Producto eliminado del Carrito",
        });
      } else {
        return Swal.fire({
          title: "<strong>Error</strong>",
          html: "<i>Para usar esta función primero debe iniciar sesión.</i>",
          icon: "error",
        });
      }
      getCart()
      setProductQuantity(await getCartCount());
    } catch (error) {
      if (error.response.data.tipoerror == "tokenno") {
        return Swal.fire({
          title: "<strong>Error</strong>",
          html: "<i>" + error.response.data.message + "</i>",
          icon: "error",
        });
      }
      if (error.response.data.tipoerror == "tokenepx") {
        return Swal.fire({
          title: "<strong>Error</strong>",
          html: "<i>" + error.response.data.message + "</i>",
          icon: "error",
        });
      }
      console.log(error)
    }
  }

  return (
    <div className="bodyCartPage">
      <div>
        <h2>Carrito de compra</h2>
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
    </div>
  );
};

export default CartPage;
