const isLoggedIn = true;

module.exports = async (req, res, next)=>{
	if(isLoggedIn){
		next();
	} else{
		res.status(401).json({message: 'Auth Failed'});
	}

}


// 	try{
// 	const token = req.headers.authorization.split(' ')[1];
// 	const decodedToken = jwt.verify(token, process.env.JWT_KEY);
// 	req.userData = { email: decodedToken.email, userId: decodedToken.userId};
// 	next();
//
// }catch(e){
// 	res.status(401).json({message: 'Auth Failed'});
//
// }

