

export default(state,action)=>{

    switch(action.type)
    {
        case "ADD_MOVIE_ITEM" :
            return {
                ...state,
                watchlist:[action.payload ,...state.watchlist]
            }
            case "REMOVE_MOVIE_ITEM" :
                let list=state.watchlist;
                list=list.filter((item)=>item.id!=action.payload.id)
                return {
                    ...state,
                    watchlist:list
                }
    

        default:
            return state;
    }

}