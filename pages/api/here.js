export default function here(req,res){
  if(req.method === "GET"){
    return res.status(200).json({
        message:"get method received request"
    })

    return res.status(200).json({message:"joshi"})
  }

  if(req.method === "POST"){
    return res.status(200).json({
        message:"Post request received"
    })
  }

   if(req.method === "PUT"){
    return res.status(200).json({
        message:"Put request received"
    })
  }

   if(req.method === "DELETE"){
    return res.status(200).json({
        message:"Delete request received"
    })
  }
}