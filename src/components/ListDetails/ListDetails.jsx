import React from 'react'
import './ListDetails.css'


const ListDetails = (props) => {
    const list = props.selectedList;
    return (
        <>
            <div>{list.name}</div>
            <ul>
                {props.list.tasks.map((item) => {
                    return <li key={item.id}>
                        {item.title}
                        <button
                            onClick={()=>props.onEditTask(item)}>
                            Edit
                        </button>
                    </li>
                })}
            </ul>
        </>
    )
}

export default ListDetails;