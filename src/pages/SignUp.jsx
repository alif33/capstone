import { useState } from "react"
import { Link } from "react-router-dom"

export default function SignUp(){
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPass, setConfirmPass] = useState("")

    const [err, setErr] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPass: ""
    })


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>])/

    const handleSubmit = e=>{
        e.preventDefault()

        if (!confirmPass.trim()) {
            setErr({ ...err, confirmPass: "Confirm Password cannot be empty" })
        } else if (password !== confirmPass) {
            setErr({ ...err, confirmPassword: "Passwords do not match" })
        }

        if (!password.trim()) {
            setErr({ ...err, password: "Password cannot be empty" })
        } else if (!passwordRegex.test(password)) {
            setErr({ ...err, password: "Password must be at least 8 character" })
        }

        if (!email.trim()) {
            setErr({ ...err, email: "Email cannot be empty" })
        } else if (!emailRegex.test(email)) {
            setErr({ ...err, email: "Invalid email format" })
        }

        if (!lastName.trim()) setErr({ ...err, lastName: "Last Name cannot be empty" })
        if (!firstName.trim()) setErr({ ...err, firstName: "First Name cannot be empty" })

        setTimeout(() => {
            setErr({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPass: ""
            });
        }, 5000)

    }

    return(
        <div className="w-[550] mx-auto">
            <h1 className="text-2xl font-medium text-center my-5">Sign Up</h1>
            <form onSubmit={handleSubmit} className="pb-7">
                <div className="flex flex-col my-3">
                    <label htmlFor=""></label>
                    <input 
                        type="text" 
                        placeholder="First Name"
                        className={`h-11 w-[450px] border pl-3 ${err.firstName !== "" ? "border-red-600": "border-black"}`}
                        onChange={e=>setFirstName(e.target.value)}
                    />
                    {err.firstName !== "" && <p className="text-red-600">{err.firstName}</p>}
                </div>
                <div className="flex flex-col my-3">
                    <label htmlFor=""></label>
                    <input 
                        type="text" 
                        placeholder="Last Name"
                        className="h-11 border border-black pl-3"
                        onChange={e=>setLastName(e.target.value)}
                    />
                    {err.lastName !== "" && <p className="text-red-600">{err.lastName}</p>}
                </div>
                <div className="flex flex-col my-3">
                    <label htmlFor=""></label>
                    <input 
                        type="text" 
                        placeholder="Email"
                        className="h-11 border border-black pl-3"
                        onChange={e=>setEmail(e.target.value)}
                    />
                    {err.email !== "" && <p className="text-red-600">{err.email}</p>}
                </div>
                <div className="flex flex-col my-3">
                    <label htmlFor=""></label>
                    <input 
                        type="text" 
                        placeholder="Password"
                        className="h-11 border border-black pl-3"
                        onChange={e=>setPassword(e.target.value)}
                    />
                    {err.password !== "" && <p className="text-red-600">{err.password}</p>}
                </div>
                <div className="flex flex-col my-3">
                    <label htmlFor=""></label>
                    <input 
                        type="text" 
                        placeholder="Password"
                        className="h-11 border border-black pl-3"
                        onChange={e=>setConfirmPass(e.target.value)}
                    />
                    {err.confirmPass !== "" && <p className="text-red-600">{err.confirmPass}</p>}
                </div>
                <div>
                    <button className="w-full bg-green-400 text-white h-11">Submit</button>
                </div>
            </form>
            <h3 className="text-center pb-7">Already have an account? <Link to="/signin">Login</Link></h3>
        </div>
    )
} 