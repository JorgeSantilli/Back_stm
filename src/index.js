const express = require('express');
const cors = require('cors');
const connection = require('./connection');
const session = require('express-session');

//Rutas
const servicios_routes = require('./routes/servicios_routes');
const empleados_routes = require('./routes/empleados_routes');
const authRoutes = require('./routes/auth_routes');
const app = express();
app.use(express.static('public'));
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

app.use(
	session({
		secret: '&plm*okn@ijb',
		resave: false,
		saveUninitialized: true,
	})
);

app.use(express.json());
app.use(express.static('public'));
app.use('/servicios', servicios_routes);
app.use('/empleados', empleados_routes);
app.use('/auth', authRoutes);

app.listen(8000, () => {
	console.log('escuchando en el puerto 8000');
});
