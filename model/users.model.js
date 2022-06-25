const mongoose = require("../db/db.config.js")
const User = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    accountNumber: {
        type: String,
        required: true,
        unique: true
    },
    emailAddress: {
        type: String,
        required: true,
        unique: true
    },
    identityNumber: {
        type: String,
        required: true,
        unique: true
    }
})
const Users = mongoose.model('Users', User)

exports.saveUserData = async (data, callback) => {
    const user = new Users(data)
    try {
        await user.save()
        return callback(null, "User Added Successfully")
    } catch (error) {
        if (error.code === 11000) {
            const duplicate = errorDuplicateData(error)
            return callback(duplicate.fieldName + " " + duplicate.fieldValue + " has been taken!!")
        }

    }
}

exports.getAllUsers = async (callback) => {

    try {
        const user = await Users.find()
        return callback(null, user)
    } catch (e) {
        return callback(e)
    }
}

exports.getByAccountNumber = (data, callback) => {

    Users.find(data, function (error, result) {
        if (error) {
            return callback(error)
        }
        return callback(null, result)
    })


}

exports.getByidentityNumber = (data, callback) => {

    Users.find(data, function (error, result) {
        if (error) {
            return callback(error)
        }
        return callback(null, result)
    })


}

exports.updateUserData = async (id, data, callback) => {

    const cekId = Users.findById(id)
    if (!cekId) {
        return callback("not_found", "Data not found")
    }

    try {
        await Users.updateOne({
            _id: id
        }, data)
        return callback(null, "Data has been updated")
    } catch (e) {
        if (e.code === 11000) {
            const duplicate = errorDuplicateData(e)
            return callback(duplicate.fieldName + " " + duplicate.fieldValue + " has been taken!!")
        }
    }
}

exports.deleteUserData = async (id, data, callback) => {

    const cekId = Users.findById(id)
    if (!cekId) {
        return callback("not_found", "Data not found")
    }

    try {
        await Users.deleteOne({
            _id: id
        })
        return callback(null, "Data has been deleted")
    } catch (e) {
        return callback(e)
    }
}

function errorDuplicateData(error) {
    let fieldName;
    let fieldValue;
    Object.keys(error.keyValue).forEach(key => {
        fieldName = key
        fieldValue = error.keyValue[key]
    })

    return {
        fieldName: fieldName,
        fieldValue: fieldValue
    }
}