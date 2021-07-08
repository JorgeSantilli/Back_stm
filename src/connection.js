const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'db_stm01',
});

connection.connect((err) => {
	if (err) {
		console.log('error al conectarse a la base de datos');
	} else {
		console.log('conenctado a la Base de Datos');
	}
});

module.exports = connection;
