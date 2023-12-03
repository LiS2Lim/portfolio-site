import { useState, useEffect } from 'react'

export default () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      console.log(import.meta.env.VITE_API_URL);
      const response = await fetch(`${import.meta.env.VITE_API_URL}`, {
        method: 'POST',
      });
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>test</h1>
      {data && data.map((item, index) => (
        <div key={index}>
          <p>{item.MenuName} : {item.MenuStuff}</p>
        </div>
      ))}
    </>
  )
};