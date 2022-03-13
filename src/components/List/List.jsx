import React, { useState } from "react";
import './List.css'

const List = (props) => {
    const [newList, setNewList] = useState('');

    const listChangeHandler = (event) => {
        setNewList(event.target.value);
    }

    const addListHandler = () => {
        const addedList = {
            id: Math.floor(Math.random() * 100),
            name: newList,
            tasks: []
        }
        props.onListChangeHandler(addedList);
        setNewList('');
    }

    return (
        <>
            <input value={newList} onChange={listChangeHandler}></input>
            <button onClick={addListHandler}>Add new list</button>
            <div>Lists</div>
            <ul>
                {props.listData.map((item) => {
                    return <li key={item.id}>
                        {item.name}
                        <button
                            onClick={()=>props.onViewTasks(item)}>
                            View Tasks
                        </button>
                    </li>
                })}
            </ul>
        </>
    )
}

export default List;