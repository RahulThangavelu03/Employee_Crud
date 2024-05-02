import React from "react"
import Signup from "./SignUp"


import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import NormalDashboard from "./NormalDashboard";

import AdminDashboard from "./AdminDashboard";
import { useSelector } from "react-redux"



function Login() {


    const [formdata, setFormData] = useState({

        email: "",
        password: ""
    })


    const AllData = useSelector(state => state.user)

    // console.log(AllData, "alldataaaaaaaaaaaaa")

    const navigate = useNavigate()
    const Admindata = [{ email: "admin@gmail.com", password: "1234" }]
    // console.log(Admindata, "admindata")





    const handleChange = (e) => {



        const { name, value } = e.target

        setFormData({

            ...formdata, [name]: value
        })


    }


    // console.log(formdata, "formdata")




    function handleSubmit(e) {

        e.preventDefault()

        // console.log(formdata, "formdata")

        let exsistinguser = AllData.some(i => i.useremail.toLowerCase() === formdata.email.toLowerCase() && i.userpassword === formdata.password)
        console.log(exsistinguser, "exsistinguser")





        let isAdmin = Admindata.some(i => formdata.email.toLowerCase() === i.email.toLowerCase() && formdata.password.toLocaleLowerCase() === i.password.toLocaleLowerCase())


        if (isAdmin) {
            console.log("==============>")
            navigate("/AdminDashboard")

        }




        else if (exsistinguser == false) {


            alert("user does not exsist")

        }

        else {




            navigate('/NormalDashboard')

        }



    }



    return (
        <div className="Login">


            <h2 style={{ paddingLeft: "20px" }}>Login Page</h2>


            <form id="form" onSubmit={handleSubmit}>
                <div className="form-group"><br />
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        name="email"
                        value={formdata.email}
                        onChange={handleChange}
                        style={{ maxWidth: '300px' }}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        name="password"
                        value={formdata.password}
                        onChange={handleChange}
                        required style={{ maxWidth: '300px' }}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form><br />
            <p style={{ paddingLeft: "20px" }}> don't have an account? </p>
            <Link to="/Signup" style={{ paddingLeft: "50px" }} > Sign Up</Link>

        </div>
    );







}

export default Login
