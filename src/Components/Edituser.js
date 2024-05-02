import React from "react"
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { useState } from "react"
import { useDispatch } from "react-redux";
import { edituser } from "../Features/Userslice";
import { AdminDashboard } from "./AdminDashboard"
import { useNavigate } from "react-router-dom";
import SignUp from "./SignUp";

import Dashboard from "./AdminDashboard"


function Edituser(prop) {

    const location = useLocation()

    const dispatch = useDispatch()

    const Navigate = useNavigate()

    const userId = location.state.id



    const userdata = useSelector(state => state.user)

    console.log(userdata, "userdata")


    const formdata = userdata.filter(i => i.id == userId)

    console.log(formdata, "formdataaaa")

    const { id, useremail, username } = formdata[0]

    const [name, setName] = useState(username)
    const [email, setEmail] = useState(useremail)
    const [u_id, setId] = useState(id)

    console.log(formdata, "formdata")



    console.log(name, "nameeeeeee")







    function handleSubmit(e) {

        // const { name, value } = e.target


        e.preventDefault()

        dispatch(edituser({ name: name, email: email, id: u_id }))

        console.log(name, "nameeeeeeeeeee")

        Navigate("/AdminDashboard")



    }




    return (


        < div className="Edit">


            <h2 style={{ padding: "20px" }}>Edit user</h2>

            <form id="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Id</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter id"
                        name="id"
                        value={u_id}


                        style={{ maxWidth: '300px' }}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required style={{ maxWidth: '300px' }}
                    />
                </div>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required style={{ maxWidth: '300px' }}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
            </form>


        </div >
    )

}

export default Edituser
