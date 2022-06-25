const TOKEN = "oTmO4MjuAyePpziijS7L"
const jwt = require("jsonwebtoken")

function generateToken(user) {
    return jwt.sign(user, TOKEN, {expiresIn: '1h'})
}

exports.generateToken = (req, res) => {
    const data = {
        name: "Danar Arga Syailendra"
    }

    return res.status(200).send({
        token: generateToken(data)
    })

}