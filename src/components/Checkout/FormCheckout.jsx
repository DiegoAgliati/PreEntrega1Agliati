import { useState } from 'react';

const FormCheckout = ({ dataForm, handleChangeInput }) => {
  const [emailError, setEmailError] = useState(false);

  const handleBlurEmail = () => {
    if (dataForm.email !== dataForm.confirmEmail) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const handlePhoneChange = (event) => {
    // Permitir solo números en el campo de teléfono
    const value = event.target.value;
    if (/^\d*$/.test(value)) {
      handleChangeInput(event);
    }
  };

  return (
    <div className="form-checkout">
      <label htmlFor="fullName">Nombre Completo</label>
      <input type="text" id="fullName" name="fullName" value={dataForm.fullName} onChange={handleChangeInput} />

      <label htmlFor="phoneCode">Código de País</label>
      <select id="phoneCode" name="phoneCode" onChange={handleChangeInput} value={dataForm.phoneCode}>
        <option value="+1">+1 (USA)</option>
        <option value="+34">+34 (España)</option>
        <option value="+52">+52 (México)</option>
        <option value="+54">+54 (Argentina)</option>
        <option value="+57">+57 (Colombia)</option>
        <option value="+58">+58 (Venezuela)</option>
        <option value="+61">+61 (Australia)</option>
        <option value="+44">+44 (Reino Unido)</option>
        <option value="+81">+81 (Japón)</option>
      </select>

      <label htmlFor="phone">Teléfono</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={dataForm.phone}
        onChange={handlePhoneChange}
      />

      <label htmlFor="email">Email</label>
      <input type="text" id="email" name="email" value={dataForm.email} onChange={handleChangeInput} onBlur={handleBlurEmail} />

      <label htmlFor="confirmEmail">Confirmar Email</label>
      <input type="text" id="confirmEmail" name="confirmEmail" value={dataForm.confirmEmail} onChange={handleChangeInput} onBlur={handleBlurEmail} />

      {emailError && <p style={{ color: 'red' }}>Los correos electrónicos no coinciden.</p>}
    </div>
  );
};

export default FormCheckout;
