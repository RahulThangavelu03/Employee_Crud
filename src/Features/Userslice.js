import { createSlice } from "@reduxjs/toolkit"
import Edituser from "../Components/Edituser"



const user = createSlice({
    name: "user",
    initialState: [],

    reducers: {

        adduser(state, action) {

            const { email, password, name } = action.payload

            // console.log(email, "email")
            // console.log(password, "pass")
            let value = [{}]

            value = [...state, { id: Math.floor(Math.random() * 100), useremail: email, userpassword: password, username: name }]

            let data = value


            return data

        },

        edituser(state, action) {
            const { name, email, id } = action.payload

            const tempid = id




            const b = state.findIndex((i) => i.id == tempid)

            state[b].id = id
            state[b].username = name
            state[b].useremail = email




        },

        Deleteuser(state, action) {

            const id = action.payload
            console.log(id, "iddddd")

            const Newvalues = state.filter(i => i.id !== id)

            console.log(Newvalues, "newvalues")
            return Newvalues

        }









    }


})

export const { adduser, edituser, Deleteuser } = user.actions

export default user.reducer