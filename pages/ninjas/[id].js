import axios from 'axios';

export const getStaticPaths = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  const data = response.data;

  const paths = data.map(ninja => {
    return {
      params: { id: ninja.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const response = await axios.get('https://jsonplaceholder.typicode.com/users/' + id);
  const ninja = response.data;

  return {
    props: { ninja }
  }
}

const Details = ({ ninja }) => {
  return (
    <div>
      <h1>{ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
      <p>{ninja.address.city}</p>
    </div>
  );
}

export default Details;


