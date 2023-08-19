import React from 'react'

import { useCallback } from 'react';
//paused as hooks cannot be used in loader functions and we are fetching data
// using loader function

function useHttp() {

   const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };

   const sendRequest=useCallback(async(url,applyData)=>
   {

      const res = await fetch(url,options);
      const response=await res.json();
      console.log("use-http",response)
      applyData(response.results);
      

   },[])

   return{
      sendRequest
   }


}

export default useHttp
