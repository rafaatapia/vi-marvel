import 'dotenv/config';
import express from 'express';
import MovieController from './controller/movie-controller.js';
import PersonController from './controller/person-controller.js';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/', (request, response) => {
  return response.json({ ok: true });
});

app.get('/people', (req, res) => PersonController.getAllPeople(req, res));
app.get('/people/characters', (req, res) => PersonController.getPeopleCharacters(req, res));
app.get('/movies/:id', (req, res) => MovieController.getMovieById(req, res));

app.listen(PORT, console.log(`server listening on ${PORT}`));
