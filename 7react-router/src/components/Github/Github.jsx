import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();

  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/muhammadamanumer")
  //       .then((res) => res.json())
  //       .then((res) => {
  //         setData(res);
  //       });
  //   }, []);
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      <img src={data.avatar_url} alt="" width={200} />
      Github followers: {data.followers}
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/muhammadamanumer");
  return response.json();
};
