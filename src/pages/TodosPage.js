import axios from "axios";
import Todo from "../components/Todo";
import { useEffect, useState, useRef } from "react";
import TodoHeader from "../components/TodoHeader";
import { toast } from 'react-toastify';

function TodosPage() {
  const [userData, setUserData] = useState();

  const [todos, setTodos] = useState([]);

  const [filter, setFilter] = useState("All");

  const inputRef = useRef();

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    if (!userData) return;
    getTodos();
  }, [userData]);

  function handleClick() {
    window.location.href = "/";
    localStorage.removeItem("token");
  }

  function getUserData() {
    axios
      .get("https://localhost:7137/api/Authenticate/Me")
      .then((response) => {
        setUserData(response.data);
      })
      .catch((err) => console.log(err));
  }

  function getTodos() {
    axios
      .get(`https://localhost:7137/api/Todo/GetTasksForUser?id=${userData?.id}`)
      .then((result) => {
        setTodos(result.data);
        console.log(result.data);
      })
      .catch((err) => console.log(err));
  }

  function createTodo() {
    if(inputRef.current.value === "") {
      toast.error("This field can't be empty!", {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        return;
    }
    axios
      .post("https://localhost:7137/api/Todo", {
        text: inputRef.current.value,
        id_User: userData.id,
      })
      .then((result) => {
        getTodos();
        toast.success('Todo was successfully created!', {
          position: "bottom-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      })
      .catch((err) => console.log(err));

    inputRef.current.value = "";
  }

  function deleteTodo(id) {
    axios
      .delete(`https://localhost:7137/api/Todo/DeleteTask?id=${id}`)
      .then((result) => {
        getTodos();
      })
      .catch((err) => console.log(err));
  }

  const toggleCompeted = (ind) => {
    setTodos((prev) => {
      const newState = [...prev];
      newState[ind] = { ...prev[ind] };
      newState[ind].isCompleted = !newState[ind].isCompleted;
      return newState;
    });
  };

  return (
    <>
      <TodoHeader />
      <div className="bg-todoBackground w-full h-screen bg-cover bg-center flex items-center justify-center">
        <div className="flex flex-col w-128 space-y-5">
          {/* <h1 className="text-black font-bold text-3xl text-center">Tasks to do</h1> */}
          <div className="">
            <div className="flex">
              <input
                type="text"
                placeholder="Create a new todo..."
                className="p-3 w-full border-none rounded-tl-md rounded-bl-md focus:outline-0"
                ref={inputRef}
              ></input>
              <button
                className="rounded-tr-md rounded-br-md bg-button-orange p-3 text-white font-bold hover:bg-button-orange-hover transition ease-in-out"
                onClick={createTodo}
              >
                Create
              </button>
            </div>
            <div className="bg-white rounded-md mt-2 p-1 mb-2">
              {todos.length > 0 &&
                filter === "All" &&
                todos.map((todo, index) => (
                  <Todo
                    key={todo.id}
                    todo={todo}
                    checkbox={true}
                    userId={userData.id}
                    onDelete={deleteTodo.bind(null, todo.id)}
                    onComplete={toggleCompeted.bind(null, index)}
                  />
                ))}
              {todos.length > 0 &&
                filter === "Active" &&
                todos
                  .filter((item) => !item.isCompleted)
                  .map((todo, index) => (
                    <Todo
                      key={todo.id}
                      todo={todo}
                      userId={userData.id}
                      onDelete={deleteTodo.bind(null, todo.id)}
                      onComplete={toggleCompeted.bind(null, index)}
                    />
                  ))}
              {todos.length > 0 &&
                filter === "Completed" &&
                todos
                  .filter((item) => item.isCompleted)
                  .map((todo, index) => (
                    <Todo
                      key={todo.id}
                      todo={todo}
                      userId={userData.id}
                      onDelete={deleteTodo.bind(null, todo.id)}
                      onComplete={toggleCompeted.bind(null, index)}
                    />
                  ))}
              {todos.length === 0 && filter === "All" && (
                <>
                  <p className="p-2 flex justify-center font-medium">
                    There are no tasks yet... &#128549;
                  </p>
                  <p className="p-2 flex justify-center font-medium">
                    You can create todo by typing in the field above!
                  </p>
                </>
              )}
              {todos.filter((item) => !item.isCompleted).length === 0 &&
                filter === "Active" && (
                  <>
                    <p className="p-2 flex justify-center font-medium">
                      There are no tasks yet... &#128549;
                    </p>
                    <p className="p-2 flex justify-center font-medium">
                      You can create todo by typing in the field above!
                    </p>
                  </>
                )}
              {todos.filter((item) => item.isCompleted).length === 0 &&
                filter === "Completed" && (
                  <>
                    <p className="p-2 flex justify-center font-medium">
                      There are no completed tasks yet... &#128549;
                    </p>
                    <p className="p-2 flex justify-center font-medium">
                      No time to rest, get back to work!
                    </p>
                  </>
                )}
              {todos.length > 0 && (
                <>
                  <div className="flex justify-between items-center p-2">
                    <div className="text-sm text-todo-category font-medium">
                      {filter === "All" && (
                        <p className="">{todos.length} items left</p>
                      )}
                      {filter === "Active" && (
                        <p className="">
                          {
                            todos.filter((item) => item.isCompleted === false)
                              .length
                          }{" "}
                          items left
                        </p>
                      )}
                      {filter === "Completed" && (
                        <p className="">
                          {
                            todos.filter((item) => item.isCompleted === true)
                              .length
                          }{" "}
                          items left
                        </p>
                      )}
                    </div>
                    <div className="flex space-x-2 p-2 justify-center text-sm text-todo-category font-medium">
                      <button
                        className={`hover:text-black ${
                          filter === "All" ? "text-black" : ""
                        }`}
                        onClick={() => setFilter("All")}
                      >
                        All
                      </button>
                      <button
                        className={`hover:text-black ${
                          filter === "Active" ? "text-black" : ""
                        }`}
                        onClick={() => setFilter("Active")}
                      >
                        Active
                      </button>
                      <button
                        className={`hover:text-black ${
                          filter === "Completed" ? "text-black" : ""
                        }`}
                        onClick={() => setFilter("Completed")}
                      >
                        Completed
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default TodosPage;
