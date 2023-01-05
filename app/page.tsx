import Avatar from '@components/Avatar';
import styles from '@pages_style/app.module.css';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Avatar />
    </div>
  );
}
