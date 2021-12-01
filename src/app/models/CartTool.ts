export interface Cart {
    id: string,
    image?: string,
    headname: string,
    name: string,
    hash: number,
    power: number,
    price: number,
    availability: string,
    date: string,
    algorithm: string,
    size: string,
    weight: string
}
export interface BasketCart {
    id: string,
    position?: number,
    image?: string,
    headname: string,
    name: string,
    amount: number,
    price: number,
    amountPrice: number

}