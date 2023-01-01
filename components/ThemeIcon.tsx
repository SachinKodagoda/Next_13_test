import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2';
import styles from './themeIcon.module.css';

export default function CartIcon(): JSX.Element {
  return (
    <div className={styles.container}>
      <HiOutlineSun size='50px' color='white' />
      <HiOutlineMoon size='50px' color='white' />
    </div>
  );
}
