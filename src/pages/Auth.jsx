import { useForm } from "react-hook-form"
import { useState } from "react"

export default function Auth(){
    const [mode,setMode] = useState("login")

    const {register,handleSubmit,formState:{errors}} = useForm()

    function onSubmit(data){
        data.email,
        data.password
    }

    return(
        <>
         <div className="flex justify-center items-center h-130 ">

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 lg:w-[20%]">
              <h1 className="text-4xl font-bold text-center mb-14">{mode === "login" ? "Login" : "SignUp"}</h1>
               <div className="flex flex-col gap-1">
                <label htmlFor="email" className="font-semibold">Email</label>
                <input type="email" placeholder="user@example.com" id="email" className="border py-1 px-2 rounded-xl"
                  
                  {...register("email" , {required: "email is required"})}/>

                  {errors.email && <span className="text-red-800 text-sm text-center">{errors.email.message}</span>}
               </div>

               <div className="flex flex-col gap-1">
                <label htmlFor="password" className="font-semibold">Password</label>
                <input type="password" id="password" placeholder="*********" className="border py-1 px-2 rounded-xl"
                   {...register("password" , {required : "password is required",
                                              minLength: {
                                                value: 6,
                                                message: "password should not be less than 6 characters"
                                              },

                                              maxLength: {
                                                value: 12,
                                                message: "password should not be more than 12 characters"
                                              }
                   })} />

                   {errors.password && <span className="text-red-800 text-sm text-center">{errors.password.message}</span>}
               </div>


               <div className="text-center flex justify-center mt-10">
               <button className="py-2 px-8 font-semibold rounded-[20px] bg-orange-800 text-white items-center text-center flex border cursor-pointer hover:bg-orange-700 transition-colors">Submit</button>
               </div>

               <div className="text-center mt-10">
                 {mode === "login" ? (
                    <p className="text-sm">Don't have an account? <span onClick={() => setMode("signup")} className="text-blue-600 cursor-pointer underline hover:text-blue-700 transition-colors">Signup</span></p>
                 ) :
                    <p className="text-sm">Already have an account? <span onClick={() => setMode("login")} className="text-blue-600 cursor-pointer underline hover:text-blue-700 transition-colors">Login</span></p>}
               </div>
            </form>
         </div>
        </>
    )
}