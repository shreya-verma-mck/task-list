import React, { useEffect, useState } from "react";
import "./ListDetails.css";
import { useNavigate, useParams } from "react-router-dom";
import {
  LISTS_ROUTE,
  NOT_FOUND_ROUTE,
  TASKS_ROUTE,
} from "../../constants/routes";

const ListDetails = ({ listData }) => {
  const navigate = useNavigate();
  const { listId } = useParams();

  const [currentList, setCurrentList] = useState(null);

  useEffect(() => {
    const updatedCurrentList = listData.find(
      (list) => list.id === parseInt(listId)
    );
    if (updatedCurrentList) {
      setCurrentList(updatedCurrentList);
    } else {
      navigate(NOT_FOUND_ROUTE);
    }
  }, [currentList, listId, listData, navigate]);

  return currentList ? (
    <>
      <div>
        <h1>{currentList.name}</h1>
        <button
          onClick={() => {
            navigate(TASKS_ROUTE);
          }}
        >
          Add new Task
        </button>
      </div>
      <ul>
        {currentList.tasks.map((task) => {
          return (
            <li key={task.id}>
              {task.title}
              <button
                onClick={() => {
                  navigate(
                    `${LISTS_ROUTE}/${currentList.id}${TASKS_ROUTE}/${task.id}`
                  );
                }}
              >
                Edit
              </button>
            </li>
          );
        })}
      </ul>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
    </>
  ) : (
    <></>
  );
};

export default ListDetails;
