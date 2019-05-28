const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

const htmlRoutes = require('./app/routing/htmlRoutes');
const apiRoute = require('./app/routing/apiRoute');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('../app/public'))

app.use('/', htmlRoutes);
app.use('/api', apiRoute);

app.listen(PORT, function(){
    console.log('App listening on PORT: ' + PORT)
})