import { Router } from 'express';
import PersonController from './controller/person-controller.js';

const routes = new Router();

routes.get('/', (request, response) => {
  return response.json({ ok: true });
});

routes.get('/people', PersonController.getAllPeople);
routes.get('/people/characters', PersonController.getPeopleCharacters);

export default routes;