import React from 'react';
import { Tabs } from './tabs.jsx';
import { ProductsContainer } from './products-container.jsx';


export const Cart = () => {
  return (
    <section>
      <Tabs />
      <ProductsContainer/>
    </section>
  );
};