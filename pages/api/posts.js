import {db} from "../../libs/db"
export default async function handler(req, res) {
    const data = await db.getPosts()
    res.status(200).json(data)
  }