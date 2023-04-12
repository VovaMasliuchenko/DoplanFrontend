import axios from "axios";
import { useEffect, useState } from "react";
import { Carousel,Card,Button,Row,Col,Pagination } from "react-bootstrap";
import { useHistory } from "react-router-dom";


function WelcomePage() {

    return (
      <div>
        <h1>Welcome</h1>
        <a href="/Login">Login</a>
        <br/>
        <a href="/Register">Register</a>
      </div>

    );
  }
export default WelcomePage;