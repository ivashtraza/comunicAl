export interface Cafee{
businessName: string,
categories: Category[],
logo: any,
nuis: string
}

export interface Category{
    id: number,
    name: string,
    products: Product[]

}

export interface Product{
    name: string,
    unitPrice : number
}