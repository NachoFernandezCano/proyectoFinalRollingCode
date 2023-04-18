import axios, { Axios } from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import "./productPageSell.css"


const ProductPageSell = () => {
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



    return (
        <div className="bodyCartPage">
            <div>
                <h2>Carrito de compra</h2>
            </div>
            <div className="cartButtonArea">
                <button>Finalizar compra</button>
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
                        </div>
                    ))
                ) : (
                    <tr>
                        <td colSpan="4">No hay productos en el carrito</td>
                    </tr>
                )}
            </div>
        </div>
    )
}

export default ProductPageSell