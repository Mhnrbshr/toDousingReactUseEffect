import React from 'react'
import '../pages/types'
import { TaskComponentPropType } from '../pages/types'
import { Card, Form } from 'react-bootstrap'

const Tasks = ({task,changeStatus}:TaskComponentPropType) => { 
  return (
    <div>
        <Card.Body className='px-5'>
            <Form.Check
      label= {task.title}
      checked={task.status=="complete"?true:false}
      onChange={changeStatus}
      value = {task.id}
      />
      {/* <span>{task.id}{"       "}
      {task.title}{"       "}
      {task.status}</span> */}
      </Card.Body>
    </div>
  )
}

export default Tasks
