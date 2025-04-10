import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

type props = {
    nameToolTip: string
    children: React.ReactNode
}

export function ToolTip({ nameToolTip, children }: props) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>{children}</TooltipTrigger>
                <TooltipContent>
                    <p className="text-[16px] font-semibold">{nameToolTip}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}