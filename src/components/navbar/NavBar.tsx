import { Outlet, Link } from "react-router"
import { 
    HomeIcon, 
    HandCoins, 
    Plus,
    CreditCard,
    ChevronRight,
    ChevronLeft,
    List
} from "lucide-react"
import { Button } from "../buttons/button"
import IconStyles from "../buttons/IconStyles"
import { useState } from "react"
import { motion } from "framer-motion"


export default function NavBar() {
    const [open, setOpen] = useState(true)

    return (
        <div className="w-full overflow-x-hidden bg-gray-800 flex flex-row shadow-lg">
            <motion.div
                animate={{ marginLeft: open ? 96 : 0, marginTop: open ? 80 : 80 }} // Estado final animado
                transition={{ duration: 0.5, ease: "backInOut" }} // Duração e efeito
                className="absolute text-gray-100"
            >
                <Button 
                    type="button" 
                    style="bg-indigo-500 hover:bg-indigo-400 w-[22px] h-[22px] rounded-4xl flex justify-center items-center"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <ChevronLeft/> : <ChevronRight/>}
                </Button>
            </motion.div>
            <motion.div
                animate={{ padding: open ? 52 : 0, opacity: open ? 1 : 0 }} // Estado final animado
                transition={{ duration: 0.5, ease: "backInOut" }} // Duração e efeito
                className="bg-gray-800 text-gray-100 overflow-hidden"
            >
                <div className="text-gray-100">
                    <ul className="flex flex-col gap-8 items-center my-32">
                        <li>
                            <Link to="/" replace>
                                <Button type="button" style="bg-indigo-500 hover:bg-indigo-400 w-[55px] h-[55px] rounded-4xl flex justify-center items-center">
                                    <Plus size={27}/>
                                </Button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/home" replace>
                                <IconStyles>
                                    <HomeIcon size={27}/>
                                </IconStyles>
                            </Link>
                        </li>
                        <li>
                            <Link to="/expenses" replace>
                                <IconStyles>
                                    <HandCoins size={27}/>
                                </IconStyles>
                            </Link>
                        </li>
                        <li>
                            <Link to="/category" replace>
                                <IconStyles>
                                    <List size={27}/>
                                </IconStyles>
                            </Link>
                        </li>
                        <li>
                            <Link to="/creditcard" replace>
                                <IconStyles>
                                    <CreditCard size={27}/>
                                </IconStyles>
                            </Link>
                        </li>
                    </ul>
                </div>
            </motion.div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}