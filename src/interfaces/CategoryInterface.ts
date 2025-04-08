export interface CategoryInterface {
    NameCategory: string
    DescriptionCategory: string
}

export interface SetStateInterface {
    setState: (dataArr: CategoryInterface[]) => void
}

export interface SetStateComboboxInterface {
    setState: (data: string) => void
}