import { useCallback, useState } from 'react';

import { DriverResponseInterface } from '../types/Driver.interface';
import { RoundInterface } from '../types/Round.interface';
import { SeasonInterface } from '../types/Season.interface';

interface ConfigInterface {
  endpoint: string;
  method?: 'GET' | 'POST';
  headers?: HeadersInit;
  body?: BodyInit;
}

export type Response =
  | RoundInterface
  | DriverResponseInterface
  | SeasonInterface;

export type TransformData = (response: Response) => void;

const useRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendRequest = useCallback(
    async (config: ConfigInterface, transformData: TransformData) => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(config.endpoint, {
          method: config.method ?? 'GET',
          headers: config.headers ?? {},
          body: config.body ? JSON.stringify(config.body) : null,
        });

        if (!response.ok) throw new Error('Request failed!');

        const json = await response.json();
        transformData(json);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Something went wrong!');
        }
      }

      setIsLoading(false);
    },
    [],
  );

  return { isLoading, error, sendRequest };
};

export default useRequest;
