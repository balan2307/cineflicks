import { useState } from "react";

export const useThrowAsyncError = () => {
    const [state, setState] = useState();
    console.log("inn")
  
    return (error) => {
      setState(() => {throw error})
    }
  }