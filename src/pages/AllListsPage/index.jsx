import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { LIST_DETAILS_ROUTE, LIST_ID_PATH_PARAM } from '../../constants/routes';
import { replacePathParamsInRoute } from '../../utils/common';
import { getListDataWithNewList } from '../../utils/lists';
import './AllListsPage.css';

function AllListsPage({ setListData, listData }) {
  const [newListName, setNewListName] = useState('');

  const navigate = useNavigate();

  const onNewListNameChange = (event) => {
    setNewListName(event.target.value);
  };

  const onListAdd = () => {
    setListData((prevState) => getListDataWithNewList(prevState, newListName));
    setNewListName('');
  };

  return (
    <>
      <input value={newListName} onChange={onNewListNameChange} />
      <button type="button" onClick={onListAdd}>Create list</button>
      {/* TODO: Redirect to new page for list creation */}
      <div>Lists</div>
      <ul>
        {listData.map((list) => (
          <li key={list.id}>
            {list.name}
            <button
              type="button"
              onClick={() => {
                navigate(
                  replacePathParamsInRoute(LIST_DETAILS_ROUTE, {
                    [LIST_ID_PATH_PARAM]: list.id,
                  }),
                );
              }}
            >
              View Tasks
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default AllListsPage;

AllListsPage.propTypes = {
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
