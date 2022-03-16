import React, { useEffect, useState } from "react";
import "./ListDetailsPage.css";
import { useNavigate, useParams } from "react-router-dom";
import {
  CREATE_TASK_ROUTE,
  EDIT_TASK_ROUTE,
  LIST_ID_PATH_PARAM,
  NOT_FOUND_ROUTE,
  TASK_ID_PATH_PARAM,
} from "../../constants/routes";
import { getItemBasedOnId, replacePathParamsInRoute } from "../../utils/common";
import { Loader } from "../../components";

const ListDetailsPage = ({ listData }) => {
  const [currentList, setCurrentList] = useState(null);

  const navigate = useNavigate();
  const listId = useParams()[LIST_ID_PATH_PARAM];

  useEffect(() => {
    const updatedCurrentList = getItemBasedOnId(listData, listId);
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
            navigate(
              replacePathParamsInRoute(CREATE_TASK_ROUTE, {
                [LIST_ID_PATH_PARAM]: currentList.id,
              })
            );
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
                    replacePathParamsInRoute(EDIT_TASK_ROUTE, {
                      [LIST_ID_PATH_PARAM]: currentList.id,
                      [TASK_ID_PATH_PARAM]: task.id,
                    })
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
    <Loader />
  );
};

export default ListDetailsPage;
