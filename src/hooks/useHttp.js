import React from 'react'


//paused as hooks cannot be used in loader functions and we are fetching data
// using loader function

function useHttp() {

   const sendRequest=async(url)=>
   {

      const res = await fetch(url,options);
      const response=await res.json();
      return response;

   }
   return {response}

}

export default useHttp
