import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Loader } from '../../components';
import {
  LIST_DETAILS_ROUTE,
  LIST_ID_PATH_PARAM,
  NOT_FOUND_ROUTE,
  TASK_ID_PATH_PARAM,
} from '../../constants/routes';
import { getItemBasedOnId, replacePathParamsInRoute } from '../../utils/common';
import { getListDataWithUpdatedTask } from '../../utils/lists';

function EditTaskPage({ listData, setListData }) {
  const [currentTask, setCurrentTask] = useState(null);

  const navigate = useNavigate();

  const params = useParams();
  const listId = params[LIST_ID_PATH_PARAM];
  const taskId = params[TASK_ID_PATH_PARAM];

  useEffect(() => {
    const updatedCurrentTask = getItemBasedOnId(
      getItemBasedOnId(listData, listId)?.tasks,
      taskId,
    );

    if (updatedCurrentTask) {
      setCurrentTask(updatedCurrentTask);
    } else {
      navigate(NOT_FOUND_ROUTE);
    }
  }, [listData, listId, taskId, navigate]);

  const onTaskTitleChange = (event) => {
    setCurrentTask({
      ...currentTask,
      title: event.target.value,
    });
  };

  const onTaskSave = () => {
    setListData(
      getListDataWithUpdatedTask(listData, listId, taskId, currentTask),
    );
    navigate(
      replacePathParamsInRoute(LIST_DETAILS_ROUTE, {
        [LIST_ID_PATH_PARAM]: listId,
      }),
    );
  };

  return currentTask ? (
    <>
      <input
        value={currentTask.title}
        onChange={onTaskTitleChange}
        data-testid="testId-taskTitleTextInput"
      />
      <button type="button" onClick={onTaskSave}>Save</button>
      <button
        type="button"
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
}

export default EditTaskPage;

EditTaskPage.propTypes = {
  listData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    tasks: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })),
  })).isRequired,
  setListData: PropTypes.func.isRequired,
};
