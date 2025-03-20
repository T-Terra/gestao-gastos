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

import { cn } from "@/lib/utils"
import { ChevronsUpDown, Check } from 'lucide-react'
import { Button } from "../ui/button"
import { useState } from "react"
   
const category = [
    {
        value: "Cartão de Crédito",
        label: "Cartão de Crédito",
    },
    {
        value: "Internet",
        label: "Internet",
    },
    {
        value: "Conta de Água",
        label: "Conta de Água",
    },
    {
        value: "Conta de Luz",
        label: "Conta de Luz",
    },
]

export default function ComboBoxExpenses() {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")

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
                            ? category.find((category) => category.value === value)?.label
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
                                        key={category.value}
                                        value={category.value}
                                        onSelect={(currentValue) => {
                                            setValue(currentValue === value ? "" : currentValue)
                                            setOpen(false)
                                        }}
                                    >
                                        <Check
                                            className={cn(
                                            "mr-2 h-4 w-4",
                                            "text-gray-100",
                                            value === category.value ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                        {category.label}
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