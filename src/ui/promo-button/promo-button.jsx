import React from 'react';
import styles from './promo-button.module.css';
import closeIcon from '../../images/close.svg';
import {DiscountContext} from "../../services/appContext.jsx";
import {PromoContext} from "../../services/productsContext.jsx";

export const PromoButton = ({ children, extraClass}) => {
    const {setPromo} = React.useContext(PromoContext);
    const {setDiscount} = React.useContext(DiscountContext);
  const cancelPromo = () => {
   setPromo(''); // TODO: обнулить название акции (promo)
    setDiscount(0); // TODO: сбросить скидку (discount)
  };

  return (
    <button type="button" className={`${styles.button} ${extraClass}`} onClick={cancelPromo}>
      {children}
      <img className={styles.close} src={closeIcon} alt="кнопка закрытия" />
    </button>
  );
};