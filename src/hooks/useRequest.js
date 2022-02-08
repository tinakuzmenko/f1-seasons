import { useCallback, useState } from 'react';

const useRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (config, transformData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(config.url, {
        method: config.method ?? 'GET',
        headers: config.headers ?? {},
        body: config.body ? JSON.stringify(config.body) : null,
      });

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const json = await response.json();
      transformData(json);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }

    setIsLoading(false);
  }, []);

  return { isLoading, error, sendRequest };
};

export default useRequest;
