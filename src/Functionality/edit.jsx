import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Edit = () => {
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("");
  const { id } = useParams();

  const [profile, setProfile] = useState(null);
  const [url, setUrl] = useState("");
  const employes = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentEmployee = employes.find(
    (employee) => employee.id === parseInt(id)
  );
  useEffect(() => {
    if (currentEmployee) {
      setFname(currentEmployee.Fname);
      setLname(currentEmployee.Lname);
      setEmail(currentEmployee.email);
      setSalary(currentEmployee.salary);
      setAge(currentEmployee.age);
      setHeight(currentEmployee.height);
      setGender(currentEmployee.gender);
      setUrl(currentEmployee.profile);
    }
  }, [currentEmployee]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!Fname || !Lname || !email || !salary || !age || !height || !gender) {
      return toast.warning("Please fill all fildes!!!!");
    }
    const data = {
      id: parseInt(id),
      Fname,
      Lname,
      email,
      salary,
      age,
      height,
      gender,
      profile: url,
    };

    const res = await axios.patch(`http://localhost:3004/users/${id}`, data);

    dispatch({ type: "UPDATE_EMPLOYEE", payload: data });
    toast.success("Employee updated successfully!!");
    navigate("/");
  };
  return (
    <div>
      {currentEmployee ? (
        <div style={{ width: 500, margin: "20px auto" }}>
          <form onSubmit={handleSubmit}>
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
              placeholder="Age"
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
                    checked={gender == "M" && true}
                    id={`inline-${type}-1`}
                    value={"M"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <Form.Check
                    inline
                    label="Female"
                    checked={gender == "F" && true}
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
            <div>{url && <img className="image" width={150} src={url} />}</div>
            <br />
            <input
              type="submit"
              value="Update Employee"
              className="btn btn-dark"
            />
            <Link to="/" className="btn btn-danger ms-5">
              Cancel
            </Link>
          </form>
        </div>
      ) : (
        <h1 className="display-1 text-center">
          Employee with id {id} is not exist!!{id}
        </h1>
      )}
    </div>
  );
};
export default Edit;
