import React from "react"
import { useSelector } from "react-redux"
import { adduser } from "../Features/Userslice"
import Edituser from "./Edituser"
import { Deleteuser } from "../Features/Userslice"

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"



function AdminDashboard() {



    const userdata = useSelector(state => state.user)

    console.log(userdata, "dashborad page")

    const Navigate = useNavigate()

    const Dispatch = useDispatch()



    function handleSubmit(id, username, useremail) {


        console.log(id, "id")

        Navigate('/Edit', {
            state: {
                id: id,
                name: username,
                email: useremail



            }
        })


    }



    function Adduser() {

        Navigate("/Signup")

    }



    function HandleDelete(i) {

        console.log(i.id, "iiiiiiiiiiiii")


        let id = i.id

        Dispatch(Deleteuser(id))



    }



    return (
        <div className="Dashboard">
            <h2> Admin Dashboard</h2>

            <table class="table table-fixed">
                <thead>
                    <tr>
                        <th scope="col">Emp id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Options</th>
                    </tr>
                </thead>

                {userdata && userdata.map((i) => {
                    return (


                        <tbody>
                            <tr>
                                <th scope="row">{i.id}</th>

                                <td>{i.username}</td>
                                <td>{i.useremail}</td>
                                <td><button type="button" class="btn btn-primary" onClick={() => handleSubmit(i.id, i.username, i.useremail)}>Edit </button><button type="button" style={{ marginLeft: "10px" }} class="btn btn-danger" onClick={() => HandleDelete(i)}>Delete</button></td>


                            </tr>

                        </tbody>


                    )




                })}



            </table><br />

            <button type="button" class="btn btn-warning" style={{ marginTop: "80px", marginLeft: "600px" }} onClick={Adduser} >Add user</button><br /><br /><br />



            <footer class="bg-body-tertiary text-center">

                <div class="container p-4"></div>



                <div class="text-center p-3" style={{ backgroundColor: "#0275d8" }}>



                </div>

            </footer>
        </div>

    )
}


export default AdminDashboard
