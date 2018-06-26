
const registerUser = async (params) => {
	console.log('register user', params.actionData);
	return { success: true};

};


module.exports = {
	registerUser
}


