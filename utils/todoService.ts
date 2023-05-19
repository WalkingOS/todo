import { ITodo } from "@/types";

const STORAGE_KEY = "todos";

const StoreService = {
  getTodos(): ITodo[] {
    const storedTodos = localStorage.getItem(STORAGE_KEY);
    if (storedTodos) {
      return JSON.parse(storedTodos);
    }
    return [];
  },

  saveTodos(todos: ITodo[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  },
};

export default StoreService;
