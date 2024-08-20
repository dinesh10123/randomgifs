import axios from "axios";
import React, { useEffect, useState } from "react";
import { Audio } from "react-loader-spinner";
import useGif from "./useGif";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
  const [tag, setTag] = useState("");
  const { gif, fetchData, loading } = useGif(tag);

  function clickhandler() {
    fetchData();
  }
  return (
    <div className="w-96 rounded-lg border border-black  bg-lime-400 flex flex-col items-center gap-5 mt-[15px]">
      <h1 className="text-xl underline uppercase font-bold"> Gif on {tag}</h1>
      {loading ? (
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      ) : (
        <img src={gif} className="px-2" />
      )}

      <input
        className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center"
        onChange={(event) => setTag(event.target.value)}
        value={tag}
      />
      <button
        className="w-10/12 opacity-90 text-large py-2 rounded-lg  bg-white mb-2"
        onClick={(tag)=>fetchData(tag)}
      >
        Random gif
      </button>
    </div>
  );
};

export default Tag;
