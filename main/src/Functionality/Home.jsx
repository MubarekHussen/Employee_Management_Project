import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "rebass";
import { css } from "@emotion/react";
const Home = () => {
  const { id } = useParams();
  const employes = useSelector((state) => state);
  const dispatch = useDispatch();
  const deleteEmployee = async (id) => {
    const res = await axios.delete(`http://localhost:3004/users/${id}`);
    dispatch({ type: "DELETE_EMPLOYEE", payload: id });
    toast.success("Employee deleted successfully!!");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 my-5 ">
          <Button
            fontSize={3}
            as="a"
            href="/add"
            color="orange"
            bg="#303030"
            mr={2}
          >
            Add Employee
          </Button>
        </div>
        <div className="col-md-12 mx-auto">
          <table className="table table-hover">
            <thead className="text-white bg-dark text-left">
              <tr>
                <th scope="col">Profile</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Salary</th>
                <th scope="col">Age</th>
                <th scope="col">Height</th>
                <th scope="col">Gender</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {employes.map((employe, id) => (
                <tr key={id}>
                  <td>
                    <img
                      src={employe.profile}
                      className="rounded-circle"
                      style={{ width: 80, height: 80 }}
                      alt="Avatar"
                    />
                  </td>
                  <td> {employe.Fname}</td>
                  <td>{employe.Lname}</td>
                  <td>{employe.email}</td>
                  <td>{employe.salary}</td>
                  <td>{employe.age}</td>
                  <td>{employe.height}</td>
                  <td>{employe.gender}</td>
                  <td>
                    <Link
                      to={`/edit/${employe.id}`}
                      className="btn btn-md btn-secondary mr-2"
                    >
                      Edit
                    </Link>
                    <Button
                      fontSize={1}
                      color="orange"
                      bg="#303030"
                      ml={1}
                      my={3}
                      onClick={() => deleteEmployee(employe.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
