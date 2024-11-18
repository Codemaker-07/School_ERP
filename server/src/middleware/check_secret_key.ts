import dot from "dotenv";

dot.config();
const org_key = process.env.secret_key;

export function check_key(req:any,res:any,next : any):any{

    let inputKey = req.params.key;
    console.log(inputKey);
    
    if(!inputKey){
        console.log("give the secret key properly");
        res.status(200).json("give the secret key properly");
    }

    if(req.params.key == org_key){
        next();
    }else{
        console.log("secret key doesn't match")
        res.status(200).json("secret key doesn't match")
    }
}