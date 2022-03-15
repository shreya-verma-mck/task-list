import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LISTS_ROUTE } from "../../constants/routes";
import "./List.css";

const List = ({ setListData, listData }) => {
  const [newListName, setNewListName] = useState("");

  const navigate = useNavigate();

  const onNewListNameChange = (event) => {
    setNewListName(event.target.value);
  };

  const onListAdd = () => {
    const addedList = {
      id: Math.floor(Math.random() * 100),
      name: newListName,
      tasks: [],
    };
    setListData((prevState) => [...prevState, addedList]);
    setNewListName("");
  };

  return (
    <>
      <input value={newListName} onChange={onNewListNameChange}></input>
      <button onClick={onListAdd}>Add new list</button>
      <div>Lists</div>
      <ul>
        {listData.map((list) => {
          return (
            <li key={list.id}>
              {list.name}
              <button
                onClick={() => {
                  navigate(`${LISTS_ROUTE}/${list.id}`);
                }}
              >
                View Tasks
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default List;
