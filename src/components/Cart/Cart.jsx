import React, { useContext } from 'react';
import { CartContext } from "../../context/CartContext";
import "./cart.css";
import { FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

const Cart = () => {
  const { cart, totalPrice, deleteProductInCart, deleteCart } = useContext(CartContext);

  const confirmDeleteCart = () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción vaciará todos los productos del carrito',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, vaciar carrito',
      cancelButtonText: 'Cancelar',
      background: '#333',
      color: '#fff'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCart();
        Swal.fire({
          title: 'Carrito vacío',
          text: 'Todos los productos han sido eliminados',
          icon: 'success',
          background: '#333',
          color: '#fff'
        });
      }
    });
  };

  const confirmDeleteProduct = (productId) => {
    Swal.fire({
      title: '¿Eliminar producto?',
      text: '¿Estás seguro de que deseas eliminar este producto del carrito?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
      background: '#333',
      color: '#fff'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProductInCart(productId);
        Swal.fire({
          title: 'Producto eliminado',
          text: 'El producto ha sido eliminado del carrito',
          icon: 'success',
          background: '#333',
          color: '#fff'
        });
      }
    });
  };

  const handleCheckout = (e) => {
    if (!Array.isArray(cart) || cart.length === 0) {
      e.preventDefault();
      Swal.fire({
        title: 'Carrito vacío',
        text: 'No hay productos en el carrito',
        icon: 'warning',
        background: '#333',
        color: '#fff'
      });
    }
  };

  return (
    <div className="cart-container">
      <div className="cart-wrapper">
        <h1>Productos en el carrito</h1>
        {Array.isArray(cart) && cart.map((productCart) => (
          <div className="cart-item" key={productCart.id}>
            <img src={productCart.image} alt={productCart.name} />
            <p>{productCart.name}</p>
            <p>Precio: ${productCart.price}</p>
            <button onClick={() => confirmDeleteProduct(productCart.id)}>
              <FiTrash /> Eliminar
            </button>
          </div>
        ))}
        <div className="total-price">
          Precio total: ${typeof totalPrice === 'function' ? totalPrice() : totalPrice}
        </div>
        <div className="cart-summary">
          <button onClick={confirmDeleteCart} className="button-clear">Vaciar carrito</button>
          <Link to="/checkout" className="finalizar-compra" onClick={handleCheckout}>FINALIZAR MI COMPRA</Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
