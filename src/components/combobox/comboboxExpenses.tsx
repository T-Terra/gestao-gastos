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
import { CategoryInterface, SetStateComboboxInterface } from "@/interfaces/CategoryInterface"
import { cn } from "@/lib/utils"
import { ChevronsUpDown, Check } from 'lucide-react'
import { Button } from "../ui/button"
import { useEffect, useState } from "react"
   

export default function ComboBoxExpenses({ setState }: SetStateComboboxInterface) {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")
    const [category, setCategory] = useState<CategoryInterface[]>([])

    useEffect(() => {
        const getData = (): CategoryInterface[] => {
            const data = localStorage.getItem('category') as string
            return data !== null ? JSON.parse(data) : []
        }

        setCategory(getData())
    }, [])

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
                        {value
                            ? category.find((category) => category.categoryName === value)?.categoryName
                            : "Categoria..."}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] bg-gray-900 border-1 border-gray-700">
                    <Command className="bg-gray-900 text-gray-100">
                        <CommandInput placeholder="Internet" />
                        <CommandList>
                            <CommandEmpty>Categoria não encontrada</CommandEmpty>
                            <CommandGroup className="text-gray-100">
                                {category.map((category) => (
                                    <CommandItem
                                        key={category.categoryName}
                                        value={category.categoryName}
                                        onSelect={(currentValue) => {
                                            setValue(currentValue === value ? "" : currentValue)
                                            setState(currentValue === value ? "" : currentValue)
                                            setOpen(false)
                                        }}
                                    >
                                        <Check
                                            className={cn(
                                            "mr-2 h-4 w-4",
                                            "text-gray-100",
                                            value === category.categoryName ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                        {category.categoryName}
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