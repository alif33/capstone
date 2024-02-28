import { Link } from "react-router-dom"

export default function SignUp(){

    const handleSubmit = e=>{
        e.preventDefault()
    }

    return(
        <div className="w-[550] mx-auto">
            <h1 className="text-2xl font-medium text-center my-5">Sign In</h1>
            <form onSubmit={handleSubmit} className="pb-7">
                <div className="flex flex-col my-3">
                    <label htmlFor=""></label>
                    <input 
                        type="text" 
                        placeholder="Email"
                        className="h-11 w-[450px] border border-black pl-3"
                    />
                </div>
                <div className="flex flex-col my-3">
                    <label htmlFor=""></label>
                    <input 
                        type="text" 
                        placeholder="Password"
                        className="h-11 border border-black pl-3"
                    />
                </div>
                <div>
                    <button className="w-full bg-green-400 text-white h-11">Submit</button>
                </div>
            </form>
            <h3 className="text-center mb-7">Dont have an account? <Link to="/signup">Sign Up</Link></h3>
        </div>
    )
} 