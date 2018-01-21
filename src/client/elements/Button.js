import React from 'react';
import { Loader } from './';

export const Button = ({ handler, type, className, isLoading, title }) =>
  <button className={`${type} ${className ? className : ''}`} onClick={handler}>
    {
      isLoading
        ? <Loader height={18} width={18}/>
        : <span>{title}</span>
    }
  </button>;