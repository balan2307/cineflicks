import React from 'react'
import MovieItem from '../MovieItem';

function Sroller({header,toprated}) {
  return (
    <>
    <h1 className="xsm:text-2xl text-3xl mt-10 ml-[3%] mb-6 font-gotham font-medium text-black">
      Top rated
    </h1>
    <div
      className={` bg-scroller bg-cover bg-no-repeat bg-bottom px-[3%] toprated grid grid-flow-col gap-2 grid-auto-columns: minmax(0, 1fr) overflow-x-auto`}
    >
      {toprated.map((movie) => {
        return (
          <MovieItem
            className=" "
            itemtype={"scroller"}
            movie={movie}
            key={movie.id}
          ></MovieItem>
        );
      })}
    </div>
  </>
  )
}

export default Sroller
