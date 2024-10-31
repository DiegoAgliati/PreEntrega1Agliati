import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addProductInCart = (newProduct) => {
        if (!cart.some(productCart => productCart.id === newProduct.id)) {
            setCart([...cart, newProduct]);
        }
    }

    const deleteProductInCart = (idProduct) => {
        const productsFilter = cart.filter(productCart => productCart.id !== idProduct);
        setCart(productsFilter);
    }

    const totalQuantity = () => {
        return cart.length;
    }
    const totalPrice = () => {
        const price = cart.reduce((total, productCart) => total + productCart.price, 0);
        return price;
    }

    const deleteCart = () => {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{ cart, addProductInCart, totalQuantity, totalPrice, deleteProductInCart, deleteCart }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider }
