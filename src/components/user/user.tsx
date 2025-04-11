import UserImg from "@/assets/user.png"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useEffect, useState } from "react"

export default function User() {
    const [user, setUser] = useState("")

    useEffect(() => {
        const username = localStorage.getItem("username") as string
        setUser(username)
    }, [])

    return (
        <div className="flex items-center gap-4 text-gray-100 w-[300px] p-3">
            <Avatar>
                <AvatarImage src={UserImg} />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="font-semibold">
                {user}
            </div>
        </div>
    )
}