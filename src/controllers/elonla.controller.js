import fs from 'fs';
import path from 'path';
import { read, write } from "../utils/model.js";
import moment from 'moment';



const POST = (req, res) => {
    try {
        let elonla = read('elonla');
        let { tadbir_turi, ism, sanasi, vaqti, profissiya, telefon_raqami, Description, Mavzu_matni, tasdiqlash } = req.body
        let { img } = req.files

        let imgName = Date.now() + img.name.replace(/\s/g, '')
        img.mv(path.resolve('uploads', imgName))

        let newElon = {
            elonId: elonla.at(-1)?.elonId + 1 || 1,
            tadbir_turi,
            sanasi, vaqti,
            ism,
            profissiya,
            telefon_raqami,
            Description,
            Mavzu_matni,
            img: imgName,
            size: img.size,
            tasdiqlash:'tasdiqlanmagan',
            created_at: Date.now(),
        }
        // console.log(newElon);


        elonla.push(newElon)
        write('elonla', elonla)

        res.status(201).json({
            status: 201,
            message: 'ok',
            data: newElon
        })


    } catch (error) {
        console.log(error.message);

    }
}


const GET = (req, res, next) => {
    try {
        let elonla = read('elonla')



        let { profissiya, ism, tadbir_turi,
            page = process.DEFAULT.pagination.page,
            limit = process.DEFAULT.pagination.limit,
        } = req.query

        let data = elonla.filter(elon => {
            let tas = elon.tasdiqlash == 'tasdiqlangan'
            let voxt = elon.created_at = moment(elon.created_at).format('LLLL')


            // qidiruvla///profissiya,ism,tadbir_turi wulada qidiruv iwleydi  ------------
            let profissiyaa = profissiya ? elon.profissiya == profissiya : true
            let ismla = ism ? elon.ism == ism : true
            let tadbir_turila = tadbir_turi ? elon.tadbir_turi == tadbir_turi : true



            return tas && voxt && profissiyaa && ismla && tadbir_turila
        }).slice((page-1)*limit,page*limit)
        // pagination 5 tadan ciqaradi qilingani 
        // pagination olib tawlansa hammasi yoki page=2  qolgani ciqadi

            res.send(data)

    } catch (error) {
        console.log(error.message);
    }
}



export default {
    POST,
    GET

}