import { FormRegister } from "../components/forms/formRegister"

export default function Register() {

    function GetFormData(formData: FormData) {
        const name = formData.get('name')
        const email = formData.get('email')
        const confirmEmail = formData.get('confirmEmail')
        const password = formData.get('password')
        const confirmPassword = formData.get('confirmPassword')
        
    }

    return (
        <FormRegister funcSignup={GetFormData}/>
    )
}