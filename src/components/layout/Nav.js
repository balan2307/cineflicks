import React, { useEffect, useMemo, useState } from "react";
import cine from "../../assets/cine.svg";
import { NavLink } from "react-router-dom";
import hamburger from "../../assets/hamburger.svg";
import SideBar from "./SideBar";
import { Form } from "react-router-dom";
import search from "../../assets/search.svg";

import search2 from "../../assets/search.svg";
import MobileSearchBar from "./MobileSearchBar";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "../../hooks/useDebounce";


function Nav() {
  const navigate = useNavigate();
  const [showSidebar, setSidebarStatus] = useState(false);
  const [showSearchbar, setSearchbarStatus] = useState(false);
  const [searchedTerm, setSearchTerm] = useState("");

  // const debouncedValue=useDebounce(searchedTerm,500)



  // useEffect(()=>{

  //   console.log("change ",debouncedValue)
  //   if(debouncedValue.trim()=="") return;
  //   navtoSearchPage(debouncedValue)
  // },[debouncedValue])


  useEffect(()=>{

    console.log("term ",searchedTerm)
    if(searchedTerm.trim()=="") return;
    const timeoutID = setTimeout(() => {
      console.log("time to search",searchedTerm)
      navtoSearchPage();

    }, 550);

  return () => {
    console.log("cleartimeout",searchedTerm)
    return clearTimeout(timeoutID )}
    ;

  },[searchedTerm])


  console.log("re render")
  function toggleSidebar() {
    setSidebarStatus((status) => !status);
  }

  function toggleSearchbar() {
    setSearchbarStatus((status) => !status);
  }

  function navtoSearchPage() {
    if (searchedTerm.trim() != "")  navigate(`/search?q=${encodeURIComponent(searchedTerm)}`);
  }

  function setSearch(e) {
    
   
    setSearchTerm(e.target.value);

    
  }

  function handleKeyPress(e)
  {
    
    if(e.key=="Enter") navtoSearchPage();

    
  }

  function handleKeyDown(e)
  {
    // if(e.key=="Backspace") console.log("back")

  }

  return (
    <>
      <MobileSearchBar
        onSearchToggle={toggleSearchbar}
        showSearchbar={showSearchbar}
        onSearchChange={setSearch}
        searchedTerm={searchedTerm}
        onSearch={navtoSearchPage}
        onEnter={handleKeyPress}
      ></MobileSearchBar>
      <nav className="bg-[#0a1929]   xsm:p-[0.8rem] p-3 sticky top-0 z-30 flex text-white font-gotham  ">
        <ul className="w-[100%] mx-[2%]   text-white flex  ">
          <li className="text-xl  md:text-3xl flex w-[90%] lg:w-[60%] mr-16">
            <span className="visible  lg:hidden ">
              <img
                className="xsm:h-7 h-8 w-16 inline mr-"
                onClick={toggleSidebar}
                src={hamburger}
              ></img>
            </span>
            <span>
              <img
                className="xsm:h-8 h-9 w-12  pb-2 text-white inline "
                src={cine}
              ></img>
            </span>
            <p className=" ml-1 cursor-pointer flex align-middle ">
              <NavLink to='/trending' >Cineflicks</NavLink>
            </p>
            <Form className="ml-8 w-[100%] xsm:hidden sm1:visible">
              <span className="flex w-[100%] ">
                <input
                  className="h-9 text-[1.1rem]  p-2 rounded-l-[0.3rem] w-[100%]  focus:outline-none
                  
                   text-black"
                  type="text"
                  onChange={(e) => setSearch(e)}
                  value={searchedTerm}
                  onKeyUp={(e)=>handleKeyPress(e)}
                  placeholder="Search movies ,tv shows"
                  onKeyDown={(e)=>handleKeyDown(e)}
                  
                  

                ></input>
                <img
                  src={search}
                  className="h-9 p-1 w-8 bg-white rounded-r-[0.3rem] "
                  onClick={navtoSearchPage}
                ></img>
              </span>
            </Form>
          </li>

          <li className="lg:w-96 flex items-center justify-between ">
            <ul
              className="w-[100%] hidden  lg:visible  lg:flex justify-between 
               items-center
      text-lg"
            >
              <NavLink
                to="/trending"
                className={({ isActive }) => (isActive ? "text-gray-400" : "")}
              >
                <li className="cursor-pointer">Trending</li>
              </NavLink>
              <NavLink
                to="/movies"
                className={({ isActive }) => (isActive ? "text-gray-400" : "")}
              >
                <li className="cursor-pointer">Movies</li>
              </NavLink>
              <NavLink
                to="/tvshows"
                className={({ isActive }) => (isActive ? "text-gray-400" : "")}
              >
                <li className="cursor-pointer">TV Shows</li>
              </NavLink>

              <NavLink
                to="/watchlist"
                className={({ isActive }) => (isActive ? "text-gray-400" : "")}
              >
                <li className="cursor-pointer">Watchlist</li>
              </NavLink>
            </ul>
          </li>

          <li className="flex items-center xsm:visible sm1:hidden">
            <span onClick={toggleSearchbar}>
              <img
                src={search2}
                className="h-7  w-7  rounded-r-[0.3rem] "
                onKeyUp={(e)=>handleKeyPress(e)}
              ></img>
            </span>
          </li>
        </ul>
      </nav>
      <SideBar
        toggleSidebar={toggleSidebar}
        showSidebar={showSidebar}
      ></SideBar>
    </>
  );
}

export default Nav;
