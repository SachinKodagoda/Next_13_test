'use client';

import { useContext } from 'react';
import { HiOutlineShoppingCart } from 'react-icons/hi2';
import { CartCtx } from '../context/cartContext';
import styles from './cartIcon.module.css';

export default function CartIcon(): JSX.Element {
  const { cartItems, addToCart } = useContext(CartCtx);
  return (
    <div className={styles.container}>
      <span className={styles.number} onClick={() => addToCart(1)}>
        {cartItems}
      </span>
      <HiOutlineShoppingCart size='30px' color='white' />
    </div>
  );
}
