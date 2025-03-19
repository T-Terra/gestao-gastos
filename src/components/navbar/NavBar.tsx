import { Outlet, Link } from "react-router"
import { 
    HomeIcon, 
    HandCoins, 
    Plus,
    CreditCard,
    ChevronRight,
    ChevronLeft
} from "lucide-react"
import { Button } from "../buttons/button"
import IconStyles from "../buttons/IconStyles"

export default function NavBar() {
    return (
        <div className="w-full overflow-x-hidden bg-gray-800 flex flex-row shadow-lg">
            <div className="p-8 text-gray-100">
                <div className="absolute mx-19 my-17">
                    <Button type="button" style="bg-indigo-500 hover:bg-indigo-400 w-[22px] h-[22px] rounded-4xl flex justify-center items-center">
                        <ChevronLeft/>
                    </Button>
                </div>
                <ul className="flex flex-col gap-8 justify-center items-center my-25">
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
                        <Link to="/creditcard" replace>
                            <IconStyles>
                                <CreditCard size={27}/>
                            </IconStyles>
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}