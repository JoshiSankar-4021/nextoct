import { pool } from "@/lib/db";

export default async function handler(req, res) {
    if (req.method === "POST") {
    const { firstname, email, password } = req.body;

    const insertquery = `INSERT INTO "User" (firstname, email, password)
                        VALUES ($1, $2, $3)`;
    const values =[firstname,email,password]
    await pool.query(insertquery,values);

    res.status(200).json({ message: "USER ADDED SUCESS FULLY" });
    }

    if(req.method === "GET"){
        const selectquery = `select * from "User"`;
        const result = await pool.query(selectquery);
        return res.status(200).json({users:result.rows})
    }

    if (req.method === "PUT") {
    const { firstname, email, password ,id} = req.body;
    const updatetquery = `UPDATE "User" SET firstname=$1,email=$2,password=$3 WHERE id=$4`;
    const values =[firstname,email,password,id]
    await pool.query(updatetquery,values);

    res.status(200).json({ message: "USER UPDATED SUCESSFULLY" });
    }

    if(req.method === "DELETE"){
        const {id} =req.query;
        const deletequery = `DELETE FROM "User" WHERE id=$1`;
        const values =[id];
        await pool.query(deletequery,values);
        return res.status(200).json({message:"DELETED USER SUCESSFULLY"})
    }
}
