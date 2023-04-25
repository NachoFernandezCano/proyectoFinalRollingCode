import React ,{  useState, useContext } from "react";
import axios from "axios";
const CartContext = React.createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {

    const [cartCount, setcartCount] = useState(0);

    const getCartCount = async () => {
        try {
            const token = localStorage.getItem('user');
            const data = await axios.get("http://localhost:4000/cart/getCart", {headers:{Authorization: token}}); 
            setcartCount(data.cart);
            let count = 0 
            console.log(data)
            for (const product of data?.data?.cart?.products) {
                count += product.quantity
            }
            return count
        } catch (error) {
            console.log(error);
        }
    }

    const addCartItem = () =>{
        getCartCount();
    }

    return (        
        <CartContext.Provider
        value={{ cartCount, getCartCount, addCartItem }}
        >
        {children}
        </CartContext.Provider>
    );
};

export default CartContext;