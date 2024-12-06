import React from 'react';
import styles from './total-price.module.css';
import {DiscountContext, TotalPriceContext} from "../../services/appContext.jsx";

export const TotalPrice = ({extraClass}) => {
const {discount} = React.useContext(DiscountContext);
const {totalPrice} = React.useContext(TotalPriceContext);
    return (
        <div className={`${styles.container} ${extraClass}`}>
            <p className={styles.text}>Итого:</p>
            <p className={styles.cost}>
                {`${(totalPrice - totalPrice * (discount / 100)).toFixed(0)} руб.`}
            </p>
        </div>
    );
};