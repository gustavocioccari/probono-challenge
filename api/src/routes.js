const express = require('express');

const LawyerController = require('./controllers/LawyerController');
const ClientController = require('./controllers/ClientController');
const LawyerSessionController = require('./controllers/LawyerSessionController');
const ClientSessionController = require('./controllers/ClientSessionController');

const routes = express.Router();

routes.post('/registerlawyer', LawyerController.create);

routes.post('/registerclient', ClientController.create);

routes.post('/lawyerlogin', LawyerSessionController.create);

routes.post('/clientlogin', ClientSessionController.create);

module.exports = routes;