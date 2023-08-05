const {
  createUser,
  getUser,
  getUsers,
  updateUser,
} = require('../services/user.service')

exports.createUserHandler = async (req, res) => {
  try {
    const createdUser = await createUser({
      name: req.body.name,
      sector: req.body.sector,
      isAgreedToTerms: req.body.isAgreedToTerms,
    })

    res
      .status(201)
      .json({ data: createdUser, message: 'successfully created user' })
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

exports.getUserHandler = async (req, res) => {
  try {
    const user = await getUser(req.params.id)

    if (user === null)
      return res.status(400).json({ message: 'Cannot find user' })

    res.status(200).json({ data: user })
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

exports.getUsersHandler = async (req, res) => {
  try {
    const users = await getUsers()

    res.status(200).json({ data: users })
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

exports.updateUserHandler = async (req, res) => {
  try {
    await updateUser({
      id: req.params.id,
      name: req.body.name,
      sector: req.body.sector,
      isAgreedToTerms: req.body.isAgreedToTerms,
    })

    res.status(200).json({ message: 'successfully updated user' })
  } catch (error) {
    res.json({ message: error })
  }
}
