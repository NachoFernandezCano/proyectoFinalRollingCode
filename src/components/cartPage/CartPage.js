import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import "./cartPage.css"

const CartPage = () => {
  const [cart, setCart] = useState([]);

    const getCart = async () => {
    const token = localStorage.getItem('user');
    const data  = await axios.get('http://localhost:4000/cart/getCart' , { headers: { Authorization: token } });
    setCart(data.data.cart.products);
  };

  useEffect(() => {
    getCart();
  }, []);

  return (
    <>
      <div>
        <h2>Carrito de compra</h2>
      </div>
      <div>
        <Table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Precio</th>
              <th>Cantidad</th>
            </tr>
          </thead>
          <tbody>
            {cart.length > 0 ? (
                cart.map((product) => (
                    <tr key={product._id}>
                        <td>{product.product.name}</td>
                        <td>{product.product.description}</td>
                        <td>${product.product.price}</td>
                        <td>{product.quantity}</td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan="4">No hay productos en el carrito</td>
                </tr>
            )}
          </tbody>
        </Table>
      </div>
    </>
  );
};


export default CartPage