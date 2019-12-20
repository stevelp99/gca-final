const express = require("express");
const app = express();
const mongoose =require ("./db/mongoose");
const userRoutes =require("./routes/user-routes");
const bodyParser =require('body-parser');
const dash =require("./routes/dash");

app.use(bodyParser.json());


app.use('/user',userRoutes);
app.use('/dash',dash);

const PORT =3000;

app.listen(3000, ()=>{
    console.log(`server started on port ${PORT}`)
});