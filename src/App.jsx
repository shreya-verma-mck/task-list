import { useState } from "react";
import ListDetailsPage from "./pages/ListDetailsPage/ListDetailsPage";
import EditTaskPage from "./pages/EditTaskPage/EditTaskPage";
import AllListsPage from "./pages/AllListsPage/AllListsPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LISTS } from "./constants/lists";
import {
  ALL_LISTS_ROUTE,
  EDIT_TASK_ROUTE,
  LIST_DETAILS_ROUTE,
} from "./constants/routes";

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
          ></Route>

          {/* Create List Page */}
          {/* <Route
            path={CREATE_LIST_ROUTE}
            element={<CreateListPage />}
          ></Route> */}

          {/* List Details */}
          <Route
            path={LIST_DETAILS_ROUTE}
            element={<ListDetailsPage listData={listData} />}
          ></Route>

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
          ></Route>

          <Route
            path="*"
            element={<div>404!Error. Page not found</div>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
