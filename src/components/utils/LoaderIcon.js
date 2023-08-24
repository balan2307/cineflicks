import React from 'react'

import { TailSpin } from "react-loader-spinner";

function LoaderIcon() {
  return (
    <div className="flex justify-center items-center relative top-[70px]">
             <TailSpin
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
        </div>
  )
}

export default LoaderIcon
