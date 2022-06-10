import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Todo from './component/Todo';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./component/Main";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes><Route path="/" element={<Main />} /></Routes>
        <Routes><Route path={`/tasks/:name`} element={<Todo />} /></Routes>
    </BrowserRouter>
);

