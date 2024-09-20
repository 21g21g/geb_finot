import React from 'react';
import './AlertMessage.css';

const AlertMessage = ({ message, type, visible }) => {
  const alertClasses = () => {
    switch (type) {
      case 'error':
        return 'alert-error';
      case 'success':
        return 'alert-success';
      default:
        return 'alert-default';
    }
  };

  return (
    visible && (
      <div className={`alert-message ${alertClasses()}`}>
        <p>{message}</p>
      </div>
    )
  );
};

export default AlertMessage;