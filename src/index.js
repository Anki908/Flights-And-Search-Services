const express = require("express");
const bodyParser = require("body-parser")
const ApiRoutes = require('./Routes/index')

const setupAndStartServer = async() => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api' , ApiRoutes)

    const PORT = 3000;

    app.listen(PORT , async () => {
        console.log("Hello");
    });
}

setupAndStartServer();