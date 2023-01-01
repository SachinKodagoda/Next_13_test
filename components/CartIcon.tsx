'use client';

import { HiOutlineShoppingCart } from 'react-icons/hi2';
import styles from './cartIcon.module.css';

export default function CartIcon(): JSX.Element {
  return (
    <div className={styles.container}>
      <span className={styles.number}>3</span>
      <HiOutlineShoppingCart size='30px' color='white' />
    </div>
  );
}
