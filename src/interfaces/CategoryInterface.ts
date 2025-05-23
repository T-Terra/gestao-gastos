export interface CategoryInterface {
    nameCategory: string
    DescriptionCategory: string
}

export interface SetStateInterface {
    setState: React.Dispatch<React.SetStateAction<CategoryInterface[]>>
}

export interface SetStateComboboxInterface {
    setState: React.Dispatch<React.SetStateAction<string>>
}