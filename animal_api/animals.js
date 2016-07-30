/**
 * The ExpressJS namespace.
 * @external ExpressApplicationObject
 * @see {@link http://expressjs.com/3x/api.html#app}
 */ 

/**
 * Mobile Cloud custom code service entry point.
 * @param {external:ExpressApplicationObject}
 * service 
 */
module.exports = function(service) {


	/**
	 *  The file samples.txt in the archive that this file was packaged with contains some example code.
	 */


service.get('/mobile/custom/Animals/animals/nearby', function(req,res) {
		lat = req.query.lat;
		lon = req.query.lon;
		req.oracleMobile.connectors.AnimalsACCS.get('/nearby?lat=' + lat + '&lon=' + lon).then(
			function (result) {
				res.send(result.statusCode, result.result);
			},
			function (error) {
				res.send(500, error.error);
			}
		);		
	});

	service.get('/mobile/custom/Animals/animals/:id', function(req,res) {
		id = req.params.id;
		req.oracleMobile.connectors.AnimalsACCS.get('/' + id).then(
			function (result) {
				res.send(result.statusCode, result.result);
			},
			function (error) {
				res.send(500, error.error);
			}
		);
	});

	service.get('/mobile/custom/Animals/animals', function(req,res) {
		req.oracleMobile.connectors.AnimalsACCS.get('').then(
			function (result) {
				res.send(result.statusCode, result.result);
			},
			function (error) {
				res.send(500, error.error);
			}
		);		
	});

};
