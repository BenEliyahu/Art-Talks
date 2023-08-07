import { useState, useEffect } from 'react';
import API from '../utils/api';

export const useFetchArts = (search = '') => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    API.get(`/arts/${search}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [search]);

  return { data, loading, error };
};
