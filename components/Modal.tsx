import { Dispatch, SetStateAction } from 'react';
import { HiOutlineXMark } from 'react-icons/hi2';
import styles from './modal.module.css';

type TProps = {
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
};
export default function Modal({ setMenuOpen }: TProps) {
  const closeModal = () => {
    setMenuOpen(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <HiOutlineXMark size='30px' color='black' onClick={closeModal} className={styles.cross} />
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
