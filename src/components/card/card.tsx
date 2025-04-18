export default function Card({ label, icon, data, styleIcon }) {
    return (
        <div className="
            lg:w-[350px]
            lg:h-[120px]
            h-[100px] 
            w-[250px] 
            xs:mb-3
            xs:ml-8
            mb-1
            bg-gray-800 
            rounded-4xl 
            shadow-lg 
            flex 
            justify-between 
            items-center">
            <div className="grid gap-1 p-5 text-2xl font-semibold">
                <label className="xs:text-[15px] text-[12px] font-normal">{label}</label>
                <label className="xs:text-[25px] text-[19px]">
                    {data}
                </label>
            </div>
            <div className="px-8">
                <div className={styleIcon}>
                    {icon}
                </div>
            </div>
        </div>
    )
}