import { Button } from 'react-bootstrap';
import { FaBlog } from 'react-icons/fa';
import { useNavigate, Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { localTokenKey } from './constant';
import axios  from 'axios';
import { Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';


const Register = () => {

    const initialValue = {
        name: "",
        username: "",
        password: "",

      }

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    async function handleLogin(e) {
        e.preventDefault();
        if (!name) return toast("Name is required!", { type: "error" });
        if (!username) return toast("Username is required!", { type: "error" });
        if (!password) return toast("Password is required!", { type: "error" });
        if (password.length < 6)
          return toast("Password must be at least 6 characters long!", {
            type: "error",
          });
        setLoading(true);
        initialValue.name= name;
        initialValue.username= username;
        initialValue.password= password;
        console.log(initialValue);
        try {
          
          let {
            data: { token },
          } = await axios.post("/users", { name, username, password });
    
          localStorage.setItem(localTokenKey, token);
          toast("Logged in successfully", { type: "success" });
          axios.defaults.headers.common[reqTokenHederKey] = token;
          navigate("/main");
          
        } catch (error) {
          console.log(error);
          if (error) {
            // error.response.data.errors.forEach((err) =>
              toast( error.response.data.message, { type: "error" })
            // );
          } else {
            console.log(error);
            
          }
        } finally {
          setLoading(false);
        }
      }

      const token = localStorage.getItem(localTokenKey);
      if (token) return <Navigate to="/main" />;

    return (
        <div className='d-flex align-items-center justify-content-center text-white' id='logindiv'>
          <div className='d-flex w-75   '>
            <div className='w-50 d-flex flex-column   align-items-center justify-content-center gap-5 rounded-start-4 ' id='logincard'>
                <FaBlog size={130} color="blue"/>
                <h1 className="fs-6">Welcome back to</h1>
                <h2 className="display-1">Shopping list</h2>
            </div>
            <div className='w-50 d-flex flex-column p-5 bg-white text-black rounded-end-4 gap-3' id='logincard2'>
                <h1 className="text-primary text-center">Register</h1>
                <form onSubmit={handleLogin} className="d-flex flex-column gap-3 " >
                    <label htmlFor="">
                        <h6>Name</h6>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)}  className="w-100 rounded border-1 py-2" />
                    </label>
                    <label htmlFor="">
                        <h6>Username</h6>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}   className="w-100 rounded border-1 py-2" />
                    </label>
                    <label htmlFor="">
                        <h6>Password</h6>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-100 rounded border-1 py-2" minLength={6} />
                    </label>
                    <Button type="submit" variant="info" disabled={loading}>
                        {loading ? <Spinner /> : "Sign up"}
                    </Button>
                </form>
                <p className="mt-3">
                    Already have an account?{" "}
                    <span className="text-info ">
                        <Link to="/login">Sign in</Link>
                    </span>
                </p>
                
            </div>
          </div>
        </div>
      )
}

export default Register
