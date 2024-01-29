import TaskList from "./TaskList";
import React, { useContext, useEffect, useState } from "react";
import { taskPropType } from "../types";
// import './styles/customCard.css'
import axios from "axios";
// import "./";
import { Theme } from "../../components/themeContext/ThemeContext";
// import "../../components/taskbar.css";

const TaskListHandler = () => {
  // const [tasks,setTask] = useState<taskPropType["task"][]>(task as taskPropType["task"][]);//useState(task)

  // const [filtered,setFilter] = useState<taskPropType["task"][]>(task as taskPropType["task"][]);

  const [tasks, setTask] = useState<taskPropType["task"][]>([
    {
      id: 0,
      title: "",
      status: "complete",
    },
  ]);

  const [filtered, setFilter] = useState<taskPropType["task"][]>(tasks);

  const [status, setStatus] = useState(false);
  const [offset, setOffset] = useState(10);

  const [filterit, setfilteredAgain] = useState<string>("All"); //new

  const { style, Changecolor } = useContext(Theme);

  const changeStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    let taskid: number = parseInt(e.target.value); //whole tasknn specfc id olla task filter cheynam.(id string aita varne,so parseint cheyne)

    let filteredTask = tasks.filter((a) => a.id === taskid); //filter returns an array

    filteredTask[0].status = e.target.checked ? "complete" : "incomplete";

    setTask((prev) => {
      let toReplaceData = prev?.filter(
        (data) => data.id === filteredTask[0].id
      ); //filter gives an aray

      let toReplaceIndex = prev?.indexOf(toReplaceData[0]);

      prev?.splice(toReplaceIndex, 1, filteredTask[0]);

      return [...prev];
    }); //returns each objct from the array
  };

  const filterFunction = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "All") {
      setFilter(tasks);
      setStatus(false);
    } else {
      let filtered = tasks.filter((a) => a.status == e.target.value);
      setFilter(filtered);
      setStatus(true);
    }
  };

  const prevPage = () => {
    setOffset((prev) => prev - 10);
  };

  const nextPage = () => {
    setOffset((prev) => prev + 10);
  };

  const apiCall = async () => {
    // let fetchedRes = await fetch("https://my.api.mockaroo.com/tasks/offset=10?key=e6fd5610")   //should wait till complete the async func
    // console.log(fetchedRes)

    let axiosRes = await axios
      .get(
        `https://7baedfcf-49f1-4541-8c17-97e25084a377.mock.pstmn.io/task/offset=${offset}`
      )
      .then((data) => {
        setTask(data.data as taskPropType["task"][]);
        setFilter(data.data as taskPropType["task"][]);
        return data.data;
      })

      .catch((err) => err);

    console.log(axiosRes);
  };

  useEffect(() => {
    if (filterit !== "All")
      setFilter((prev) => {
        return prev.filter((data) => data.status === filterit);
      });
  }, [tasks]);

  useEffect(() => {
    apiCall();
  }, [offset]);

  return (
    <div>
      <TaskList
        filterFunction={filterFunction}
        setfilteredAgain={setfilteredAgain}
        status={status}
        tasks={tasks}
        changeStatus={changeStatus}
        prevPage={prevPage}
        offset={offset}
        nextPage={nextPage}
        filtered={filtered}
        style={style}
      />
    </div>
  );
};

export default TaskListHandler;
