type Props = {
    children: React.ReactNode
    style: string
    type: "submit" | "reset" | "button" | undefined
    onClick?: () => void | undefined
}


export function Button({ style, children, type, onClick }: Props) {
    return (
        <button 
            type={type}
            className={style}
            onClick={onClick}
        >
            {children}
        </button>
    )
}