// building blocks of routes
export const TASKS_PATH = "/tasks";
export const CREATE_PATH = "/create";
export const EDIT_PATH = "/edit";

// params
export const LIST_ID_PATH_PARAM = "listId";
export const TASK_ID_PATH_PARAM = "taskId";

// routes
export const ALL_LISTS_ROUTE = "/lists";
export const CREATE_LIST_ROUTE = `${ALL_LISTS_ROUTE}${CREATE_PATH}`;
export const LIST_DETAILS_ROUTE = `${ALL_LISTS_ROUTE}/:${LIST_ID_PATH_PARAM}`;
export const CREATE_TASK_ROUTE = `${LIST_DETAILS_ROUTE}${TASKS_PATH}${CREATE_PATH}`;
export const EDIT_TASK_ROUTE = `${LIST_DETAILS_ROUTE}${TASKS_PATH}/:${TASK_ID_PATH_PARAM}${EDIT_PATH}`;
export const NOT_FOUND_ROUTE = "/not-found";
