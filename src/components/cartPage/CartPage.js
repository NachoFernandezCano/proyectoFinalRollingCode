import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Table } from 'react-bootstrap'

const CartPage = () => {

  useEffect(() => {
    getCart();
  }, []);

  const [cart, setCart] = useState([]);

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
            <th>Producto</th>
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
                    <tr>
                      <td>{product.product}</td>
                      <td>{product.quantity}</td>
                      <td>{product.userid}</td>
                      <td>0</td>
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