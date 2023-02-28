import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Button, Table } from 'react-bootstrap'

const CartPage = () => {

  useEffect(() => {
    getCart();
  }, []);

  const [cart, setCart] = useState([]);
  /* const [products, setProducts] = useState([]) */

    const getCart = async() =>{
      const token = localStorage.getItem('user');
      const {data} = await axios.get("http://localhost:4000/cart/getCart", {headers:{Authorization: token}}); 
      console.log(data);
      setCart(data.cart);      
    }

  return (
    <>
      <div>
        <h2>Carrito de compra</h2>
      </div>
      <div>
        <Table>
          <thead>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Cantidad</th>
          </thead>
          <tbody>
            {
              cart.length !==0 ? (
                cart?.map((product) => (
                  <>
                    <tr key={product._id}>
                      <td>{product.product?.name}</td>
                      <td>{product.product?.description}</td>
                      <td>${product.product?.price * product.quantity}</td>
                      <td>{product.quantity}</td>
                    </tr>
                  </>
                ))                
              ):(
                <>
                </>
              )
            }
            
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default CartPage