import express from 'express';
import MovieController from './controller/movie-controller.js';
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/', (request, response) => {
  return response.json({ ok: true });
});

app.get('/movies/:id', (req, res) => MovieController.getMovieById(req, res));

app.listen(PORT, console.log(`server listening on ${PORT}`));
