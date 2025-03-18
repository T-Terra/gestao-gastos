import { Button } from "../buttons/button"

type auth = {
    funcAuth: (formData: FormData) => void
}

export default function FormLogin({ funcAuth }: auth) {
    return (
        <div className="h-screen w-screen bg-gray-900 flex justify-center items-center">
            <div className="w-[400px] h-[400px]">
                <form action={funcAuth} className="bg-gray-800 text-gray-100 mx-auto p-6 rounded-lg shadow-lg">
                    <h1 className="text-3xl text-center mb-7 font-bold">Login</h1>
                    <div className="mb-4">
                        <label className="block font-semibold mb-2 text-center">Email</label>
                        <input 
                            placeholder="Type Email" 
                            type="email" 
                            name="email" 
                            id="email" 
                            required 
                            className="w-full border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 p-2"
                        />
                    </div>
                    <div className="mb-8">
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
                    <div className="flex justify-center">
                        <Button style={"w-full py-3 font-semibold text-xl text-gray-100 bg-indigo-500 hover:bg-indigo-600 rounded-lg"}>
                            Sign in
                        </Button>
                    </div>
                </form>
            </div>

        </div>
    )
}