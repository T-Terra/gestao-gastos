import { Outlet, Link } from "react-router"
import { 
    HomeIcon, 
    HandCoins,
    ChevronRight,
    ChevronLeft,
    List,
    LogOut
} from "lucide-react"
import { Button } from "../buttons/button"
import IconStyles from "../buttons/IconStyles"
import { useState } from "react"
import { motion } from "framer-motion"
import DialogRevenue from "../dialog/dialogRevenue"
import { ToolTip } from "../tooltips/tooltip"
import Logout from "../dialog/logout"
import VersionApp from "../versionApp/versionApp"


export default function NavBar() {
    const [open, setOpen] = useState(true)
    const sizeIcons: number = 26

    return (
        <div className="w-full overflow-x-hidden bg-gray-800 flex flex-row shadow-lg">
            <motion.div
                animate={{ marginLeft: open ? 68 : 0, marginTop: open ? 80 : 80 }}
                transition={{ duration: 0.5, ease: "backInOut" }}
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
                animate={{ padding: open ? 35 : 0, opacity: open ? 1 : 0 }}
                transition={{ duration: 0.5, ease: "backInOut" }}
                className="bg-gray-800 text-gray-100 overflow-hidden"
            >
                <div className="text-gray-100 flex flex-col items-center">
                    <ul className="flex flex-col gap-8 items-center my-35">
                        <li>
                            <ToolTip nameToolTip="Sair do sistema.">
                                <Logout>
                                    <LogOut size={sizeIcons}/>
                                </Logout>
                            </ToolTip>
                        </li>
                        <li>
                            <ToolTip nameToolTip="Insira a receita atual.">
                                <DialogRevenue />
                            </ToolTip>
                        </li>
                        <li>
                            <ToolTip nameToolTip="Dashboard">
                                <Link to="/home" replace>
                                    <IconStyles>
                                        <HomeIcon size={sizeIcons}/>
                                    </IconStyles>
                                </Link>
                            </ToolTip>
                        </li>
                        <li>
                            <ToolTip nameToolTip="Despesas">
                                <Link to="/expenses" replace>
                                    <IconStyles>
                                        <HandCoins size={sizeIcons}/>
                                    </IconStyles>
                                </Link>
                            </ToolTip>
                        </li>
                        <li>
                            <ToolTip nameToolTip="Categorias">
                                <Link to="/category" replace>
                                    <IconStyles>
                                        <List size={sizeIcons}/>
                                    </IconStyles>
                                </Link>
                            </ToolTip>
                        </li>
                    </ul>
                    <div className="pt-55">
                        <VersionApp />
                    </div>
                </div>
            </motion.div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}