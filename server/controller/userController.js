const config = require('../config/config');
const jwt = require('jsonwebtoken');
const User = require('../models/User').User;
const findUserConfirmPassword = require('../models/User').findUserConfirmPassword;


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
/**
 * login and get a token
 *
 * @param params
 * @returns {Promise<*>}
 */
const login = async (params)=>{
	const user =  params.actionData;
	try{
		const userRec = await findUserConfirmPassword(user.email,user.password);
		console.log('userRec', userRec);
		var access = 'auth';
		const token = jwt.sign({_id: userRec._id.toHexString(), access},
			config.secret).toString();
		console.log('token', token);
		return {
			success: true,
			user: userRec,
			token: token
		};
	}catch(e){
		console.log('error', e);
		return {
			success: false,
			message: e
		};
	}
}

module.exports = {
	registerUser,
	login
}


