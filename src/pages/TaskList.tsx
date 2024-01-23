import React, { useState } from 'react'
import {task} from '../constants/task'
import Tasks from './Tasks';
import { taskPropType } from './types';
import { Card, Container } from 'react-bootstrap';
import './styles/customCard.css'

const TaskList = () => {

    const [tasks,setTask] = useState<taskPropType["task"][]>(task as taskPropType["task"][]);//useState(task)

    const [filtered,setFilter] = useState<taskPropType["task"][]>(task as taskPropType["task"][]);


    // const [tasks,setTask] = useState<taskPropType["task"][]>( [{
    //     id: 0,
    //     title: "",
    //     status: "complete"
    // }]);


    // const [filtered,setFilter] = useState<taskPropType["task"][]>( [{
    //     id: 0,
    //     title: "",
    //     status: "complete"
    // }]);

    
    const [status,setStatus] = useState(false);

    const changeStatus=(e:React.ChangeEvent<HTMLInputElement>)=>{

     
            let taskid:number = parseInt(e.target.value ) //whole tasknn specfc id olla task filter cheynam.(id string aita varne,so parseint cheyne)

            let filteredTask = tasks.filter((a)=>a.id === taskid)  //filter returns an array

            filteredTask[0].status = e.target.checked? "complete":"incomplete"
        
            setTask((prev)=>{

                let toReplaceData = prev.filter((data)=>data.id === filteredTask[0].id) //filter gives an aray

                let toReplaceIndex = prev.indexOf(toReplaceData[0])

                prev.splice(toReplaceIndex,1,filteredTask[0]);


                return[...prev]})

    }


    const filterFunction=(e:React.ChangeEvent<HTMLSelectElement>)=>{

        if(e.target.value === "All"){
            setFilter(tasks)
            setStatus(false)
        }
        else{
        let filtered = tasks.filter((a)=> a.status == e.target.value)
        setFilter(filtered)
        setStatus(true)
        }

    }

  return (
    <Container>
    <Card className='m-3 customCard'>
<Card.Header>Task for the Day

<select className="ms-5" onChange={filterFunction}>
    <option selected value={"All"}> aLL </option>
            <option value={"complete"}>Complete</option>
            <option value={"incomplete"}>Incomplete</option>
          </select>


</Card.Header>
<Card.Body>
      {!status? tasks.map((a)=> <Card className='mb-3'><Tasks task = {a} changeStatus={changeStatus}/></Card>) : 
      filtered.map((a)=> <Card className='mb-3'><Tasks task = {a} changeStatus={changeStatus}/></Card>)}  
      </Card.Body>
    </Card>
    </Container>
  )
}

export default TaskList
