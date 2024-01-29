import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList from './pages/TaskList/TaskList';
import TaskListHandler from './pages/TaskList/TaskListHandler';
import  Nav  from './components/Nav';
import ThemeContext from './components/themeContext/ThemeContext';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Login from './pages/Login/Login';


function App() {
  return (
    <div className="App">

<BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}></Route>

          <Route path="/tasks" element={
          <ThemeContext>

          <Nav/>
          <TaskListHandler/>
    
          </ThemeContext>

          }></Route>
        </Routes>
      </BrowserRouter> 

      
    </div>
  );
}

export default App;
