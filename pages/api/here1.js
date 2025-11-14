export default function here1(req,res){
    if(req.method ==="GET"){
        if(req.query.action === "get0"){
            return res.status(200).json({
        message:"get0 method received request"
    })
        }
        if(req.query.action === "get1"){
            return res.status(200).json({
        message:"get1 method received request"
    })
        }
        if(req.query.action === "get2"){
            
return res.status(200).json({
        message:"get2 method received request"
    })        }
        if(req.query.action === "get3"){
            return res.status(200).json({
        message:"get3 method received request"
    })
        }
        if(req.query.action === "get4"){
            return res.status(200).json({
        message:"get4 method received request"
    })
        }
    }

    if(req.method ==="POST"){
        if(req.query.action === "post0"){
            return res.status(200).json({
        message:"post0 method received request"
    })
        }
        if(req.query.action === "post1"){
            return res.status(200).json({
        message:"post1 method received request"
    })
        }
        if(req.query.action === "post2"){
            
return res.status(200).json({
        message:"post2 method received request"
    })        }
        if(req.query.action === "post3"){
            return res.status(200).json({
        message:"post3 method received request"
    })
        }
        if(req.query.action === "post4"){
            return res.status(200).json({
        message:"post4 method received request"
    })
        }
    }
}