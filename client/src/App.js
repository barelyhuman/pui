import React from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const App = () => {
  const { data, error } = useSWR(
    `http://localhost:${window.APIPORT}/api/status`,
    fetcher
  );

  if (!data) {
    return <></>;
  }

  if(error){
  return <>Error: {String(error)}</>
  }

  console.log(data);

  return <h1 align="center">Status: {data.status}</h1>;
};

export default App;
