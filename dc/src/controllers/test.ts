import { RequestHandler } from "express";

export const test: RequestHandler = (req, res) => {

    res.status(200).json({ message: "testing route... 🟢" })
}

// POST method with validation...
export const createTestData: RequestHandler = (req, res) => {

    // if we don't add this statement ==> app.use(express.json());
    // we can not get data from the client ro perform create operation 
    // we get "undefined" from "req.body" if we don't use this ==> app.use(express.json());

    const { name, id }: INameId = req.body;

    res.status(200).json({ name, id });

}