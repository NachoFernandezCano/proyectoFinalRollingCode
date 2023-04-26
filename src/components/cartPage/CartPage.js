import axios, { Axios } from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import "./cartPage.css";

const CartPage = () => {
  const [cart, setCart] = useState([]);

  const getCart = async () => {
    const token = localStorage.getItem("user");
<<<<<<< Updated upstream
    const data = await axios.get("http://localhost:4000/cart/getCart", {
=======
    const data = await axios.get("/api/cart/getCart", {
>>>>>>> Stashed changes
      headers: { Authorization: token },
    });
    setCart(data.data.cart.products);
    console.log(data.data.cart.products);
  };

  useEffect(() => {
    getCart();
<<<<<<< Updated upstream
  }, []);
=======
  }, []); // eslint-disable-line

  useEffect(() => {
    const showCartQuantity = async () => {
      setProductQuantity(await getCartCount());
    };
    showCartQuantity();
  }, []); // eslint-disable-line

  const handleBuy = async (userId) => {
    try {
      const token = localStorage.getItem("user");
      const {data} = await axios.get("/api/cart/getCart", {headers: { Authorization: token },});
      if(token){
        const response = await axios.patch("/api/cart/buyCart", { userId: data.cart.user },  { headers: { Authorization: token } });
        if(response.data.tipoerror === "si") {
          setCart([])
        } else {
          alert(response.data.message);        
        }
      }
    } catch (error) {
      console.error(error);
    };
  };
>>>>>>> Stashed changes

  const handleDeleteProduct = async (product) => {
    try {
      const token = localStorage.getItem("user");
<<<<<<< Updated upstream
      await axios.patch("http://localhost:4000/cart/", { productId: product._id }, { headers: { Authorization: token } })
=======
      if (token) {
        await axios.delete("/api/cart/delete", { headers: { Authorization: token }, data: { productId: product._id } })
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
>>>>>>> Stashed changes
      getCart()
    } catch (error) {
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
