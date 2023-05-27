import React from "react";
import { useState } from "react";
import { toast } from 'react-toastify';
import { Navigate, Link } from "react-router-dom";

function TodoHeader() {

  const [navigate, setNavigate] = useState(false);

  const handleClick = () => {
    localStorage.removeItem("token");
    toast.success("You've successfully logged out!");
    setNavigate(true);
  }

  if(navigate) {
    return <Navigate to = "/"/>;
  }

  return (
    <div className="flex fixed items-center justify-between w-full bg-header-bg pt-4 pb-4 pr-20 pl-20 shadow-md">
      <div className="logo text-3xl font-bold">
        <Link to="/" className="text-white">
          <span className="text-button-header">Do</span>plan.
        </Link>
      </div>
      <nav className="flex items-center font-medium text-lg">
        <ul className="flex text-white items-center text-lg">
          <li>
            <button
              className="w-full bg-button-header rounded-lg pl-5 pr-5 pb-2 pt-2 hover:bg-black transition ease-in-out"
              onClick={handleClick}
            >
              Log out
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default TodoHeader;
