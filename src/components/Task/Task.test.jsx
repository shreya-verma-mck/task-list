import { fireEvent, render, screen } from "@testing-library/react";
import Task from "./Task";
import { LISTS_ROUTE, TASKS_ROUTE } from "../../constants/routes";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { MOCK_LISTS } from "../../mocks/lists";

describe("Task", () => {
  const mockSetListData = jest.fn();
  // Either render router or mock react-router-dom functions: useParams + useNavigate
  const component = (
    <MemoryRouter initialEntries={[`${LISTS_ROUTE}/1${TASKS_ROUTE}/1`]}>
      <Routes>
        <Route
          path={`${LISTS_ROUTE}/:listId${TASKS_ROUTE}/:taskId`}
          element={<Task listData={MOCK_LISTS} setListData={mockSetListData} />}
        ></Route>
        <Route
          path={`${LISTS_ROUTE}/:listId`}
          element={<div>Mock List Page</div>}
        ></Route>
      </Routes>
    </MemoryRouter>
  );

  beforeEach(() => {
    mockSetListData.mockClear();
  });

  it("should update task title input value and not list data when task title input text is changed", () => {
    render(component);
    const mockTaskTitleText = "Test Task Title";
    expect(screen.getByTestId("testId-taskTitleTextInput")).toHaveAttribute(
      "value",
      "walk"
    );
    fireEvent.change(screen.getByTestId("testId-taskTitleTextInput"), {
      target: { value: mockTaskTitleText },
    });
    expect(screen.getByTestId("testId-taskTitleTextInput")).toHaveAttribute(
      "value",
      mockTaskTitleText
    );
    expect(mockSetListData).not.toHaveBeenCalled();
  });

  it("should update list data with changed task when save button is clicked", () => {
    render(component);
    const mockTaskTitleText = "Test List Save";
    fireEvent.change(screen.getByTestId("testId-taskTitleTextInput"), {
      target: { value: mockTaskTitleText },
    });
    expect(mockSetListData).not.toHaveBeenCalled();
    fireEvent.click(screen.getByText("Save"));
    expect(mockSetListData).toHaveBeenCalledTimes(1);
    expect(mockSetListData).toHaveBeenCalledWith([
      {
        id: 1,
        name: "Self Learning",
        tasks: [
          { id: 1, title: mockTaskTitleText },
          { id: 2, title: "prep your meals" },
          { id: 3, title: "meditate" },
        ],
      },
      {
        id: 2,
        name: "Self Learning 2",
        tasks: [
          { id: 1, title: "walk 2" },
          { id: 2, title: "prep your meals 2" },
          { id: 3, title: "meditate 2" },
        ],
      },
    ]);
  });
});
