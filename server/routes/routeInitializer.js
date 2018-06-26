const extend = Object.assign;

const testController = require('../controller/testController');

const checkAuth  = require('../auth/checkAuth');

const apiHandler =  (api, message) => {
	return async function  (req, res) {
		try {
			const result = await api({
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
	app.get('/api/test/:id',apiHandler(testController.getData));
	app.get('/api/test',apiHandler(testController.getData));
	app.get('/api/testSecure', checkAuth,apiHandler(testController.getDataSecure));
	app.post('/api/testpost', checkAuth,apiHandler(testController.getDataPost));



}