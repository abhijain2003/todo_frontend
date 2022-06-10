import http from "./Axios";
//api for task
const baseUrl = "https://task-intern-web.herokuapp.com";
//api for behaviour
const baseUrlAdvice = "http://localhost:8000";

//for getting all task data
export  const GetAllTasks = () => http.get(`${baseUrl}/tasks`);

//for deleting data by id
export  const DeletetasksById = ({id}) => http.delete(`${baseUrl}/tasks/${id}`);

//for adding new task data
export  const AddTasks = ({data}) => http.post(`${baseUrl}/tasks`, data);

//Edit task data
export const EditTaskData = ({ id, data }) =>  http.put(`${baseUrl}/tasks/${id}`, data);

//-------------------------------------------------------------------------------------------------------
//getting all behaviour data
export const GetAllAdvice = () => http.get(`${baseUrlAdvice}/data`);

//for deleting data by id
export  const DeleteAdviceById = ({id}) => http.delete(`${baseUrlAdvice}/data/${id}`);

//for adding new data data
export  const AddAdvice = ({data}) => http.post(`${baseUrlAdvice}/data`, data);

//Edit task data
export const EditAdviceData = ({ id, data }) =>  http.put(`${baseUrlAdvice}/data/${id}`, data);