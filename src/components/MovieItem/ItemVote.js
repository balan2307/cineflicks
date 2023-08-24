import React from "react";

function ItemVote({ vote ,pagetype="detail" ,size="md"}) {


  const border= size=="md" ? ' border-[2.5px] w-10 h-10' : ' border-[5.4px] w-14 h-14'


  let vote_color =
    vote >= 8.5
      ? "border-red-600"
      : vote >= 7
      ? "border-green-700"
      : "border-yellow-300";
  return (
    <div className={`${pagetype!="detail" ? 'relative top-6 left-3' : '' }  `}>
      <span
        className={`text-white ${border}
    flex justify-center items-center 
     ${vote_color} rounded-[100%] bg-[black] ${size=="md" ? 'p-1' : 'p-1'}  font-bold text-lg ${pagetype!="detail" ? 'absolute bottom-0' : '' } `}
      >
        {Number.isInteger(vote)
          ? vote
          : vote.toFixed(1)}
      </span>
    </div>
  );
}

export default ItemVote;
