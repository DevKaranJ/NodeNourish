import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DetailPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/data/${id}`)
      .then(response => {
        setItem(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      })
  }, [id]);
  return (
    <div>
      <h1>{item.title}</h1>
      {item ? (
        <div>
          <p>Intensity: {item.intensity}</p>
          <p>Sector: {item.sector}</p>
          <p>Topic: {item.topic}</p>
          <p>Insight: {item.insight}</p>
          <p>URL: {item.url}</p>
          <p>Region: {item.region}</p>
          <p>Added: {item.added}</p>
          <p>Published: {item.published}</p>
          <p>Country: {item.country}</p>
          <p>Relevance: {item.relevance}</p>
          <p>Pestle: {item.pestle}</p>
          <p>Source: {item.source}</p>
          <p>Likelihood: {item.likelihood}</p>
        </div>
      ) : (
        <p>Item not found</p>
      )}
    </div>
  );
};

export default DetailPage;