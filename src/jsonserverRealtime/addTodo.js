// const [todos, setTodos] = useSync<Todo[]>("http://localhost:3000/todos");

// Add new todo
export const addTodo = async (title) => {
  await fetch("http://localhost:3001/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title }),
  });
};
