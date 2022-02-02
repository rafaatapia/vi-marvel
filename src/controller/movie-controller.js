import api from '../services/axios.js';

class MovieController {
  async getMovieById(request, response) {
    try {
      const movieId = request.params.id;
      const res = await api.get(`/movie/${movieId}`);
      return response.json({ ...res.data });
    } catch (error) {
      console.log(error);
      return response.status(500).json({
        ok: false,
        message: 'Erro trying to fetch movie details',
      });
    }
  }
}

export default new MovieController();
