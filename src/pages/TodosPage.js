import axios from "axios";
import { useEffect, useState } from "react";
import { Carousel,Card,Button,Row,Col,Pagination } from "react-bootstrap";
import { useHistory } from "react-router-dom";


function TodosPage() {

  const [userData, setUserData] = useState()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(()=> {
    getUserData();
  }, [])

  function handleClick() {
    window.location.href = '/';
    localStorage.removeItem("token");
  }

  function getUserData() {
    axios.get("https://localhost:7137/api/Authenticate/Me")
      .then(response => {
        setUserData(response.data);
        console.log(userData);
      })
      .catch(err => console.log(err));
  } 
  
    return (
      <div>
        <header className="p-3 bg-dark text-white">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <div className="text-end d-flex align-items-center justify-content-center">
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li className="m-1">{userData ? <h3>{userData.userName}</h3> : null}</li>
          <li className="m-1">{userData ? <h3>{userData.email}</h3> : null}</li>
        </ul>
          <button type="button" className="btn btn-warning m-2" onClick={ () => handleClick()} >Logout</button>
        </div>
      </div>
    </div>
  </header>
      </div>

    );
  }
export default TodosPage;