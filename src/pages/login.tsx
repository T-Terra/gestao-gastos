import FormLogin from "../components/forms/formLogin"
import { useNavigate } from "react-router"
import { LoginInterface } from "@/interfaces/LoginInterface"
import { ShowToastSuccess, ShowToastError } from "@/components/toast/toastFunctions"
import axios from "axios"

export default function Login() {
    const navigate = useNavigate()

    const apiUrl: string = import.meta.env.VITE_API_URL

    const saveLogin = async (login: LoginInterface) => {
        if (login.Email === "" && login.Password === "") {
            alert("Campos vazios não foi possível salvar")
        } else {
            const response = await axios.post(`${apiUrl}/login`, JSON.stringify(login), {
                headers: {"Content-Type": "application/json"},
                withCredentials: true
            })

            if (response.status === 200) {
                ShowToastSuccess("Login realizado com sucesso!")
                navigate('/home')
                localStorage.setItem("username", response.data['username'])
            } else {
                ShowToastError("Erro!")
            }
        }
    }

    function GetFormData(formData: FormData) {
        const email = formData.get('email') as string
        const password = formData.get('password') as string

        const loginData: LoginInterface = {
            "Email": email,
            "Password": password
        }

        saveLogin(loginData)
    }

    return (
        <FormLogin funcAuth={GetFormData}/>
    )
}