import { MOCK_LISTS } from "../../mocks/lists";
import { getItemBasedOnId, replacePathParamsInRoute } from ".";

describe("getItemBasedOnId", () => {
  it("should return undefined when item not found in list based on id", () => {
    expect(getItemBasedOnId(MOCK_LISTS, "100")).toBeUndefined();
  });
  it("should return item when item is found in list based on id", () => {
    expect(getItemBasedOnId(MOCK_LISTS, "1")).toEqual(MOCK_LISTS[0]);
  });
});

describe("replacePathParamsInRoute", () => {
  it("should replace path params in route string when valid mapping is passed", () => {
    expect(
      replacePathParamsInRoute("/lists/:listId/tasks/:taskId/edit", {
        listId: 3,
        taskId: 1,
      })
    ).toEqual("/lists/3/tasks/1/edit");
  });
});
