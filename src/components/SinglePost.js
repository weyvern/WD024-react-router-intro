import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SinglePost = () => {
  const { name } = useParams();

  useEffect(() => {
    console.log(`Fetch data for post: ${name}`);
  }, [name]);

  return <div>{name}</div>;
};

export default SinglePost;
