import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetAllTasks, AddTasks, DeletetasksById, EditTaskData } from "../Services/Tasks";

function Todo() {
  //storing all todo list data
  const [taskData, settaskData] = useState([]);
  //storing value for adding new todo task
  const [todo, settodo] = useState("");
  //boolean for input tag show or not for updating
  const [edit, setedit] = useState(false);
  //storing new updated value
  const [newTaskValue, setnewTaskValue] = useState("");
  const route = useParams();

  //getting all task data from api
  async function getData() {
    await GetAllTasks()
      .then((res) =>
        settaskData(res.data.data.filter((val) => val.advice === route.name))
      )
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getData();
  }, []);

  let data = {
    task: todo,
    advice: route.name,
  };

  //adding task data to database
  async function handleAddData() {
    await AddTasks({ data })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    window.location.reload();
  }

  //deleting task data from database
  async function handleDeleteData(index) {
    let id = taskData[index]._id;
    await DeletetasksById({ id })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    window.location.reload();
  }

  //updating new value in database
  async function handleUpdateData(index) {
    await EditTaskData({ id: taskData[index]._id, data: {
      task: newTaskValue,
      advice: route.name
    } }).then((res) => console.log(res))
      .catch((err) => console.log(err));

      window.location.reload();
}

return (
  <div>
  {/* navbar */}
    <div className="bg-[#FF5D5D] flex justify-evenly text-white font-bold text-[20px] h-[40px]">
      <p>ASSIGNMENT</p>
      <p className="bg-white text-[14px] py-auto text-[#FF5D5D] h-[30px] my-auto rounded-[4px] px-[2px]">
        Logout
      </p>
    </div>

{/* task screen */}
    <div className="h-[100vh]">
      <h1
        className="flex justify-center font-bold"
        style={{ fontSize: "30px", color: "#ff5d5d" }}
      >
        {route.name}
      </h1>

      <div
        className="w-[90%] flex justify-center"
        style={{ margin: "0 auto" }}
      >
        <input
          onChange={(e) => settodo(e.target.value)}
          style={{
            width: "60%",
            border: "1px solid black",
            borderRadius: "5px",
          }}
        />
        <button
          onClick={handleAddData}
          className="text-white"
          style={{
            marginLeft: "10px",
            backgroundColor: "#ff5d5d",
            padding: "4px",
            borderRadius: "5px",
            fontWeight: "bold",
          }}
        >
          Add
        </button>
      </div>
 
      {taskData.map((val, i) => (
        <div>
          <div key={i} className="flex items-center text-white font-bold"
            style={{ justifyContent: 'space-between', margin: "0 auto", backgroundColor: '#ff5d5d', width: '50%', marginTop: '20px', padding: '4px', textTransform: 'capitalize', borderRadius: '5px' }}>
            <h1 onClick={() => setedit(true)} style={{ cursor: 'text' }} >{val.task}</h1>
            {edit ? <p onClick={() => handleUpdateData(i)} style={{ cursor: 'pointer', backgroundColor: 'white', borderRadius: '50%', fontSize: '13px', padding: '2px' }} >✅</p> : <p onClick={() => handleDeleteData(i)} style={{ cursor: 'pointer', backgroundColor: 'white', borderRadius: '50%', fontSize: '13px', padding: '2px' }} >❌</p>}
          </div>
          {edit ? <input style={{
            width: "60%",
            color: 'black',
            border: "1px solid black",
            borderRadius: "5px",
            margin: '0 auto'
          }} onChange={(e) => setnewTaskValue(e.target.value)} /> : null}
        </div>
      ))}
    </div>
  </div>
);
}

export default Todo;
