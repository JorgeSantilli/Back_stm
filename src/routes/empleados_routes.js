const express = require('express');

const connection = require('../connection');

const router = express.Router();

// busca todos los usuarios

router.get('/', (req, res) => {
	//res.send("listados de empelados");
	const sql = 'SELECT * FROM t_empleado';

	connection.query(sql, (err, result) => {
		if (err) {
			res.send('error al obtener los datos');
		} else {
			res.json(result);
		}
	});
});

// buscar un solo usuario

router.get('/:id', (req, res) => {
	//res.send("listados de empelados");

	const ID_empleado = req.params.id;

	const sql = 'SELECT * FROM empleados WHERE ID_empleado = ?';

	connection.query(sql, [ID_empleado], (err, result) => {
		if (err) {
			res.send('error al obtener los datos');
		} else {
			res.json(result);
		}
	});
});

// Agrega un usuario

router.post('/', (req, res) => {
	const sql =
		'INSERT INTO empleados(nombreEmpleado, apellidoEmpleado, emailEmpleado, passwordEmpleado) VALUES(?, ?, ?, ?)';

	const nombreEmpleado = req.body.nombreEmpleado;
	const apellidoEmpleado = req.body.apellidoEmpleado;
	const emailEmpleado = req.body.emailEmpleado;
	const passwordEmpleado = req.body.passwordEmpleado;

	connection.query(
		sql,
		[nombreEmpleado, apellidoEmpleado, emailEmpleado, passwordEmpleado],
		(err, result) => {
			if (err) {
				res.send('error al obtener los datos');
			} else {
				res.send('Usuario agregado');
			}
		}
	);
});

//Actualiza un Usuario

router.put('/:id', (req, res) => {
	const sql =
		'UPDATE empleados SET nombreEmpleado=?, apellidoEmpleado=?, mailEmpleado=?, passwordEmpleado=? WHERE ID_empleado=?';

	const nombreEmpleado = req.body.nombreEmpleado;
	const apellidoEmpleado = req.body.apellidoEmpleado;
	const emailEmpleado = req.body.emailEmpleado;
	const passwordEmpleado = req.body.passwordEmpleado;
	const ID_empleado = req.params.id;

	connection.query(
		sql,
		[
			nombreEmpleado,
			apellidoEmpleado,
			emailEmpleado,
			passwordEmpleado,
			ID_empleado,
		],
		(err, result) => {
			if (err) {
				res.send('error al obtener los datos');
			} else {
				res.send('Usuario Modificado');
			}
		}
	);
});

// borra un usuario

router.delete('/:id', (req, res) => {
	//res.send("listados de empelados");

	const ID_empleado = req.params.id;

	const sql = 'DELETE FROM empleados WHERE ID_empleado=?';

	connection.query(sql, [ID_empleado], (err, result) => {
		if (err) {
			res.send('error al obtener los datos');
		} else {
			res.send('Usuario borrado');
		}
	});
});

module.exports = router;
