import express from 'express'
import { PORT } from './config.js'
import fileUpload from 'express-fileupload'

import elonlaRouter from './routers/elonla.js'
import admin from './routers/admin.js'
import swaggerRR from './swagger.js'

const app = express()
app.use(fileUpload())
app.use(express.json())
app.use('/api-docs',swaggerRR)
app.use(elonlaRouter)
app.use(admin)




app.listen(PORT, () => console.log('server aktiv'))