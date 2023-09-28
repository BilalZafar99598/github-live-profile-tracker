import React, { useContext } from 'react';
import AlertContext from '../../context/github/alert/AlertContext';
import { FaMinusCircle } from 'react-icons/fa';

const Alert = () => {
  const alertContext = useContext(AlertContext);

  const { alert } = alertContext;

  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
      <FaMinusCircle/>
      <i>
        {alert.msg}
      </i>
        {/* <i className='fas fa-info-circle' /> {alert.msg} */}
      </div>
    )
  );
};

export default Alert;