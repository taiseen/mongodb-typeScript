import { getAllBook, createBook, getBooksByGenre, getBooksByGenreAndPublished, getAllFeaturedBooks, getStringToIntFrom } from './Controller';
import welcome from '../../utils/welcome';
import express from 'express';


const route = express.Router();


// ⬜ Read / GET
route.get('/', welcome);
route.get('/all-books', getAllBook);
route.get('/byGenre', getBooksByGenre);
route.get('/byGenre&Published', getBooksByGenreAndPublished);
route.get('/featured-books', getAllFeaturedBooks);
route.get('/string-to-int', getStringToIntFrom);


// ✅ Create / POST
route.post('/', createBook);


export default route;