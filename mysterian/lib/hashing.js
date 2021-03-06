const bcrypt = require('bcryptjs');

exports.encryptPassword = async(password) => {
    const salt = await bcrypt.genSalt(10);
    const encryptedPass = await bcrypt.hash(password, salt);
    return encryptedPass;
}

exports.matchPassword = async(password, savedPassword) => {
    try {
        console.log(await bcrypt.compareSync(password, savedPassword));
        return await bcrypt.compareSync(password, savedPassword);
    } catch (e) {
        console.log(e);
    }
}