import { createContext, useContext, useState } from "react"
import { CategoryInterface } from "@/interfaces/CategoryInterface"
import { CategoryContextType } from "@/interfaces/contextsInterface";


const CategoryContext = createContext<CategoryContextType>({
    categories: [],
    setCategories: () => {}
})

export const CategoryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [categories, setCategories] = useState<CategoryInterface[] | []>([])

    return (
        <CategoryContext.Provider value={{ categories, setCategories }}>
            {children}
        </CategoryContext.Provider>
    )
}

export const useCategory = (): CategoryContextType => useContext(CategoryContext)