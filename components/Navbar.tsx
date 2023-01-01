'use client';
import { HiBars3BottomRight } from 'react-icons/hi2';
import CartIcon from './CartIcon';
import styles from './navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.container}>
      <CartIcon />
      <HiBars3BottomRight size='50px' color='white' />
    </div>
  );
}
