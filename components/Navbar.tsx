'use client';
import styles from '@components_style/navbar.module.css';
import { useState } from 'react';
import { HiBars3BottomRight } from 'react-icons/hi2';
import CartIcon from './CartIcon';
import Modal from './Modal';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={styles.container}>
      <CartIcon />
      <HiBars3BottomRight size='50px' color='white' onClick={() => setMenuOpen(true)} className={styles.humbugger} />
      {menuOpen && <Modal setMenuOpen={setMenuOpen} />}
    </div>
  );
}
