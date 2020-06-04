const express = require('express');

const LawyerController = require('./Controllers/LawyerController');
const ClientController = require('./Controllers/ClientController');
const LawyerSessionController = require('./Controllers/LawyerSessionController');
const ClientSessionController = require('./Controllers/ClientSessionController');
const ProcessController = require('./Controllers/ProcessController');
const ProgressController = require('./Controllers/ProgressController');

const routes = express.Router();

routes.post('/lawyer/register', LawyerController.create);

routes.post('/client/register', ClientController.create);

routes.post('/lawyer/login', LawyerSessionController.create);

routes.post('/client/login', ClientSessionController.create);

routes.post('/lawyer/newprocess', ProcessController.create);
routes.get('/lawyer/processes', ProcessController.lawyerlist);
routes.get('/client/processes', ProcessController.clientlist);
routes.get('/:processId', ProcessController.listprocess);
routes.delete('/:processId', ProcessController.deleteprocess);

routes.post('/:processId', ProgressController.create);



module.exports = routes;