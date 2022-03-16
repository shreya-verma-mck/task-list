import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ListDetailsPage, EditTaskPage, AllListsPage } from './pages';
import LISTS from './constants/lists';
import {
  ALL_LISTS_ROUTE,
  EDIT_TASK_ROUTE,
  LIST_DETAILS_ROUTE,
} from './constants/routes';

function App() {
  const [listData, setListData] = useState(LISTS);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Lists Page */}
          <Route
            path={ALL_LISTS_ROUTE}
            element={
              <AllListsPage listData={listData} setListData={setListData} />
            }
          />

          {/* Create List Page */}
          {/* <Route
            path={CREATE_LIST_ROUTE}
            element={<CreateListPage />}
          ></Route> */}

          {/* List Details */}
          <Route
            path={LIST_DETAILS_ROUTE}
            element={<ListDetailsPage listData={listData} />}
          />

          {/* Create Task */}
          {/* <Route
            path={CREATE_TASK_ROUTE}
            element={<CreateTaskPage listData={listData} setListData={setListData} />}
          ></Route> */}

          {/* Edit Task */}
          <Route
            path={EDIT_TASK_ROUTE}
            element={
              <EditTaskPage listData={listData} setListData={setListData} />
            }
          />

          <Route
            path="*"
            element={<div>404!Error. Page not found</div>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
