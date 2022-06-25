const usersModel = require("../model/users.model.js")
const kafka = require("../kafka/kafka")
let statusCode = 200

exports.saveUserData = (req, res) => {
    const data = req.body

    usersModel.saveUserData(data, (error, results) => {
        statusCode = 201
        if (error) {
            statusCode = 400
            results = error
        }

        kafka.producer(data)

        return res.status(statusCode).send({
            message: results
        })
    })
}

exports.getAllUsers = (req, res) => {
    usersModel.getAllUsers((error, results) => {

        if (error || results.length === 0) {
            statusCode = 404
            results = error
        }

        return res.status(statusCode).send({
            message: results
        })
    })
}

exports.getByAccountNumber = (req, res) => {

    const data = {
        accountNumber: req.params.id
    }

    usersModel.getByAccountNumber(data, (error, results) => {
        if (error || results.length === 0) {
            statusCode = 404
            results = error
        }

        return res.status(statusCode).send({
            message: results
        })
    })

}

exports.getByidentityNumber = (req, res) => {

    const data = {
        identityNumber: req.params.id
    }

    usersModel.getByidentityNumber(data, (error, results) => {
        if (error || results.length === 0) {
            statusCode = 404
            results = error
        }

        return res.status(statusCode).send({
            message: results
        })
    })

}

exports.updateUserData = (req,res) => {
    const id = req.params.id
    const data = req.body
    statusCode = 201

    usersModel.updateUserData(id,data,(error,results) => {
        if (error){
            if(error === "not_found"){
                statusCode = 404
                results = error
            }

            statusCode = 400
            results = error
        }

        return res.status(statusCode).send({
            message: results
        })
    })
}

exports.deleteUserData = (req,res) => {
    const id = req.params.id
    const data = req.body

    usersModel.deleteUserData(id,data,(error,results) => {
        if (error){
            if(error === "not_found"){
                statusCode = 404
                results = error
            }

            statusCode = 400
            results = error
        }

        return res.status(statusCode).send({
            message: results
        })
    })
}