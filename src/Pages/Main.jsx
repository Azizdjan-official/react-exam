
import {  Outlet, useNavigate } from 'react-router-dom';
import Sidebar from './../Partials/Sidebar';
import Header from './../Partials/Header';
import { toast } from 'react-toastify';
import { localTokenKey, reqTokenHederKey } from './constant';
import axios  from 'axios';
import { FaCopy, FaTrash } from 'react-icons/fa';
import { useEffect, useState } from 'react';


const Main = () => {
    
    
    const [user,setUser] = useState([])
    const navigate = useNavigate();
    async function handleLogin() {
        let {data} =  await axios.get("/auth", { reqTokenHederKey:localTokenKey });
        setUser(data)
      }
      handleLogin()
      console.log(user);

      const handleDelete = async () => {
        try {
        
            let {data} =  await axios.delete("/users", { reqTokenHederKey:localTokenKey },)
          
          if (
            confirm(
              "Are your sure to delete your account?  You cannot undo this action!"
            )
          ) {
            toast.success(data.message);
            navigate("/login");
          }
        } catch (error) {
          toast.error(error.message);
        }
      };
      
      const handleCopyUserName = async() => {
        // let {data} =  await axios.get("/auth", { reqTokenHederKey:localTokenKey });
        // setUser(data)
        // user.username;
      };

  return (
    <div className="d-flex flex-column">
        <div className='d-flex'>
            <Header />
        </div>
        <div className='d-flex'>
            <Sidebar />
            <main id='main' className="bg-secondary py-5 px-4">
                <div className=' mx-auto bg-white rounded-4 px-4 py-5 d-flex flex-column'>
                    <div className='d-flex justify-content-between '>
                        <h4>Your Profile</h4>
                        <div className="btns d-flex gap-3">
                            <button onClick={() => handleCopyUserName()}  className='btn btn-primary'><FaCopy/> Copy Username</button>
                            <button onClick={() => handleDelete()} className='btn btn-danger'><FaTrash/> Delete Account</button>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div>
                        <h6 className='w-100 h-100 bg-secondary p-4 rounded-circle border d-flex align-items-center justify-content-center'>{user.name}</h6>
                        </div>
                        <div>
                            <h4>{user.name}<span className="badge bg-success">{user.status}</span></h4>
                            <h6>{user.username}</h6>
                        </div>                        
                    </div>
                </div>
                <Outlet />
            </main>
        </div>
      </div>
      
      
  )
}

export default Main
