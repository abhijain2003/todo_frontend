import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { GetAllAdvice, DeleteAdviceById, AddAdvice, EditAdviceData } from "../Services/Tasks";

function Main() {
  //useState for storing all behaviour data
  const [adviceData, setadviceData] = useState([]);
  const [newAdviceValue, setnewAdviceValue] = useState("");
  const [updateAdviceValue, setupdateAdviceValue] = useState("");

  useEffect(() => {
    //getting behaviour from database from api 
    async function getAdvice() {
      await GetAllAdvice()
        .then((res) => { setadviceData(res.data.data) }
        )
        .catch((err) => console.log(err));
    }

    getAdvice()
  }, [])

  async function handleDeleteAdvice(index) {
    let id = adviceData[index]._id;
    console.log(id);
    await DeleteAdviceById({ id })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.reload();
  }

  async function handleAddAdvice() {
    let data = {
      advice: newAdviceValue
    }
    await AddAdvice({ data })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    window.location.reload();
  }

  async function handleUpdateAdvice(index){
    await EditAdviceData({id: adviceData[index]._id, data: {
      advice: updateAdviceValue
    }}).then((res) => console.log(res))
    .catch((err) => console.log(err));

    window.location.reload();
  }

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
      <div className="grid grid-cols-4 h-full">
        {adviceData.map((val, i) => (
          <div className="w-[250px] mt-16 h-[150px] mx-auto text-xl font-bold text-[#ff5d5d] rounded-[5px] justify-evenly items-center flex flex-col" style={{ boxShadow: "rgba(255, 93, 93, 1) 0px 0px 0px 3px" }} >
            <div onClick={() => handleDeleteAdvice(i)} className="justify-end flex w-[100%]">🗑️</div>
            <NavLink key={i} exact to={`/tasks/${val.advice}`} ><p className="capitalize" >{val.advice}</p></NavLink>
            <div className="flex justify-center" ><input onChange={(e) => setupdateAdviceValue(e.target.value)} className="border-2 border-black w-[60%]" /><button onClick={() => handleUpdateAdvice(i)} className="bg-[#FF5D5D] text-[14px] py-auto ml-2 text-white h-[30px] my-auto rounded-[4px] px-[2px]" >ok</button></div>
          </div>
        ))}
        <div className="w-[250px] mt-16 h-[150px] text-xl font-bold text-[#ff5d5d] mx-auto rounded-[5px] justify-evenly items-center flex flex-col" style={{ boxShadow: "rgba(255, 93, 93, 1) 0px 0px 0px 3px" }} >
          <div className="flex justify-center" ><input onChange={(e) => setnewAdviceValue(e.target.value)} className="border-2 border-black w-[60%]" /></div>
          <p onClick={handleAddAdvice} >Add+</p>
        </div>
      </div>
    </div>
  );
}

export default Main;
