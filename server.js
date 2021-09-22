const express = require("express");
const cors = require("cors");
const config = require("./app/config");
const setupContactRoutes = require("./app/routes/contact.routes");
const { BadRequestError } = require("./app/helpers/errors");

const app  =express();

app.use(cors({origin: config.app.origins}));

app.use(express.json());

app.use(express.urlencoded({extended: true}));
app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.statusCode || 500).json({
    message: err.message || "Internal Server Error",
    });
    });
app.use((req, res, next) => {
    next(new BadRequestError(404, "Resource not found"));
    });
app.use((err, req, res, next) => {
console.log(err);
res.status(err.statusCode || 500).json({
message: err.message || "Internal Server Error",
});
});
app.get("/",(req, res)=>{
    res.json({message: "Welcom  contact book appliction."});
});
setupContactRoutes(app);
const PORT = config.app.port;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}.`);
});
