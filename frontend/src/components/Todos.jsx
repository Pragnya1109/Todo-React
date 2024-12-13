// using props or taking all todos as an array of objects
export function Todos({ todos, setTodos }) {
  const handleMarkCompleted = (id) => {
    fetch("http://localhost:3000/completed", {
      method: "PUT",
      body: JSON.stringify({ id }),
      headers: {
        "Content-type": "applications/json",
      },
    })
      .then(() => {
        setTodos((prevTodos) =>
          prevTodos.map((todo) =>
            todo.id === id ? { ...todo, completed: true } : todo
          )
        );
      })
      .catch((e) => alert("Error occurred: " + e.message));
  };

  return (
    <div>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <div key={todo.id}>
            <h1>{todo.title}</h1>
            <p>{todo.description}</p>
            <button onClick={() => handleMarkCompleted(todo.id)}>
              {todo.completed ? "Completed" : "Mark as Completed"}
            </button>
          </div>
        ))
      ) : (
        <p>No todos yest</p>
      )}
    </div>
  );
}
