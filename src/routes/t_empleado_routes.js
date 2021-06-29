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

	const sql = 'SELECT * FROM t_empleado WHERE ID_empleado = ?';

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
		'INSERT INTO t_empleado(nombre_empleado, apellido_empleado, mail_empleado, password_empleado) VALUES(?, ?, ?, ?)';

	const nombre_empleado = req.body.nombre_empleado;
	const apellido_empleado = req.body.apellido_empleado;
	const mail_empleado = req.body.mail_empleado;
	const password_empleado = req.body.password_empleado;

	connection.query(
		sql,
		[nombre_empleado, apellido_empleado, mail_empleado, password_empleado],
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
		'UPDATE t_empleado SET nombre_empleado=?, apellido_empleado=?, mail_empleado=?, password_empleado=? WHERE ID_empleado=?';

	const nombre_empleado = req.body.nombre_empleado;
	const apellido_empleado = req.body.apellido_empleado;
	const mail_empleado = req.body.mail_empleado;
	const password_empleado = req.body.password_empleado;
	const ID_empleado = req.params.id;

	connection.query(
		sql,
		[
			nombre_empleado,
			apellido_empleado,
			mail_empleado,
			password_empleado,
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

	const sql = 'DELETE FROM t_empleado WHERE ID_empleado=?';

	connection.query(sql, [ID_empleado], (err, result) => {
		if (err) {
			res.send('error al obtener los datos');
		} else {
			res.send('Usuario borrado');
		}
	});
});

module.exports = router;
