
import { loginvalidatsiya } from "../utils/validtion.js";


export default (req,res,next) =>{
    try {
        if(req.url == '/elonla' && req.method == 'POST'){
           let {error} = loginvalidatsiya.validate(req.body)
           if(error) throw error
        }

        // if(req.url == '/register' && req.method == 'POST'){
        //     let {error} = reagistorVa.validate(req.body)
        //     if(error) throw error
        //  }

        return next( )
    } catch (error) {
        res.status(400).json({status:400,message:error.message})
    }
}





