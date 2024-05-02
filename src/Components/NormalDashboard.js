import React from "react"
import { useSelector } from "react-redux"
import { adduser } from "../Features/Userslice"
import Edituser from "./Edituser"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";


function NormalDashboard() {



    const userdata = useSelector(state => state.user)

    console.log(userdata, "dashborad page")

    const Navigate = useNavigate()



    function GotoMainPage() {
        Navigate("/")
    }




    return (
        <div className="Dashboard">
            <h2> Dashboard</h2>

            <table class="table table-fixed">
                <thead>
                    <tr>
                        <th scope="col">Emp id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>

                    </tr>
                </thead>

                {userdata && userdata.map((i) => {
                    return (


                        <tbody>
                            <tr>
                                <th scope="row">{i.id}</th>

                                <td>{i.username}</td>
                                <td>{i.useremail}</td>


                            </tr>

                        </tbody>


                    )




                })}



            </table><br /><br />

            <button type="button" class="btn btn-warning" style={{ marginLeft: "500px", marginTop: "100px" }} onClick={GotoMainPage}>Home page</button>

        </div>

    )
}


export default NormalDashboard
