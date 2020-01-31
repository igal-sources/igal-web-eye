import { useState, useEffect } from "react";
import axios from "axios";

export const useFetching = url => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(url);

        if (!response) {
          throw new Error("Something went wrong");
        }

        const json = await response.data;

        if (json) {
          setData(json);
        }
      } catch (error) {
        setError(error);
      }

      setLoading(false);
    };

    fetchData();

    const interval = setInterval(() => setReload(state => !state), 3000);

    return () => {
      clearInterval(interval)
    };
  }, [url, reload]);

  return { loading, data, error };
};
