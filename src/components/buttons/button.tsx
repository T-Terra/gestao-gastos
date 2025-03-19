type Props = {
    children: React.ReactNode
    style: string
    type: "submit" | "reset" | "button" | undefined
}


export function Button({ style, children, type }: Props) {
    return (
        <button 
            type={type}
            className={style}
        >
            {children}
        </button>
    )
}