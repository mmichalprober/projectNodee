const User = require('../modelles/user')
const jwt = require('jsonwebtoken')

const createUser = async (req, res) => {
    try {
        const user = new User({
            name: req.params.name,
            age: req.params.age,
            city: req.params.city,
            mail: req.params.mail,
            phone: req.params.phone
        })
        console.log(user)
        await user.save()
        res.status(200).json({ messag: "User saved", isIn: false, user: user })
    } catch (error) {
        console.log(error)
        res.status(500).send("error")
    }
}


const getAllUsers = async (req, res) => {
    try {
        const user = await User.find()
        console.log(user)
        res.status(200).json({ user })
    } catch (error) {
        console.log(error)
        res.status(200).send(error)
    }
}


module.exports = { createUser, getAllUsers }

