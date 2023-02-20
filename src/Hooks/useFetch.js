import axios from "axios";
import { useEffect, useState } from "react";

function useFetch(url, method, fetchData) {
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errors, setErrors] = useState([]);
  const [isFetched, setIsFetched] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    let unmounted = false;

    (async () => {
      try {
        setLoading(true);
        setIsFetched(true);
        let res = await axios({
          method,
          url,
          data: fetchData,
        });

        if (unmounted) return;

        setLoading(false);
        setData(res.data);
      } catch (error) {
        setLoading(false);
        setIsError(true);
        setErrors((or) => [...or, error]);
      }
    })();

    return () => {
      unmounted = true;
    };
  }, [url, method, fetchData]);

  return { data, loading, isError, errors, isFetched };
}

export default useFetch;
