

import React, { useEffect} from 'react'
import { useReducer } from 'react'
import { createContext } from 'react'
import watchlistReducer from './watchlistReducer'


const watchlistcontext=createContext({

    list:localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) : [],
    addItem:(id)=>{},
    removeItem:(id)=>{}

})

const initialState={
    watchlist:localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) : [],
}

export const WatchListContextProvider=(props)=>{




    const [state,dispatch]=useReducer(watchlistReducer,initialState);

    useEffect(()=>{

        localStorage.setItem("watchlist",JSON.stringify(state.watchlist))

    },[state])

    function addItem(movie)
    {
      
        
        dispatch({type:"ADD_MOVIE_ITEM",payload:movie})

    }

    function removeItem(movie)
    {
     
        dispatch({type:"REMOVE_MOVIE_ITEM",payload:movie})
    
    }
    return (
        <watchlistcontext.Provider value={{list:state.watchlist,addItem,removeItem}}>
            {props.children}
        </watchlistcontext.Provider>
    )

  }

 



  export default watchlistcontext;