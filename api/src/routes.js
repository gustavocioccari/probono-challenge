const express = require('express');

const LawyerController = require('./Controllers/LawyerController');
const ClientController = require('./Controllers/ClientController');
const LawyerSessionController = require('./Controllers/LawyerSessionController');
const ClientSessionController = require('./Controllers/ClientSessionController');
const ProcessController = require('./Controllers/ProcessController');
const ProgressController = require('./Controllers/ProgressController');
const TranslationController = require('./Controllers/TranslationController');

const routes = express.Router();

routes.post('/lawyer/register', LawyerController.create);
routes.delete('/lawyer/:lawyerId', LawyerController.delete);

routes.post('/client/register', ClientController.create);
routes.delete('/client/:clientId', ClientController.delete);

routes.post('/lawyer/login', LawyerSessionController.create);

routes.post('/client/login', ClientSessionController.create);

routes.post('/lawyer/newprocess', ProcessController.create);
routes.get('/lawyer/processes', ProcessController.lawyerlist);
routes.get('/client/processes', ProcessController.clientlist);
routes.get('/process/:processId', ProcessController.listprocess);
routes.delete('/process/:processId', ProcessController.deleteprocess);

routes.post('/newprogress/:processId', ProgressController.create);

routes.post('/translation', TranslationController.create);



module.exports = routes;