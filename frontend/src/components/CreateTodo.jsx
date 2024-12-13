import { useState } from "react";

export function CreateTodo({ todos, setTodos }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTodo = async () => {
    if (!title.trim() || !description.trim()) {
      alert("Please provide valid title and description");
      return;
    }
    try {
      const response = await fetch("http://localhost:3000/todo", {
        method: "POST",
        body: JSON.stringify({
          title: title,
          description: description,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });

      if (!response.ok) {
        const error = await response.json();
        alert("Failed to add todo: " + error.msg);
        return;
      }

      const data = await response.json();
      setTodos((prevTodos) => [...prevTodos, data.todo]);

      setTitle("");
      setDescription("");
    } catch (e) {
      alert("Error occurred: " + e.message);
    }
  };
  return (
    <div>
      <input
        style={{
          padding: 10,
          borderRadius: 10,
          margin: 10,
        }}
        value={title}
        onChange={function (e) {
          setTitle(e.target.value);
        }}
        type="text"
        placeholder="title"
      ></input>
      <br /> <br />
      <input
        style={{
          padding: 10,
          borderRadius: 10,
          margin: 10,
        }}
        value={description}
        onChange={function (e) {
          setDescription(e.target.value);
        }}
        type="text"
        placeholder="description"
      ></input>
      <br /> <br />
      <button
        style={{
          padding: 10,
          borderRadius: 10,
          margin: 10,
        }}
        onClick={handleAddTodo}
      >
        Add todo
      </button>
    </div>
  );
}
