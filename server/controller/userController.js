const User = require('../models/User').User;


const registerUser = async (params) => {
	console.log('register user', params.actionData);
	const userData = params.actionData;
	const user = new User({
		firstName: userData.firstName,
		lastName: userData.lastName,
		email: userData.email,
		password: userData.password
	});
	try {
		const userRecord = await user.save();
		console.log('user saved', userRecord);
		return {
			success: true,
			record: userRecord
		};
	} catch (e) {
		return {
			success: false,
			message: e.message
		};
	}

};


module.exports = {
	registerUser
}


