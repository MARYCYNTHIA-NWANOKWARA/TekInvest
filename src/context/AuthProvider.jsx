import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

export default function AuthProvider({children}){
    const [user, setUser] = useState(localStorage.getItem("currentUserEmail")? {email:localStorage.getItem("currentUserEmail")} : null)

    const navigate = useNavigate()

    function signUp(email,password){
        const users = JSON.parse(localStorage.getItem("users") || "[]" )

        if(users.find((u) => u.email === email)){
            return {success:false, error: "email already exists"}
        }

        const newUser = {email, password}
        users.push(newUser)
        localStorage.setItem("users" , JSON.stringify(users))
        localStorage.setItem("currentUserEmail", email)

        setUser({email})

        return {success:true}
    }

    function logIn(email,password){
        const users = JSON.parse(localStorage.getItem("users") || "[]")
        const user = users.find((u)=> u.email === email && u.password === password)

        if(!user){
            return {success:false, error: "invalid email or password"}
        }

        localStorage.setItem("currentUserEmail", email)
        setUser({email})

        return {success:true}

    }

    function logOut(){
        localStorage.removeItem("currenUserEmail")
        setUser(null)

        navigate("/")

    }

   return <AuthContext.Provider value={{signUp,logIn,user,logOut}}>{children}</AuthContext.Provider>
}
