import { Button } from "../buttons/button"
import { Link } from "react-router"

type props = {
    funcSignup: (formData: FormData) => void
}

export function FormRegister({ funcSignup }: props) {
    return (
        <div className="h-screen w-screen bg-gray-900 flex justify-center items-center">
            <div className="w-[450px] h-[600px]">
                <form action={funcSignup} className="bg-gray-800 text-gray-100 mx-auto p-6 rounded-lg shadow-lg">
                    <div className="mb-4">
                        <label className="block font-semibold mb-2 text-center">Name</label>
                        <input
                            placeholder="Type your name"
                            type="text" 
                            name="name" 
                            id="name" 
                            required
                            className="w-full border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-semibold mb-2 text-center">Email</label>
                        <input
                            placeholder="Type your email address"
                            type="email" 
                            name="email" 
                            id="email" 
                            required
                            className="w-full border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-semibold mb-2 text-center">Confirm Email</label>
                        <input
                            placeholder="Confirm email address"
                            type="email" 
                            name="confirmEmail" 
                            id="confirmEmail" 
                            required
                            className="w-full border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-semibold mb-2 text-center">Password</label>
                        <input
                            placeholder="Type password"
                            type="password" 
                            name="password" 
                            id="password" 
                            required
                            className="w-full border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 p-2"
                        />
                    </div>
                    <div className="mb-10">
                        <label className="block font-semibold mb-2 text-center">Confirm Password</label>
                        <input
                            placeholder="Confirm password"
                            type="password" 
                            name="confirmPassword" 
                            id="confirmPassword" 
                            required
                            className="w-full border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 p-2" 
                        />
                    </div>
                    <div className="flex justify-center mb-3">
                        <Button style={"w-full py-3 font-semibold text-xl text-gray-100 bg-indigo-500 hover:bg-indigo-600 rounded-lg"}>
                            Sign Up
                        </Button>
                    </div>
                    <div className="flex justify-center text-[16px]">
                        <div>
                            <span>Already on Site?</span>
                        </div>
                        <Link to='/'>
                            <div className="px-2 text-indigo-500 hover:text-indigo-400">
                                Sign In
                            </div>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}