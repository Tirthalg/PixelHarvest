import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth,registerWithEmailAndPassword,logInWithEmailAndPassword, signInWithGoogle,sendPasswordReset  } from "../fb";
import { useAuthState } from "react-firebase-hooks/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import icon from '../Components/Assets/logotb.png'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");

    const navigate = useNavigate();
    console.log(error)
    const register = () => {
        if (!name) alert("Please enter name");
        registerWithEmailAndPassword(name, email, password);
    };
    useEffect(() => {
        if (loading) {
            return;
        }
        if (user) {
            navigate("/");
        }
    }, [user, loading]);
    var location = useLocation().pathname
    return (
        <div className="bg-gradient-to-br from-black to-slate-950 flex flex-wrap place-content-center h-screen w-screen">
            <div className="bg-slate-300 rounded-lg  w-96 p-5 flex flex-wrap justify-center font-mono">
                <img src={icon} alt="P" className="w-16 m-4 object-contain self-center " />
                {location === '/signup' &&
                    <input
                        type="text"
                        className="w-full mb-4 p-2 rounded-lg "
                        value={name} onChange={(e) => setName(e.target.value)}
                        placeholder="Full Name"
                    />
                }
                <input
                    type="text"
                    className="w-full mb-4 p-2 rounded-lg "
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail Address"
                />
                {location !== '/reset' &&
                    <input
                        type="password"
                        className="w-full mb-4 p-2 rounded-lg "
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                }
                {location === '/login'&&
                    <button
                        className="w-10/12 bg-slate-900 text-white p-2 text-lg rounded-lg logo mb-5 mr-2"
                        onClick={() => logInWithEmailAndPassword(email, password)}
                    >
                        Login
                    </button>
                }
                {location === '/signup'&&
                    <button className="w-10/12 bg-slate-900 text-white p-2 text-lg rounded-lg logo mb-5 mr-2" onClick={register}>
                        Sign up
                    </button>
                }
                {location === '/reset' &&
                    <button
                    className="w-10/12 bg-slate-900 text-white p-2 text-lg rounded-lg logo mb-5 mr-2"
                    onClick={() => sendPasswordReset(email)}
                  >
                    Send password reset email
                  </button>
                }
                {location !== '/reset' &&
                    <>
                        <hr className="h-[2px] bg-slate-800 w-4/12 self-center"/>
                        <p className="mx-8 text-slate-800 p-2">OR</p>
                        <hr className="h-[2px] bg-slate-800 w-4/12 self-center"/>
                        <button className="w-12 h-12 p-2 bg-slate-900 mb-5 self-center rounded-full " onClick={signInWithGoogle}>
                            <FontAwesomeIcon icon={faGoogle} size="lg" color="white"/>
                        </button>
                    </>
                }
                {location === '/login' &&
                    <>
                        <p className="text-left w-full">
                            <Link to="/reset">Forgot Password</Link>
                        </p>
                        <p className="mb-5 w-full ">
                            <Link to="/signup">Don't have an account? Register now</Link> 
                        </p>
                    </>
                }
                {location === '/signup' &&
                    <p className="mb-5 w-full ">
                        <Link to="/login">Already have an account? Login now</Link> 
                    </p>
                }
                {location === '/reset' &&
                    <p className="mb-5 w-full ">
                        <Link to="/signup" className="text-black">Don't have an account? Register now</Link> 
                    </p>
                }
            </div>
        </div>
    );
}
export default Login;