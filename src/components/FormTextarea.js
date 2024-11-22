import React from 'react';

function FormTextarea({ label, id, placeholder }) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}:</label>
      <textarea id={id} placeholder={placeholder}></textarea>
    </div>
  );
}

export default FormTextarea;