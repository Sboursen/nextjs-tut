import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <h1 className={styles.title}>Hello Next</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        necessitatibus eos facere, voluptatibus est illo totam ad tempore
        suscipit perspiciatis eligendi veritatis dolores animi deleniti expedita
        ipsum non magni commodi.
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        necessitatibus eos facere, voluptatibus est illo totam ad tempore
        suscipit perspiciatis eligendi veritatis dolores animi deleniti expedita
        ipsum non magni commodi.
      </p>
      <Link href="/ninjas">
        <a className={styles.btn}>See ninja listings</a>
      </Link>
    </div>
  );
};

export default Home;
