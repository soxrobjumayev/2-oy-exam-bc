import { read, write } from "../utils/model.js"
import path from 'path';
import jwt from "../utils/jwt.js"



const LOGIN = (req, res, next) => {
    try {
        let admins = read("admins")
        let { username, password } = req.body
        let admin = admins.find(admin => admin.username == username && admin.password == password)
        if (!admin) {
            return next(new Error('xato '))
        }
        res.status(200).json({
            status: 200,
            message: 'ok',
            token: jwt.sign({ userId: admin.userId })

        })

    } catch (error) {
        console.log(error.message);
    }
}



const PUT = (req, res, next) => {
    try {
        let elonla = read('elonla')
        let {elonId}= req.params

        let elon = elonla.find(elon => elon.elonId == elonId )

        if(!elon){
            return next(new Error ('vedio put x'))
        }

        elon.tasdiqlash = req.body.tasdiqlash || elon.tasdiqlash

        write('elonla',elonla)
      
       return res.status(200).json({
            status: 200,
            message: 'ok',
            data: elon 
        })


    } catch (error) {
        console.log(error.message);
    }
}


export default {
    LOGIN,
    PUT

}