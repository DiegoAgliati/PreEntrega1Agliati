import { useState } from 'react';
import './checkout.css';
import FormCheckout from './FormCheckout';
import { useContext } from 'react';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import { CartContext } from '../../context/CartContext';
import db from '../../db/db.js';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const [dataForm, setDataForm] = useState({
    fullName: "",
    phoneCode: "+54",
    phone: "",
    email: "",
    confirmEmail: "",
  });

  const { cart, totalPrice, deleteCart } = useContext(CartContext);
  const navigate = useNavigate();
  const handleChangeInput = (event) => {
    setDataForm({
      ...dataForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();

    if (!dataForm.fullName || !dataForm.phone || !dataForm.email || !dataForm.confirmEmail) {
      Swal.fire({
        icon: 'error',
        title: 'Formulario incompleto',
        text: 'Por favor, completa todos los campos del formulario.',
        background: '#333',
        color: '#fff',
      });
      return;
    }

    if (dataForm.email !== dataForm.confirmEmail) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Los correos electrónicos no coinciden',
        background: '#333',
        color: '#fff',
      });
      return;
    }

    const order = {
      buyer: { ...dataForm },
      products: [...cart],
      date: Timestamp.fromDate(new Date()),
      total: totalPrice(),
    };

    console.log('Orden enviada:', order);

    uploadOrder(order);
  };

  const uploadOrder = (newOrder) => {
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, newOrder)
      .then((response) => {
        Swal.fire({
          icon: 'success',
          title: 'Compra exitosa',
          html: `<p>Gracias por tu compra. El ID de tu orden es: <strong>${response.id}</strong></p>`,
          confirmButtonText: 'Copiar ID',
          showCancelButton: true,
          cancelButtonText: 'Cerrar',
          background: '#333',
          color: '#fff',
        }).then((result) => {
          if (result.isConfirmed) {
            navigator.clipboard.writeText(response.id);
            Swal.fire({
              icon: 'success',
              title: 'Copiado!',
              background: '#333',
              color: '#fff',
            }).then(() => {
              navigate("/");
            });
          } else {
            navigate("/");
          }
        });
        deleteCart();
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ocurrió un error al procesar tu compra. Inténtalo de nuevo.',
          background: '#333',
          color: '#fff',
        });
      });
  };

  return (
    <div className="checkout-container">
      <h2 className="checkout-heading">Completa el formulario para finalizar la orden</h2>
      <form onSubmit={handleSubmitForm}>
        <FormCheckout dataForm={dataForm} handleChangeInput={handleChangeInput} />
        <button type="submit" className="checkout-submit-button">Enviar Pedido</button>
      </form>
    </div>
  );
};

export default Checkout;
