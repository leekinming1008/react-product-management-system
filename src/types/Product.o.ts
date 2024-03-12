export interface ProductObjectType{
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: RatingType,
}

interface RatingType {
    rate: number,
    count: number
}