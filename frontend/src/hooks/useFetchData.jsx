import { useEffect, useState } from "react";
import { token } from "../config";

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
// const token=localStorage.getItem("token")
      try {
        const res = await fetch(url, {
          headers: { Authorization:`Bearer ${token}` },
        });

        const result = await res.json();

        if (!res.ok) {
          // chane the emoji it is busted
          throw new Error(result.message + "🤢");
        }

        setData(result.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    };
    fetchData();
  }, [url]);
  return {
    data,
    loading,
    error,
  };
};

export default useFetchData;
