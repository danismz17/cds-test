import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import './ItemsOptionsCombo.css';

const ItemsOptionsCombo = ({ ico, item, DESPLEGABLEico, link }) => {
  return (
    <>
      {/* Utiliza Link para la navegación */}
      <Link to={link} className="DESPLEGABLE-item-container">
        <div className="IO-ico-box">
          {ico ? (
            <img src={ico} alt="" />
          ) : null}
        </div>
        <div className="DESPLEGABLE-item-box">{item}</div>
        <div className="IO-desplegable-box">{DESPLEGABLEico}</div>
      </Link>
    </>
  );
};

export default ItemsOptionsCombo;
