import { Request, Response } from "express";

const welcomeInfo = (req: Request, res: Response) => {
    // <a href='${userApiUrl}'>${userApiUrl}</a>
    const style = `style="color:tomato; text-align:center; font-size:80px; font-family:arial;"`;
    const data = `
    <div>
        <h1 ${style}>TypeScript Server!</h1>
        <p>${req.app.locals.userApiUrl}</p>
    </div>`;
    res.send(data);
};

export default welcomeInfo;