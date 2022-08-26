import type { NextPage } from 'next';
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css';


const Home: NextPage = () => {
  return (
    <div>
      <h1 className={styles.container}>Hello Next</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        necessitatibus eos facere, voluptatibus est illo totam ad tempore
        suscipit perspiciatis eligendi veritatis dolores animi deleniti expedita
        ipsum non magni commodi.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        necessitatibus eos facere, voluptatibus est illo totam ad tempore
        suscipit perspiciatis eligendi veritatis dolores animi deleniti expedita
        ipsum non magni commodi.
      </p>
    </div>
  );
};

export default Home;
