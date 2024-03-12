export interface ProductType{
    [x: string]: string;
    id?: number;
    name: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: RatingType;
}

export interface RatingType {
    rate :number;
    count: number;
}