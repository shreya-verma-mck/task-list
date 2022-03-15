import { useState } from "react";
import ListDetails from "./components/ListDetails/ListDetails";
import Task from "./components/Task/Task";
import List from "./components/List/List";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LISTS } from "./constants/lists";
import { LISTS_ROUTE, TASKS_ROUTE } from "./constants/routes";

function App() {
  const [listData, setListData] = useState(LISTS);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Lists Page */}
          <Route
            path={LISTS_ROUTE}
            element={<List listData={listData} setListData={setListData} />}
          ></Route>

          {/* Create List Page */}
          {/* <Route
            path={`${LISTS_ROUTE}/create`}
            element={<ListCreate />}
          ></Route> */}

          {/* List Details */}
          <Route
            path={`${LISTS_ROUTE}/:listId`}
            element={<ListDetails listData={listData} />}
          ></Route>

          {/* Create Task */}
          <Route
            path={`${LISTS_ROUTE}/:listId${TASKS_ROUTE}/create`}
            element={<Task listData={listData} setListData={setListData} />}
          ></Route>

          {/* Edit Task */}
          <Route
            path={`${LISTS_ROUTE}/:listId${TASKS_ROUTE}/:taskId`}
            element={<Task listData={listData} setListData={setListData} />}
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
