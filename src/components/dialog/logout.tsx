import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from '@/components/buttons/button'
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router"
import { ShowToastSuccess, ShowToastError } from "@/components/toast/toastFunctions"

type props = {
    children: React.ReactNode
}

export default function Logout({ children }: props) {
    const [isOpen, setOpen] = useState(false)
    const navigate = useNavigate()
    const apiUrl: string = import.meta.env.VITE_API_URL

    const logoutHandler = async () => {
        const response = await axios.post(`${apiUrl}/logout`, {},{withCredentials: true})

        if (response.status === 200) { 
            ShowToastSuccess("Logout realizado!")
            navigate("/")
        } else {
            ShowToastError("Erro!")
        }
        setOpen(false)
    }

    return (
        <div>
            <Dialog open={isOpen} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <div className="flex">
                        <Button 
                            style="p-2 flex gap-1 text-red-500 hover:text-red-400"
                            onClick={() => {setOpen(true)}}
                            type="button"
                        >
                            {children}
                        </Button>
                    </div>
                </DialogTrigger>
                <DialogContent className="w-[280px] bg-gray-900 text-gray-100 border-1 border-gray-700 flex flex-col items-center">
                    <DialogHeader>
                        <DialogTitle>Deseja sair do sistema?</DialogTitle>
                        <DialogDescription>
                        </DialogDescription>
                    </DialogHeader>
                    <div>
                        <Button 
                            style="w-[170px] text-red-500 bg-gray-800 p-3 rounded-3xl shadow-md flex gap-2 hover:bg-gray-700 font-semibold"
                            onClick={() => {logoutHandler()}}
                            type="button"
                        >
                            {children}
                            Sair do sistema
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}