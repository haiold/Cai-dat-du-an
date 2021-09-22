const express = require("express");
const cors = require("cors");
const config = require("./app/config");

const app  =express();

app.use(cors({origin: config.app.origins}));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.get("/",(req, res)=>{
    res.json({message: "Welcom  contact book appliction."});
});

const PORT = config.app.port;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}.`);
});