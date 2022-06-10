import http from "./Axios";
//api for task
const baseUrl = "https://task-intern-web.herokuapp.com";
//api for behaviour
const baseUrlAdvice = "https://advice-intern-webapp.herokuapp.com";

//for getting all task data
export  const GetAllTasks = () => http.get(`${baseUrl}/tasks`);

//for deleting data by id
export  const DeletetasksById = ({id}) => http.delete(`${baseUrl}/tasks/${id}`);

//for adding new task data
export  const AddTasks = ({data}) => http.post(`${baseUrl}/tasks`, data);

//getting all behaviour data
export const GetAllAdvice = () => http.get(`${baseUrlAdvice}/data`);

//Edit task data
export const EditTaskData = ({ id, data }) =>  http.put(`${baseUrl}/tasks/${id}`, data);