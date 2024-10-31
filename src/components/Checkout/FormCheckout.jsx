import { useState } from 'react';

const FormCheckout = ({ dataForm, handleChangeInput, handleSubmitForm }) => {
  const [emailError, setEmailError] = useState(false);

  const handleBlurEmail = () => {
    if (dataForm.email !== dataForm.confirmEmail) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <label htmlFor="fullname">Nombre Completo</label>
      <input type="text" id="fullname" name="fullName" value={dataForm.fullName} onChange={handleChangeInput} />

      <label htmlFor="phone">Telefono</label>
      <input type="text" id="phone" name="phone" value={dataForm.phone} onChange={handleChangeInput} />

      <label htmlFor="email">Email</label>
      <input type="text" id="email" name="email" value={dataForm.email} onChange={handleChangeInput} onBlur={handleBlurEmail} />

      <label htmlFor="confirmEmail">Confirmar Email</label>
      <input type="text" id="confirmEmail" name="confirmEmail" value={dataForm.confirmEmail} onChange={handleChangeInput} onBlur={handleBlurEmail} />

      {emailError && <p style={{ color: 'red' }}>Los correos electrónicos no coinciden.</p>}

      <button type="submit">Enviar Pedido</button>
    </form>
  )
}

export default FormCheckout;
