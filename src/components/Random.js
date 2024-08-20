import React, { useEffect, useState } from "react";
import { Audio } from 'react-loader-spinner';

import axios from "axios";
import useGif from "./useGif";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Random = () => {
 const {gif,fetchData,loading} = useGif();
  return (
    <div className="w-96 rounded-lg border border-black  bg-lime-400 flex flex-col items-center gap-5 mt-[15px]">
      <h1 className="text-xl underline uppercase font-bold">Random Gif</h1>
      {loading ? 
      <Audio
      height="80"
      width="80"
      radius="9"
      color="green"
      ariaLabel="loading"
      wrapperStyle
      wrapperClass
    />
      : <img src={gif} className="px-2" />}
      <button
        className="w-10/12 opacity-90 text-large py-2 rounded-lg  bg-white mb-2"
        onClick={()=>fetchData()}
      >
        Random gif
      </button>
    </div>
  );
};

export default Random;
