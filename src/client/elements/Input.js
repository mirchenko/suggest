import React from 'react';

export const Input = ({ placeholder, name, error, title, value, onChange }) =>
  <div className="form-group input">
    <label htmlFor={name}>{title}</label>
    <input type="text" name={name} value={value} onChange={onChange} placeholder={placeholder}/>
    { error && <span className="error">{error.message}</span> }
  </div>;