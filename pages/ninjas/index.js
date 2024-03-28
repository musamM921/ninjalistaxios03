import styles from '../../styles/Ninjas.module.css';
import Link from 'next/link';
import axios from 'axios';

export const getStaticProps = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    const ninjas = response.data

    return {
        props: {ninjas}
    }
}

const Ninjas = ({ ninjas }) => {
  console.log(ninjas);

  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas.map(ninja => (
        <div key={ninja.id}>
          <Link href={`/ninjas/${ninja.id}`} passHref>
            <div className={styles.single}>
              <h3>{ninja.name}</h3>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Ninjas;
