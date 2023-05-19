import { ITodo } from "@/types";
import TodoService from "./todoService";

describe("TodoService", () => {
  afterEach(() => {
    localStorage.clear();
  });

  test("getTodos should return an empty array if there are no stored todos", () => {
    const todos = TodoService.getTodos();

    expect(todos).toEqual([]);
  });

  test("saveTodos should store todos in localStorage", () => {
    const todos: ITodo[] = [
      { description: "test", date: "2022-12-12", isDone: false },
      { description: "todos", date: "2022-12-12", isDone: false },
    ];

    TodoService.saveTodos(todos);

    const storedTodos = JSON.parse(localStorage.getItem("todos")!);
    expect(storedTodos).toEqual(todos);
  });
});
