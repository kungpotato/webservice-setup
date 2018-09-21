const Test = require('./controllers/testCtl.js')

module.exports = (app) => {
	app.get('/', Test.index)

	// app.post('/', function (req, res) {
	//   res.send('Got a POST request')
	// })

	// app.put('/user', function (req, res) {
	//   res.send('Got a PUT request at /user')
	// })

	// app.delete('/user', function (req, res) {
	//   res.send('Got a DELETE request at /user')
	// })	
}
