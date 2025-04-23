import React, { useEffect, useState } from 'react';

export const useFetch = () => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    error: null,
  });

  const {data, isLoading, error} = state


  const fetchData = async (url, method, bodyData = null) => {
    if (!url) return;
    try {
      const opcions = {
        method: method,
        Headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: method == 'GET' || method == 'DELETE' ? null : JSON.stringify(bodyData)
      }
      const res = await fetch(url, opcions);
      const data = await res.json();
      console.log(data)
      
      setState({
        data,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      setState({
        data,
        error: error,
        isLoading: false,
      });
    }
  };

  return {
    data,
    isLoading,
    error,
    fetchData
  };
};
