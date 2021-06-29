const express = require('express');
const router = express.Router();
const connection = require('../connection');

// Iniciar Sesion
router.post('/', (req, res) => {
	console.log(req.body);

	const sql =
		'SELECT * FROM t_empleado WHERE mail_empleado = ? AND password_empleado = ?';
	connection.query(sql, [req.body.email, req.body.password], (err, result) => {
		if (err) {
			console.log('Error al verificar el usuario');
		} else {
			if (result.length === 1) {
				console.log(result);
				const usuarioLogueado = `${result[0].nombre_empleado} ${result[0].apellido_empleado}`;
				req.session.user = {
					Usuario: usuarioLogueado,
				};
				console.log(req.session.user);
				res
					.status(200)
					.json({ message: 'Usuario Valido', data: usuarioLogueado });
			} else {
				res.status(401).json({ message: 'Email y/o usuario no valido' });
			}
		}
	});
});

// Cerrar Sesion
router.delete('/', (req, res) => {
	req.session.destroy((err) => {
		if (err) {
			res.status(500).json({ message: 'Error al cerrrar la Sesion' });
		} else {
			res.json({ message: 'La sesion se cerro' });
		}
	});
});

module.exports = router;
