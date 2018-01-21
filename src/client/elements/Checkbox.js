import React from 'react';

export const Checkbox = ({ placeholder, name, error, title, value, check }) =>
  <div className="form-group checkbox" onClick={() => check(name)}>
    <input type="checkbox" name={name} checked={value} placeholder={placeholder}/>
    <label htmlFor={name} style={{color: name}}>{title}</label>
  </div>;