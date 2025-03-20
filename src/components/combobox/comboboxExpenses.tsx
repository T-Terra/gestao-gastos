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
   
const frameworks = [
    {
        value: "next.js",
        label: "Next.js",
    },
    {
        value: "sveltekit",
        label: "SvelteKit",
    },
    {
        value: "nuxt.js",
        label: "Nuxt.js",
    },
    {
        value: "remix",
        label: "Remix",
    },
    {
        value: "astro",
        label: "Astro",
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
                        className="w-[180px] justify-between bg-gray-800 text-gray-100 hover:bg-gray-200"
                    >
                        {value
                            ? frameworks.find((framework) => framework.value === value)?.label
                            : "Categoria..."}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] bg-gray-800">
                    <Command>
                        <CommandInput placeholder="Cartão" />
                        <CommandList>
                            <CommandEmpty>Categoria não encontrada</CommandEmpty>
                            <CommandGroup>
                                {frameworks.map((framework) => (
                                    <CommandItem
                                        key={framework.value}
                                        value={framework.value}
                                        onSelect={(currentValue) => {
                                            setValue(currentValue === value ? "" : currentValue)
                                            setOpen(false)
                                        }}
                                    >
                                        <Check
                                            className={cn(
                                            "mr-2 h-4 w-4",
                                            value === framework.value ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                        {framework.label}
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