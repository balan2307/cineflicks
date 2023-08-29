import React from 'react'

const size=['w-14','w-16','w-20']
function dynamicSizegenre()
{
    let random= Math.random() * (2 - 0) +0
    return size[Math.ceil(random)]
}

function GenreFilterSkeleton() {
    console.log("genre sk")
  return (
    <div className=" h-[64px] xsm:mx-[3%] mx-[3%] flex flex-wrap gap-2 
    rounded-md ">

      <div className='p-2 w-[100%] flex flex-wrap gap-2'>
     
      {
      Array.from({ length: 20 }).map((l, i) => {
        return <span className={`bg-gray-500  h-5 ${dynamicSizegenre()} rounded-md `} key={i} ></span>

      })
    }
      </div>
   
  </div>
  )
}

export default GenreFilterSkeleton
