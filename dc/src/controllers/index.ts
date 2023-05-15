import { RequestHandler } from "express";

const welcome: RequestHandler = (req, res) => res.json({ sms: 'Hello form TS server...' })

export default welcome;