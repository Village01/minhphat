let express = require('express');
let app = express();
let port = process.env.PORT || 8888;

const swaggerJsDoc=require('swagger-jsdoc');
const swaggerUi=require('swagger-ui-express');

const swaggerOptions={
    swaggerDefinition: {
        info: {
            title: 'My name',
            description: "Hello World",
            version: "1.0.0",
            contact: {
                name: "Hoàng Minh Phát",
                email: "17520876@gm.edu.vn",
            },
            servers: ["village01.herokuapp.com"]
        }
    },
    apis: ["server.js"]
};
const swaggerDocs=swaggerJsDoc(swaggerOptions);
app.use('/apidocs',swaggerUi.serve,swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /:
 *  get:
 *      summary: ...
 *      description: ...
 *      produces:
 *          - application/json
 *      responses:
 *          '200': 
 *              description: ....
 * /phat:
 *  get:
 *      summary: ...
 *      responses: 
 *          '200':
 *              description: ok
 *     
 */

app.get('/',(req, res) => {
    res.send({
        Name: 'Hoang Minh Phat', 
        MSSV: 17520876
    })
})

app.get('/phat', (req, res) =>{
    res.send({
        Form: 'HCMC',
        Age: 21
    })
})

app.listen(port);

console.log('RESTful API server started on: ' + port);
