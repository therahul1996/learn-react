import React, { useState, useEffect } from 'react';

function PromiseExample() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData()
      .then(responseData => {
        setData(responseData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const fetchData = () => {
    return new Promise((resolve, reject) => {
      fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  };

  return (
    <div>
      {data ? (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default PromiseExample;
