import styles from '@components_style/Avatar.module.css';
import Image from 'next/image';

const Avatar = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Image src='https://i.pravatar.cc/150?img=3' alt='avatar' width={800} height={500} />
    </div>
  );
};

export default Avatar;
