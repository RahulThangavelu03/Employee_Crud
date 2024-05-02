import React, { useState } from 'react';
import { adduser } from '../Features/Userslice';
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import Userslice from "../Features/Userslice";
import { useNavigate } from "react-router-dom";
import Dashboard from "./AdminDashboard";
import { Link } from "react-router-dom"


const SignUp = () => {
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        password: ''
    });

    const dispacth = useDispatch()
    const data = useSelector(state => state.user)

    const Navigate = useNavigate()



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });



        console.log(data, "dataaaaaaa")
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { email, password, name } = formData


        console.log(formData.email, "(formData.email)")
        console.log(formData.password, "(formData.passsword)")



        let duplicate = data.find(i => i.useremail === email)

        console.log(duplicate, "duplicate")

        if (duplicate) {



            alert("account already exsist")
        }


        else {

            dispacth(adduser({ email: formData.email, password: formData.password, name: formData.name }))

            console.log('Form submitted:', formData);

            Navigate('/NormalDashboard')
        }


    };

    return (
        <div className="Signup">
            <h2 style={{ padding: "20px" }}>Create Account</h2>
            <form id="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        style={{ maxWidth: '300px' }}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required style={{ maxWidth: '300px' }}
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required style={{ maxWidth: '300px' }}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button><br /><br />
                {/* <a href="/">back to login page</a> */}
                <Link to="/" style={{ paddingLeft: "50px" }} > Back to login</Link>
            </form>
        </div>
    );
};

export default SignUp
