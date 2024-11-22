import React from 'react';

function FormInput({ label, id, type, placeholder }) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}:</label>
      <input type={type} id={id} placeholder={placeholder} />
    </div>
  );
}

export default FormInput;