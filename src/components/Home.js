import { useEffect, useState } from 'react';

const Home = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalID = setInterval(() => setCount(prev => prev + 1), 1000);

    return () => (clearInterval(intervalID), console.log('Clean up'));
  }, []);

  return (
    <div>
      <h1>Welcome</h1>
      <div>{count}</div>
    </div>
  );
};

export default Home;
