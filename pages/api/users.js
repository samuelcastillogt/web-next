import {db} from "../../libs/db"
export default async function handler(req, res) {
    const data = await db.getUsers()
    res.status(200).json(data)
  }