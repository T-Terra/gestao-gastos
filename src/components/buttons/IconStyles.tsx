type props = {
    children: React.ReactNode
}

export default function IconStyles({ children }: props) {
    return (
        <div className="hover:text-indigo-400">
            {children}
        </div>
    )
}