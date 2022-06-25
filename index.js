const express = require("express")
const bodyParser = require("body-parser");
const usersRoute = require("./route/users.route.js")
const tokenRoute = require("./route/token.route.js")
const jwt = require("jsonwebtoken")
const TOKEN = "oTmO4MjuAyePpziijS7L"

const app = express();

function auth(req, res, next) {
    const authHeader = req.header('Authorization');
    const token = authHeader && authHeader.split(' ')[1];
    //console.log(authHeader);
    if (token === null){
        return res.status(401).send({
            success:0,
            data:"Token required"
        })
    }

    jwt.verify(token,TOKEN, (error,user) => {
        if (error){
            return res.status(403).send({
                message:"Token invalid"
            })
        }

        //req.user = user
        next()
    })
}

app.use(bodyParser.json())
app.use("/users",auth, usersRoute);
app.use("/token", tokenRoute);


app.listen(3000,() => {
    console.log("I am ready to listen you")
})
