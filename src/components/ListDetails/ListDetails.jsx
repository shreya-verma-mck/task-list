import React from 'react'
import './ListDetails.css'


const ListDetails = (props) => {
    const list = props.selectedList;
   // console.log(list);
    return (
        <>
            <div>{list.name}</div>
            <ul>
                {list.tasks.map((item) => {
                    return <li key={item.id}>
                        {item.title}
                        <button
                            onClick={()=>props.onEditTask(item)}>
                            Edit
                        </button>
                    </li>
                })}
            </ul>
            <button onClick={()=>props.onClickBack()}>Back</button>
        </>
    )
}

export default ListDetails;