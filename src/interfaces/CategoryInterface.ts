export interface CategoryInterface {
    categoryName: string
    description: string
}

export interface SetStateInterface {
    setState: (dataArr: CategoryInterface[]) => void
}