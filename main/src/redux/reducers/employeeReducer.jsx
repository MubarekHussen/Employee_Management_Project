import { Action } from "@remix-run/router";
import { act } from "react-dom/test-utils";

const initialState = [
  // {
  //   id: 1,
  //   Fname: "Abera",
  //   Lname: "Melkamu",
  //   email: "abe@example.com",
  //   salary: "3000",
  //   age: "21",
  //   gender: "M",
  //   height: "1.75m",
  //   profile: "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
  // },
  // {
  //   id: 2,
  //   Fname: "Tayetu",
  //   Lname: "Betul",
  //   email: "tayetu@example.com",
  //   salary: "6000",
  //   age: "25",
  //   gender: "F",
  //   height: "1.55m",
  //   profile: "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
  // },
  // {
  //   id: 3,
  //   Fname: "Berihun",
  //   Lname: "Aschale",
  //   email: "beriew@example.com",
  //   salary: "8000",
  //   age: "30",
  //   gender: "M",
  //   height: "1.60m",
  //   profile: "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
  // },
  // {
  //   id: 4,
  //   Fname: "Hayat",
  //   Lname: "Abdurehmah",
  //   email: "Hayu@example.com",
  //   salary: "7000",
  //   age: "26",
  //   gender: "F",
  //   height: "1.65m",
  //   profile: "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
  // },
  // {
  //   id: 5,
  //   Fname: "Ebrahim",
  //   Lname: "Awol",
  //   email: "eba@example.com",
  //   salary: "9000",
  //   age: "30",
  //   gender: "M",
  //   height: "1.80m",
  //   profile: "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
  // },
];

const employeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      state = [...state, action.payload];
      return state;
    case "GET_EMPLOYEE":
      state = [...action.payload];
      return state;
    case "UPDATE_EMPLOYEE":
      const updateState = state.map((employee) =>
        employee.id === action.payload.id ? action.payload : employee
      );
      state = updateState;
      return state;
    case "DELETE_EMPLOYEE":
      const filterEmployee = state.filter(
        (employee) => employee.id !== action.payload && employee
      );
      state = filterEmployee;
      return state;
    default:
      return state;
  }
};

export default employeReducer;
