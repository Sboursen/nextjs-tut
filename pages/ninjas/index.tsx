import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import styles from '../../styles/ninjas.module.css';
import Link from 'next/link';
import { JSONObject, User } from '../../types';





export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await response.json();

  return {
    props: { users },
  };
};

const Ninjas: NextPage = ({
  users,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <h1>All Ninjas</h1>
      <ul>
        {users.map((user: User) => (
          <li key={user.id}>
            <Link href={`/ninjas/${user.id}`}>
              <a className={styles.single}>
                <h3>{user.name}</h3>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ninjas;
