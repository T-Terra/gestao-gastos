import { FormRegister } from "../components/forms/formRegister"
import { RegisterInterface } from "@/interfaces/registerInterface"
import axios from "axios"
import { useNavigate } from "react-router"

export default function Register() {
    const navigate = useNavigate()

    const apiUrl: string = import.meta.env.VITE_API_URL

    const saveRegister = async (register: RegisterInterface) => {
        if (register.Username === "" && register.Email === "" && register.Password === "") {
            alert("Campos vazios não foi possível salvar")
        } else {
            const response = await axios.post(`${apiUrl}/register`, JSON.stringify(register), {
                headers: {"Content-Type": "application/json"}
            })

            if (response.status === 201) {
                navigate('/')
            }
        }
    }

    function GetFormData(formData: FormData) {
        const name = formData.get('name') as string
        const email = formData.get('email') as string
        const confirmEmail = formData.get('confirmEmail') as string
        const password = formData.get('password') as string
        const confirmPassword = formData.get('confirmPassword') as string

        if ((email === confirmEmail) && (password === confirmPassword)) {
            const registerData: RegisterInterface = {
                "Username": name,
                "Password": password,
                "Email": email
            }

            saveRegister(registerData)
        }
    }

    return (
        <FormRegister funcSignup={GetFormData}/>
    )
}