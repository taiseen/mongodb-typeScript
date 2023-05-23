import { IBook, IFeaturedBookModel } from "./Interface";
import { Schema, model } from "mongoose";


const BookSchema = new Schema<IBook, IFeaturedBookModel>({
    title: { type: String, required: true, unique: true },
    author: { type: [String], required: true },
    genre: { type: String, required: true },
    publicationYear: { type: Number, required: true },

    publisher: {
        name: { type: String, required: true },
        location: { type: String, required: true }
    },

    reviews: {
        type: [
            {
                user: { type: String, required: true },
                comment: { type: String, required: true }
            }
        ]
    },

    rating: { type: Number, required: true },
    price: { type: Number, required: true },

    featured: { type: String },
});


// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩


// static method() to retrieve featured books...
BookSchema.static('getFeaturedBooks', async function getFeaturedBooks() {

    const featuredBooks = await BookModel.find({ rating: { $gte: 4 } });

    // Add a new field named "featured" to the featured book objects
    featuredBooks.forEach(book => {

        if (book.rating >= 4) {
            book.featured = "Popular"
        }

        if (book.rating >= 4.5) {
            book.featured = "BestSeller"
        }

    });

    return featuredBooks;
});


// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩


const BookModel = model<IBook, IFeaturedBookModel>('Book', BookSchema);

export default BookModel;