const cors = require("cors");
const express = require("express");
const session = require("express-session")
const cookieParser = require("cookie-parser");
const path = require("path");
const app = express();


app.use(session({
    secret: 'work hard',
    resave: true,
    saveUninitialized: true
}));

//ROUTES
const usersRoutes = require("./routes/users")
const torneosRoutes = require("./routes/torneos")

//settings
app.set("port", process.env.PORT || 3000)
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");

//middlewares
app.use(cors({
    origin: [
        "http://localhost:4200"
    ], credentials: true
}));
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/users", usersRoutes);
app.use("/api/torneos", torneosRoutes);

//statics
app.use(express.static(path.join(__dirname, "dist")))

//start server
app.listen(app.get("port"), () => {
    console.log("server listo")
})