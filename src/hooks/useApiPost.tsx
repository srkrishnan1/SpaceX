//Custom hook to get data in case of graphql, or post data.
import { useEffect, useState } from "react";

const useApiPost = <T,>(
  url: string,
  payload: any = {},
  needPagination: boolean = false
) => {
  const [result, setResult] = useState<T | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const abortController = new AbortController();
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
          signal: abortController.signal,
        });

        const result = await response.json();
      

        if (response.ok) {
          setResult(result);
        } else {
          throw new Error(result.errors[0]?.message || "An error occurred");
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [url, payload, needPagination]);

  return { result, isLoading, error };
};

export default useApiPost;
