import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
  } from "@/components/ui/command"
import {
Popover,
PopoverContent,
PopoverTrigger,
} from "@/components/ui/popover"
import { CategoryInterface } from "@/interfaces/CategoryInterface"
import { cn } from "@/lib/utils"
import { ChevronsUpDown, Check } from 'lucide-react'
import { Button } from "../ui/button"
import { useEffect, useState } from "react"
import axios from "axios"


export default function ComboBoxExpenses({setState, editCategory}) {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")
    const [categories, setCategory] = useState<CategoryInterface[]>([])
    const apiUrl: string = import.meta.env.VITE_API_URL

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(`${apiUrl}/category`, {withCredentials: true})
            const categoryObjs: CategoryInterface[] = response.data
            setCategory(categoryObjs)
        };

        getData()
        checkCategoryDad()
   }, [])

   const checkCategoryDad = () => {
        if(editCategory !== "" || editCategory !== null) {
            setValue(editCategory)
        }
    }

    return (
        <div>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-[180px] justify-between bg-gray-900 text-gray-100 hover:bg-gray-200"
                    >
                        {
                            value
                            ? categories.find((category) => category['nameCategory'] === value)?.nameCategory
                            : "Categoria..." 
                        }
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] bg-gray-900 border-1 border-gray-700">
                    <Command className="bg-gray-900 text-gray-100">
                        <CommandInput placeholder="Internet" />
                        <CommandList>
                            <CommandEmpty>Categoria não encontrada</CommandEmpty>
                            <CommandGroup className="text-gray-100">
                                {categories.map((category, indexId) => (
                                    <CommandItem
                                        key={indexId}
                                        value={category['nameCategory']}
                                        onSelect={(currentValue) => {
                                            setValue(currentValue === value ? "" : currentValue)
                                            setState(categories.find((category) => category['nameCategory'] === currentValue))
                                            setOpen(false)
                                        }}
                                    >
                                        <Check
                                            className={cn(
                                            "mr-2 h-4 w-4",
                                            "text-gray-100",
                                            value === category['nameCategory'] ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                        {category['nameCategory']}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    )
}