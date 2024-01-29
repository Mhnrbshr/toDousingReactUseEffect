import React from "react";
import Tasks from "../Tasks";
import "../../components/taskbar.css";

import { Card, Container, Pagination } from "react-bootstrap";
import "../styles/customCard.css";

type TaskListPropType = {
  filterFunction: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  filtered: {
    id: number;
    title: string;
    status: "complete" | "incomplete";
  }[];
  setfilteredAgain: React.Dispatch<React.SetStateAction<string>>;
  status: boolean;
  tasks: {
    id: number;
    title: string;
    status: "complete" | "incomplete";
  }[];
  changeStatus: (e: React.ChangeEvent<HTMLInputElement>) => void;
  prevPage: () => void;
  offset: number;
  nextPage: () => void;
};

const TaskList = ({
  filterFunction,
  filtered,
  setfilteredAgain,
  status,
  tasks,
  changeStatus,
  prevPage,
  offset,
  nextPage,
  style
}: any) => {
  return (
    <Container className="taskcontainer">
      <Card className={`m-3 ${style}`}>
        <Card.Header>
          Task for the Day
          <select
            className="ms-5"
            onChange={(e) => {
              filterFunction(e);
              setfilteredAgain(e.target.value);
            }}
          >
            <option value={"All"}> aLL </option>
            <option value={"complete"}>Complete</option>
            <option value={"incomplete"}>Incomplete</option>
          </select>
          {/* <button onClick={}>Click to chng theme</button> */}
        </Card.Header>
        <Card.Body>
          {!status
            ? tasks.map((a: any) => (
                <Card className="mb-3">
                  <Tasks task={a} changeStatus={changeStatus} />
                </Card>
              ))
            : filtered.map((a: any) => (
                <Card className="mb-3">
                  <Tasks task={a} changeStatus={changeStatus} />
                </Card>
              ))}
        </Card.Body>

        <Pagination>
          <Pagination.Prev
            onClick={prevPage}
            disabled={offset === 10 ? true : false}
          ></Pagination.Prev>

          {/* <Pagination.Item>1</Pagination.Item>
    <Pagination.Item active >2</Pagination.Item>
  <Pagination.Item>3</Pagination.Item> */}

          <Pagination.Next
            onClick={nextPage}
            disabled={offset === 40 ? true : false}
          ></Pagination.Next>
        </Pagination>
      </Card>
    </Container>
  );
};

export default TaskList;
