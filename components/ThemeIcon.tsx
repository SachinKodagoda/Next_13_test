import styles from '@components_style/themeIcon.module.css';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2';

export default function CartIcon(): JSX.Element {
  return (
    <div className={styles.container}>
      <HiOutlineSun size='50px' color='white' />
      <HiOutlineMoon size='50px' color='white' />
    </div>
  );
}
