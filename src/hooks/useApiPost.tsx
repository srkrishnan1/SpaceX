import { useEffect, useState } from "react";

const useApiPost = <T,>(url: string, payload:any, needPagination:boolean = false) => {
  const [result, setResult] = useState<T| null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        const result = await response.json();
        console.log(result);

        if (response.ok) {
          setResult(result)
          
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
  }, [url, payload]);

  return { result, isLoading, error };
};

export default useApiPost;
