import type { NextPage } from 'next';
import Header from "../components/Header";
import Footer from '../components/Footer';

const About: NextPage = () => {
  return (
    <div>
      <Header />
      <h1>About</h1>
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
      <Footer />
    </div>
  );
};

export default About;
