import { useState, useEffect } from "react";
import axios from "axios";

export const useDelete = (url, item) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios({
      method: "delete",
      url: url,
      data: {
        name: item.name,
        timeCompl: item.timeCompl,
        spaceCompl: item.spaceCompl,
      },
    })
      .then((data) => {
        setResponse(data);
      })
      .catch((err) => {
        setError(err);
      });
  }, [url, item]);
  return { response, error };
};

export const useGet = (url) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios({
      method: "get",
      url: url,
      headers: { "Content-Type": "application/json" },
    })
      .then((data) => {
        setResponse(data);
      })
      .catch((err) => {
        setError(err);
      });
  }, [url]);
  return { response, error };
};
