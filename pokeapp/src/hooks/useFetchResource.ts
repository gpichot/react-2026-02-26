import React from "react";

export default function useFetchResource<T>(url: string | null) {
  const [data, setData] = React.useState<T | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    setIsLoading(true);
    if (!url) {
      setData(null);
      return;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, [url]);

  return { data, isLoading, error };
}
