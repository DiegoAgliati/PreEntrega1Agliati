import React, { useContext } from 'react';
import { CartContext } from "../../context/CartContext";
import "./Cart.css";
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
        Swal.fire(
          'Carrito vacío',
          'Todos los productos han sido eliminados',
          'success'
        );
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
        Swal.fire(
          'Producto eliminado',
          'El producto ha sido eliminado del carrito',
          'success'
        );
      }
    });
  };

  return (
    <div className="cart-container">
      <div className="cart-wrapper">
        <h1>Productos en el carrito</h1>
        {cart.map((productCart) => (
          <div className="cart-item" key={productCart.id}>
            <img src={productCart.image} width={100} alt={productCart.name} />
            <p>{productCart.name}</p>
            <p>Precio: ${productCart.price}</p>
            <button onClick={() => confirmDeleteProduct(productCart.id)}>
              <FiTrash size={20} />
            </button>
          </div>
        ))}
        <div>
          <p className="total-price">Precio total: ${totalPrice()}</p>
          <button className="button-clear" onClick={confirmDeleteCart}>Vaciar carrito</button>
          <Link to="/checkout" className="finalizar-compra">Finalizar mi compra</Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
