const extend = Object.assign;

const testController = require('../controller/testController');
const userController = require('../controller/userController');


const checkAuth  = require('../auth/checkAuth');
/**
 * methi
 *
 *
 * @param businessMethod
 * @param message
 * @returns {Function}
 */
const apiHandler =  (businessMethod, message) => {
	return async function  (req, res) {
		try {
			const result = await businessMethod({
				actionData: req.body || {},
				query: extend(extend({
						$method: req.method
					}, req.query || {}),
					req.params || {}),
				user: req.user
			});
			res.status(201).json({
				success: true,
				data: result
			});

		} catch (e) {
			res.status(401).json({message: e.message});
		}
	}

}


module.exports.initRouter = (app) => {
	app.post('/api/register',apiHandler(userController.registerUser));
	app.get('/api/test/:id',apiHandler(testController.getData));
	app.get('/api/test',apiHandler(testController.getData));
	app.get('/api/testSecure', checkAuth,apiHandler(testController.getDataSecure));
	app.post('/api/testpost', checkAuth,apiHandler(testController.getDataPost));

}