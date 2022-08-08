import { db } from "../../../libs/db"
export default async function handler(req, res) {
    const { id } = req.query
    const data = await db.getProduct(id)
    res.status(200).json(data)
  }