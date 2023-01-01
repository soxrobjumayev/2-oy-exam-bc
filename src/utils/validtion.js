import Joi from 'joi'


export const loginvalidatsiya = Joi.object({
    ism:Joi.string().min(3).required(),
    tadbir_turi:Joi.string().min(4).required(),
    profissiya:Joi.string().min(2).required(),
    Description:Joi.string().min(4).required(),
    Mavzu_matni:Joi.string().min(10).required(),
    sanasi:Joi.string().min(5).required(),
    vaqti:Joi.string().min(2).required(),
    tasdiqlash:Joi.string().min(1).required(),





    telefon_raqami:Joi.string().pattern(new RegExp(/^9989[012345789][0-9]{7}$/)),
    img:Joi.string().pattern(new RegExp(/\.(jpg|png|bmp)&/i))

})




