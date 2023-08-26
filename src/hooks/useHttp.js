import React from 'react'

import { useCallback } from 'react';
// using loader function
import { useState } from 'react';
import asyncErrorHandler, { useThrowAsyncError } from '../components/services/asyncErrorHandler'

function useHttp() {

   const [loading,setLoading]=useState(false)
   const throwAsyncError=useThrowAsyncError();
   


   const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };

   const sendRequest=useCallback(async(url,applyData)=>
   {
      setLoading(true);

      try{
      const res = await fetch(url,options);
      const response=await res.json();
      // console.log("response ",res)
      applyData(response);
      setLoading(false);
      }
      catch(e)
      {
         console.log("errror ",e)
         throwAsyncError(e);
      }
      

   },[])

   return{
      sendRequest,loading
   }


}

export default useHttp
