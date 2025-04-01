export interface CategoryInterface {
    categoryName: string
    description: string
}

export interface SetStateInterface {
    setState: (dataArr: CategoryInterface[]) => void
}

export interface SetStateComboboxInterface {
    setState: (data: string) => void
}