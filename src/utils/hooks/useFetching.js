import { useState, useEffect } from "react";
import axios from "axios";

export const useFetching = (url, interval = 10000) => {
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

    const reloadInterval = setInterval(() => setReload(state => !state), interval);

    return () => {
      clearInterval(reloadInterval);
    };
  }, [url, reload]);

  return { loading, data, error };
};
