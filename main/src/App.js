import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Home from "./Functionality/Home";
import NavBar from "./Functionality/navbar";
import Add from "./Functionality/add";
import Edit from "./Functionality/edit";
import axios from "axios";
import { useDispatch } from "react-redux";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function featchData() {
      const res = await axios.get("http://localhost:3004/users");
      console.log("oooooooooooo", res.data);
      dispatch({ type: "GET_EMPLOYEE", payload: res.data });
    }
    featchData();
  }, []);

  return (
    <div className="App">
      <ToastContainer />
      <NavBar />
      {}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/add" element={<Add />}></Route>
        <Route exact path="/edit/:id" element={<Edit />}></Route>
      </Routes>
    </div>
  );
};

export default App;
