import { Route, Routes, useNavigate } from "react-router-dom"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Main from "./Pages/Main"
import Group from './Pages/Store/Group';
import { useDispatch } from "react-redux";
import { localTokenKey } from "./Pages/constant";
import axios  from 'axios';
import { useEffect } from "react";



function App() {
  // const token = localStorage.getItem(localTokenKey);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   (async function () {
  //     if (!token) {
  //       navigate("login");
  //     }
  //   })();
  // }, [token, navigate]);

 

  return (
    <>
    
    <Routes>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<Login/>}/>
      <Route path="/main" element={<Main/>}/>
      <Route path="/main/groups" element={<Group/>}/>
      
    </Routes>
    </>
  )
}

export default App
