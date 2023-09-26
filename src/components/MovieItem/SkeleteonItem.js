import React from "react";

function SkeleteonItem() {

  return (
    <div className=" xsm:justify-center sm1:justify-around flex gap-x-1 gap-y-4 flex-wrap mb-10">
      {Array.from({ length: 10 }).map((l, i) => {
        return (
          <div
            className="w-[46%] mbl:w-52 xl:w-56 h-[377px] p-[0.3rem]  flex justify-center rounded-md bg-[#838585] cursor-pointer"
            key={i}
          >
            <div className="w-[99%] ">
              <div className="xsm:h-[250px] w-full rounded-md h-[250px] bg-[#b6bfbf]" >
                
                 
              
            
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SkeleteonItem;
