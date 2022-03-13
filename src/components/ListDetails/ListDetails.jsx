import React from 'react'
import './ListDetails.css'


const ListDetails = (props) => {
    return (
        <>
            <div>List Details</div>
            <ul>
                {props.listData.tasks.map((item) => {
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