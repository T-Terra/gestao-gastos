type Props = {
    children: React.ReactNode
    style: string
}


export function Button({ style, children }: Props) {
    return (
        <button 
            type="submit" 
            className={style}
        >
            {children}
        </button>
    )
}