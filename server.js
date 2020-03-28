let express = require('express');
let app = express();
let port = process.env.PORT || 8888;

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