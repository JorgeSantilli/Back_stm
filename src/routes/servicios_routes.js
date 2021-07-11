const express = require('express');

const connection = require('../connection');

const router = express.Router();

router.get('/', (req, res) => {
	const sql = 'SELECT * FROM servicios';
	connection.query(sql, (error, result) => {
		if (error) {
			console.log('error al obtener los datos de servicios');
		} else {
			res.json(result);
		}
	});
});

router.get('/:id', (req, res) => {
	const ID_servicios = req.params.id;
	const sql = 'SELECT * FROM servicios WHERE ID_servicios=?';

	connection.query(sql, [ID_servicios], (error, result) => {
		if (error) {
			console.log('error al obtener los datos de servicio');
		} else {
			res.json(result);
			console.log(result[0]);
		}
	});
});

router.post('/', (req, res) => {
	const sql =
		'INSERT INTO servicios(nombreServicio, detalleServicio, CostoPorPersonaServicio ) VALUES(?, ?, ?)';

	const nombreServicio = req.body.nombreServicio;
	const detalleServicio = req.body.detalleServicio;
	const CostoPorPersonaServicio = req.body.precioServicio;

	connection.query(
		sql,
		[nombreServicio, detalleServicio, CostoPorPersonaServicio],
		(err, result) => {
			if (err) {
				res.send('error al obtener los datos');
			} else {
				res.send('Usuario agregado');
			}
		}
	);
});

module.exports = router;
