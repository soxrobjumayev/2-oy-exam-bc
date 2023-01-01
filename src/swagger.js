

import swaggerJSDoc from "swagger-jsdoc";
import SwaggerUi from "swagger-ui-express";
import { Router } from "express";
import { PORT } from './config.js'

const router = Router()

const swaggerDocs = swaggerJSDoc({
    swaggerDefinition: {
        openapi: '3.0.0',
        servers: [
            {
                url: `http://localhost:${PORT}`,
                description: 'elonla basa',
                variables: {
                    port: {
                        enum: [PORT],
                        default: PORT,
                    },
                }

            },
        ],
        info: {
            version: '1.0.0',
            title: 'elonla basa',
            description: 'elonla basa data',
        },

        components: {
            securitySchemes: {
                Bearer: {
                    type: 'apiKey',
                    name: 'token',
                    in: 'header',
                    description: 'access_token'
                }
            }

        }
    },

    apis: [
        `${process.cwd()}/src/swagger/components/*yaml`,
        `${process.cwd()}/src/swagger/docs/*yaml`,

    ]
});


router.use('/', SwaggerUi.serve, SwaggerUi.setup(swaggerDocs))
export default router;
