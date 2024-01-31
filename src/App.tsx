import React, { lazy, Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskList from "./pages/TaskList/TaskList";
// import TaskListHandler from './pages/TaskList/TaskListHandler';
// import  Nav  from './components/Nav';

import Login from "./pages/Login/Login";
import { Counter } from "./pages/Counter/Counter";
import Colorbox from "./pages/ColorBox/Colorbox";

const Nav = lazy(() => import("./components/Nav"));
const TaskListHandler = lazy(() => import("./pages/TaskList/TaskListHandler"));
const ThemeContext = lazy(
  () => import("./components/themeContext/ThemeContext")
);

// import ThemeContext from './components/themeContext/ThemeContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>

          <Route
            path="/tasks"
            element={
              <Suspense fallback={<>Loading...</>}>
                <ThemeContext>
                  <Nav />
                  <TaskListHandler />
                </ThemeContext>
              </Suspense>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
      {/* <Counter/> */} {/* use reducer */}
      {/* <Colorbox/> */}
    </div>
  );
}

export default App;
