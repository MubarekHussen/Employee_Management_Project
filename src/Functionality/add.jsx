import axios from "axios";
import React, { Component, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Add = () => {
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("");
  const [profile, setProfile] = useState(null);
  const [url, setUrl] = useState("");
  const add = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!Fname || !Lname || !email || !salary || !age || !height || !gender) {
      return toast.warning("Please fill all fildes!!!!");
    }

    const data = {
      id: add.length + 1,
      Fname,
      Lname,
      email,
      salary,
      age,
      height,
      gender,
      profile: url,
    };
    const res = await axios.post("http://localhost:3004/users", data);

    dispatch({ type: "ADD_EMPLOYEE", payload: data });
    toast.success("Employee added successfully!!");
    navigate("/");
  };

  return (
    <div style={{ width: 500, margin: "20px auto" }}>
      <form onSubmit={handleSubmit}>
        <h1 className="display-1 text-center">Add Employee</h1>
        <Form.Label>First Name</Form.Label>
        <Form.Control
          size="lg"
          type="text"
          placeholder="First Name"
          value={Fname}
          onChange={(e) => setFname(e.target.value)}
        />
        <br />
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          size="lg"
          type="text"
          placeholder="Last Name"
          value={Lname}
          onChange={(e) => setLname(e.target.value)}
        />
        <br />
        <Form.Label>Email</Form.Label>
        <Form.Control
          size="lg"
          type="text"
          placeholder="example@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <Form.Label>Salary</Form.Label>
        <Form.Control
          size="lg"
          type="text"
          placeholder="$"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
        <br />
        <Form.Label>Age</Form.Label>
        <Form.Control
          size="lg"
          type="text"
          placeholder="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <Form.Label>Height</Form.Label>
        <Form.Control
          size="lg"
          type="text"
          placeholder="in meters"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <br />
        <Form.Label>Gender</Form.Label>
        <Form>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="Male"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
                value={"M"}
                onChange={(e) => setGender(e.target.value)}
              />
              <Form.Check
                inline
                label="Female"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
                value={"F"}
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
          ))}
        </Form>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Choose your profile picture</Form.Label>
          <Form.Control
            onChange={(e) => {
              setProfile(e.target.files[0]);
              const imageEL = document.querySelector(".image");

              const reader = new FileReader();
              reader.onload = (e) => {
                const { result } = e.target;
                setUrl(result);
              };
              reader.readAsDataURL(e.target.files[0]);

              // setUrl(URL.createObjectURL(e.target.files[0]));
            }}
            type="file"
          />
        </Form.Group>
        <div>{profile && <img className="image" width={150} src={url} />}</div>

        <br />
        <input
          className="btn btn-block btn-dark"
          type="submit"
          value="Add Employee"
        />
      </form>
    </div>
  );
};
export default Add;
