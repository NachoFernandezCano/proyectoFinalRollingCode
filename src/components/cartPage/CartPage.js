import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Table } from 'react-bootstrap'

const CartPage = () => {

  const [cart, setCart] = useState({})

    const getCart = async() =>{
      const { info } = await axios.get('http://localhost:4000/cart/getCart');
      cart = (info.data)
      console.log(info)
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
            <tr>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default CartPage