const express = require('express');

const connection = require('../connection');

const router = express.Router();

router.get('/', (req, res) => {
	const sql = 'SELECT * FROM servicios';
	connection.query(sql, (error, result) => {
		if (error) {
			console.log('error al obtener los datos de servicio');
		} else {
			res.json(result);
		}
	});
});

module.exports = router;
