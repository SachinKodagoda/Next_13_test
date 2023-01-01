'use client';
import { HiBars3BottomRight, HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2';
import CartIcon from './CartIcon';
import styles from './navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.container}>
      <HiOutlineSun size='50px' color='white' />
      <HiOutlineMoon size='50px' color='white' />
      <HiBars3BottomRight size='50px' color='white' />
      <CartIcon />
    </div>
  );
}
