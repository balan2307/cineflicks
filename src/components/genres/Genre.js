import React, { useEffect, useState } from "react";

function Genre({ genre ,addId,removeId }) {
  const [toggle, setToggle] = useState(false);
  const [status,setStatus]=useState(false);


  function handleClick() {

    setToggle((status)=>{
        return !status
    })
  }

  useEffect(()=>{

    if(!status)
    {
        setStatus(true);
        return;
    }
    if(!toggle) removeId(genre.id);
    else addId(genre.id);

  },[toggle])


  return (
    <span
      className={`cursor-pointer text-sm py-1 px-2 ${toggle ? 'bg-blue-400' : 'bg-blue-700'} rounded-md text-white  `}
      onClick={handleClick}
    >
      {genre.name}
    </span>
  );
}

export default Genre;
