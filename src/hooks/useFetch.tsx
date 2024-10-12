import { useEffect, useState } from "react";

const useFetch = <T,>(url: string) => {
  const [result, setResult] = useState<T | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const abortController = new AbortController();
    const fetchResult = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, { signal: abortController.signal });

        if (!response.ok) {
          const errorBody = await response.json();
          throw new Error(
            errorBody.message ||
              `Error: ${response.status} ${response.statusText}`
          );
        }

        const result = await response.json();
        setResult(result);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Something went wrong");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchResult();

    return () => {
      abortController.abort();
    };
  }, [url]);

  return { result, isLoading, error };
};

export default useFetch;
