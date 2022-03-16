import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LIST_DETAILS_ROUTE, LIST_ID_PATH_PARAM } from "../../constants/routes";
import { replacePathParamsInRoute } from "../../utils/common";
import { getListDataWithNewList } from "../../utils/lists";
import "./AllListsPage.css";

const AllListsPage = ({ setListData, listData }) => {
  const [newListName, setNewListName] = useState("");

  const navigate = useNavigate();

  const onNewListNameChange = (event) => {
    setNewListName(event.target.value);
  };

  const onListAdd = () => {
    setListData((prevState) => getListDataWithNewList(prevState, newListName));
    setNewListName("");
  };

  return (
    <>
      <input value={newListName} onChange={onNewListNameChange}></input>
      <button onClick={onListAdd}>Create list</button>
      {/* TODO: Redirect to new page for list creation */}
      <div>Lists</div>
      <ul>
        {listData.map((list) => {
          return (
            <li key={list.id}>
              {list.name}
              <button
                onClick={() => {
                  navigate(
                    replacePathParamsInRoute(LIST_DETAILS_ROUTE, {
                      [LIST_ID_PATH_PARAM]: list.id,
                    })
                  );
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

export default AllListsPage;
