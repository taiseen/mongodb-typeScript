import { HydratedDocument, Model } from "mongoose";


interface IPublisher {
    name: string;
    location: string;
}


interface IReview {
    user: string;
    comment: string;
}


export interface IBook {
    title: string;
    author: string[];
    genre: string;
    publicationYear: number;
    rating: number;
    price: number;
    publisher: IPublisher;
    reviews: IReview[];
    featured?: string;
}


// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩


// for creating custom [static] method()
export interface IFeaturedBookModel extends Model<IBook> {

    getFeaturedBooks(): Promise<HydratedDocument<IBook>>;

}