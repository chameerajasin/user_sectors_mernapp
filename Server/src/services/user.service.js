const User = require('../models/user.model')

exports.createUser = async ({ name, sector, isAgreedToTerms }) => {
  try {
    const newUser = new User({
      name: name,
      sector: sector,
      isAgreedToTerms: isAgreedToTerms,
    })
    return await newUser.save()
  } catch (error) {
    throw new Error(error)
  }
}

exports.getUser = async (id) => {
  try {
    return await User.findById(id)
  } catch (error) {
    throw new Error(error)
  }
}

exports.getUsers = async () => {
  try {
    return await User.find()
  } catch (error) {
    throw new Error(error)
  }
}

exports.updateUser = async ({ id, name, sector, isAgreedToTerms }) => {
  try {
    await User.updateOne(
      { _id: id },
      {
        $set: {
          name: name,
          sector: sector,
          isAgreedToTerms: isAgreedToTerms,
        },
      }
    )
  } catch (error) {
    throw new Error(error)
  }
}
