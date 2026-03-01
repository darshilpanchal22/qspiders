import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  const handleAdd = () => {
    if (todo.trim() === "") return; // prevent empty todos
    setTodos([...todos, { text: todo, id: Date.now() }]);
    setTodo(""); // clear input 
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const handleEdit = (id) => {
    const newTodo = prompt("Edit your todo:");
    if (newTodo && newTodo.trim() !== "") {
      setTodos(todos.map((t) => (t.id === id ? { ...t, text: newTodo } : t)));
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-purple-500 text-white min-h-[80vh]">
        <div className="addToD0 mx-5">
          <h2 className="text-lg font-bold mb-2">Add a Todo</h2>
          <input
            onChange={handleChange}
            value={todo}
            type="text"
            placeholder="Enter your task..."
            className="w-1/2 p-2 rounded-md text-black"
          />
          <button
            onClick={handleAdd}
            className="bg-violet-800 hover:bg-black p-2 py-1 text-sm text-white rounded-md mx-3"
          >
            Add
          </button>

          <h2 className="text-lg font-bold mt-5 mb-3">Your Todos</h2>
          <div className="todos space-y-2">
            {todos.length === 0 ? (
              <p className="text-gray-200">No todos yet.</p>
            ) : (
              todos.map((t) => (
                <div
                  key={t.id}
                  className="todo flex justify-between items-center bg-violet-700 p-2 rounded-md"
                >
                  <div className="text">{t.text}</div>
                  <div className="buttons">
                    <button
                      onClick={() => handleEdit(t.id)}
                      className="bg-blue-600 hover:bg-blue-800 p-2 py-1 text-sm text-white rounded-md mx-1"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(t.id)}
                      className="bg-red-600 hover:bg-red-800 p-2 py-1 text-sm text-white rounded-md mx-1"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
