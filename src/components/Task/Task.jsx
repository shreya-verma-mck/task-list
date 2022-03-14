import React, { useState } from 'react'
import './Task.css'

const Task = (props) => {
    console.log(props.selectedTask.title);
    const [task, setTask] = useState(props.selectedTask.title);

    const onUpdatingTask = (event) => {
        //console.log(event.target.value);
        setTask(event.target.value);
    }

    const onSaveHandler = () => {
        props.onSave({
            title: task,
            id: props.selectedTask.id
        })
    }

    return (
        <>
            <input
                value={task}
                onChange={onUpdatingTask}
            ></input>
            <button
                onClick={onSaveHandler}
            >Save
            </button>
            <button onClick={() => props.onClickBack()}>Back</button>
        </>
    )
}

export default Task;