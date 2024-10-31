import { createContext, useState } from "react";

// Creamos un contexto llamado CartContext
const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Función para agregar productos al carrito (sin duplicados)
    const addProductInCart = (newProduct) => {
        // Si el producto no está en el carrito, lo agregamos
        if (!cart.some(productCart => productCart.id === newProduct.id)) {
            setCart([...cart, newProduct]);
        }
    };

    // Función para eliminar un producto del carrito, por su "id"
    const deleteProductInCart = (idProduct) => {
        const productsFilter = cart.filter(productCart => productCart.id !== idProduct);
        setCart(productsFilter);
    };

    // Función para calcular la cantidad total de productos en el carrito
    const totalQuantity = () => {
        return cart.length; // Devuelve el número de productos únicos en el carrito
    };

    // Función para calcular el precio total de toda la compra
    const totalPrice = () => {
        const price = cart.reduce((total, productCart) => total + productCart.price, 0);
        return price;
    };

    // Función para vaciar el carrito
    const deleteCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addProductInCart, totalQuantity, totalPrice, deleteProductInCart, deleteCart }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };
