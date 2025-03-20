import UserImg from "@/assets/user.png"

type props = {
    nameUser: string
}

export default function User({ nameUser }: props) {
    return (
        <div className="flex items-center gap-4 text-gray-100 w-[300px] p-3">
            <div className="w-[40px] h-[40px]">
                <img src={UserImg} alt="Imagem usuário" />
            </div>
            <div className="font-semibold">
                {nameUser}
            </div>
        </div>
    )
}