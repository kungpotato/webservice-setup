const sql = require("msnodesqlv8");
const config = require('../config.js')
const Order = require('../query/orderQuery.js')

module.exports = {
	// async index(req, res){
	// 	await sql.query(config.db.connectionString, Order.query, (err, rows) => {
	// 		res.send(rows)
	// 	})
	// },
	index(req, res){
		new Promise((resolve, reject)=>{
			sql.query(config.db.connectionString, Order.query, (err, rows) => {
				resolve(rows)
			})
		}).then((value)=>{
			res.send(value)
		})
	}
}