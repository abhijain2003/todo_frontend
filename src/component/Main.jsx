import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { GetAllAdvice } from "../Services/Tasks";

function Main() {
  //useState for storing all behaviour data
  const [adviceData, setadviceData] = useState([])

  useEffect(() => {
    //getting behaviour from database from api 
    async function getAdvice() {
      await GetAllAdvice()
        .then((res) =>
          {setadviceData(res.data.data)}
        )
        .catch((err) => console.log(err));
    }

    getAdvice()
  }, [])

  return (
    <div className="h-[100vh] overflow-y-hidden" >
    {/* navbar */}
      <div className="bg-[#FF5D5D] flex justify-evenly text-white font-bold text-[20px] h-[40px]">
        <p>ASSIGNMENT</p>
        <div className="flex">
          <p className="bg-white text-[14px] py-auto text-[#FF5D5D] h-[30px] my-auto rounded-[4px] px-[2px]">
            Login
          </p>
          <p className="bg-white text-[14px] py-auto ml-2 text-[#FF5D5D] h-[30px] my-auto rounded-[4px] px-[2px]">
            Register
          </p>
        </div>
      </div>

{/* all behaviour box */}
      {adviceData.map((val, i) => (
        <div className="grid grid-cols-4 h-full" >
          <NavLink exact to={`/tasks/${val.advice1}`} ><div className="w-[250px] mt-16 h-[150px] mx-auto rounded-[5px] justify-center items-center flex" style={{ boxShadow: "rgba(255, 93, 93, 1) 0px 0px 0px 3px" }} key={i} >{val.advice1}</div></NavLink>
          <NavLink exact to={`/tasks/${val.advice2}`} ><div className="w-[250px] mt-16 h-[150px] mx-auto rounded-[5px] justify-center items-center flex" style={{ boxShadow: "rgba(255, 93, 93, 1) 0px 0px 0px 3px" }} key={i} >{val.advice2}</div></NavLink>
          <NavLink exact to={`/tasks/${val.advice3}`} ><div className="w-[250px] mt-16 h-[150px] mx-auto rounded-[5px] justify-center items-center flex" style={{ boxShadow: "rgba(255, 93, 93, 1) 0px 0px 0px 3px" }} key={i} >{val.advice3}</div></NavLink>
          <NavLink exact to={`/tasks/${val.advice4}`} ><div className="w-[250px] mt-16 h-[150px] mx-auto rounded-[5px] justify-center items-center flex" style={{ boxShadow: "rgba(255, 93, 93, 1) 0px 0px 0px 3px" }} key={i} >{val.advice4}</div></NavLink>
          <NavLink exact to={`/tasks/${val.advice5}`} ><div className="w-[250px] mt-16 h-[150px] mx-auto rounded-[5px] justify-center items-center flex" style={{ boxShadow: "rgba(255, 93, 93, 1) 0px 0px 0px 3px" }} key={i} >{val.advice5}</div></NavLink>
        </div>
      ))}
    </div>
  );
}

export default Main;
