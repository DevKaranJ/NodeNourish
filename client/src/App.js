import React, { useEffect, useState } from 'react';

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      {data.map(item => (
        <div key={item._id}>
          <h2>{item.title}</h2>
          <p>{item.insight}</p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;