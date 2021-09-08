import React, { useEffect, useState } from "react";

export const useFetch = (url, method, headers = {}, body = null) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await fetch(url, {
        method,
        headers,
        body,
      })
        .then((res) => setResponse(res.json()))
        .catch((err) => setError(err))
        .finally(() => setIsLoading(false));
    };
    fetchData();
  }, [url]);
  return { response, error, isLoading };
};
