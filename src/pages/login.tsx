import FormLogin from "../components/forms/formLogin"

export default function Login() {

    function GetFormData(formData: FormData) {
        const email = formData.get('email')
        const password = formData.get('password')

    }

    return (
        <FormLogin funcAuth={GetFormData}/>
    )
}