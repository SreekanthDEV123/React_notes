import React, { useState, useEffect } from "react";
import axios from "axios";
const Useurl = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const getPersonalData = async () => {
    try {
      setLoading(false);
      const response = await axios(url);
    //  const res =  await response.data;
      setData(response.data);
    } catch (err) {
      setError("error occured");
    }
  };

  useEffect(() => {
    getPersonalData();
  }, [url]);
  return { data, error, loading };
};

export default Useurl;
