import React from 'react'
import cross from "../../assets/cross.svg"
import { Form } from 'react-router-dom'
import search2 from "../../assets/search.svg";

function MobileSearchBar(props) {
  return (
    <div className={`xsm:visible sm1:hidden absolute w-[100%] gap-4 flex z-40 h-[70px] p-2 bg-[#0a1929] 
    ease-in-out duration-500 ${
    props.showSearchbar ? "translate-y-0 " : "-translate-y-[40rem]"
  }   `}>

    <Form className=" w-[90%] h-[100%] ">
        <span className="flex w-[100%] ">
          <input
            className="h-9 rounded-l-[0.3rem] cursor-auto text-white w-[100%] border-none focus:outline-none bg-[#0a1929]"
            type="text"
            placeholder="Search"
          ></input>
          <div className="flex items-center">
          <img
            src={search2}
            className="h-6 w-8 mt-3 rounded-r-[0.3rem] "
          ></img>
          </div>
           
      
        </span>
      </Form>
      <span className="flex items-start mt-4">
        <img src={cross} className="w-4 h-4" onClick={()=>props.onSearchToggle()}></img>
      </span>
  </div>
    
  )
}

export default MobileSearchBar
