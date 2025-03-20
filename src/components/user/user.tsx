import UserImg from "@/assets/user.png"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type props = {
    nameUser: string
}

export default function User({ nameUser }: props) {
    return (
        <div className="flex items-center gap-4 text-gray-100 w-[300px] p-3">
            <Avatar>
                <AvatarImage src={UserImg} />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="font-semibold">
                {nameUser}
            </div>
        </div>
    )
}