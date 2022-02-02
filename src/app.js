import 'dotenv/config';
import express from 'express';
import PersonController from './controller/person-controller.js';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }
  
  middlewares() {
    this.server.use(express.json());
  }
  
  routes() {
    this.server.get('/', (request, response) => {
      return response.json({ ok: true });
    });
    
    this.server.get('/people', (req, res) => PersonController.getAllPeople(req, res));
    this.server.get('/people/characters', (req, res) => PersonController.getPeopleCharacters(req, res));
  }
}

export default new App().server;