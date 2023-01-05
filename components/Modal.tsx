'use client';
import styles from '@components_style/modal.module.css';
import { Dispatch, SetStateAction } from 'react';
import { HiOutlineXMark } from 'react-icons/hi2';

type TProps = {
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
};
export default function Modal({ setMenuOpen }: TProps) {
  const closeModal = () => {
    setMenuOpen(false);
  };
  return (
    <div className={styles.container}>
      <HiOutlineXMark size='24px' color='black' onClick={closeModal} className={styles.cross} />
      <div className={styles.menu}>
        <div className={styles.menuItem} onClick={closeModal}>
          Item1
        </div>
        <div className={styles.menuItem} onClick={closeModal}>
          Item2
        </div>
        <div className={styles.menuItem} onClick={closeModal}>
          Item3
        </div>
      </div>
    </div>
  );
}
