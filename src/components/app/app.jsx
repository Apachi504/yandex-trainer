import React from 'react';
import styles from './app.module.css';
import { Title } from '../../ui/title/title.jsx';
import { Cart } from '../cart/index.jsx';
import { TotalPrice } from '../common/total-price.jsx';
import {DiscountContext, TotalPriceContext} from "../../services/appContext.jsx";

function App() {
    const [totalPrice, setTotalPrice] = React.useState(0);
    const [discount, setDiscount] = React.useState(null);
  return (
    <div className={styles.app}>
        <TotalPriceContext.Provider value={{totalPrice, setTotalPrice}}>
        <DiscountContext.Provider value={{discount, setDiscount}}>
            <Title text={'Корзина'} />
            <Cart/>
            <TotalPrice/>
        </DiscountContext.Provider>
        </TotalPriceContext.Provider>
    </div>
  );
}

export default App;