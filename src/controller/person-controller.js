import api from "../services/axios.js";

const movies = {  
  'Fantastic Four (2005)': 9738,
  'Fantastic Four: Rise of the Silver Surfer': 1979,
  'Iron Man': 1726,
  'The Incredible Hulk': 1724,
  'Iron Man 2': 10138,
  'Thor': 10195,
  'Captain America: The First Avenger': 1771,
  'The Avengers': 24428,
  'Iron Man 3': 68721,
  'Thor: The Dark World': 76338,
  'Captain America: The Winter Soldier': 100402,
  'Guardians of the Galaxy': 118340,
  'Avengers: Age of Ultron': 99861,
  'Ant-Man': 102899,
  'Fantastic Four (2015)': 166424,
  'Captain America: Civil War': 271110,
  'Doctor Strange': 284052,
  'Guardians of the Galaxy Vol. 2': 283995,
  'Spider-Man: Homecoming': 315635,
  'Thor: Ragnarok': 284053,
  'Black Panther': 284054,
  'Avengers: Infinity War': 299536,
  'Ant-Man and the Wasp': 363088,
  'Captain Marvel': 299537,
  'Avengers: Endgame': 299534,
  'Spider-Man: Far From Home': 429617
}; 

const people = [
  'Robert Downey Jr.',
  'Chris Evans',
  'Mark Ruffalo',
  'Chris Hemsworth',
  'Scarlett Johansson',
  'Jeremy Renner',
  'Don Cheadle',
  'Paul Rudd',
  'Brie Larson',
  'Michael B. Jordan',
  'Karen Gillan',
  'Danai Gurira',
  'Josh Brolin',
  'Gwyneth Paltrow',
  'Bradley Cooper',
  'Tom Holland',
  'Zoe Saldana',
  'Anthony Mackie',
  'Tom Hiddleston',
  'Chris Pratt',
  'Black Panther',
  'Samuel L. Jackson',
  'Dave Bautista'
];

class PersonController {
  async getAllPeople(request, response) {
    const peopleMovies = {};
    people.map(person => {
      peopleMovies[person] = [];
    });
    try {
      const promises = Object.entries(movies).map(async obj => {
        const [movieName, movieId] = obj;
        const { data } = await api.get(`/movie/${movieId}/credits`);
        data.cast.forEach(person => {
          if (!people.includes(person.name)) return;
          peopleMovies[person.name].push({movie: movieName, character: person.character});
        })
      })

      await Promise.all(promises)

      return response.json(peopleMovies)
    } catch (error) {
      console.log(error);
      return response.status(500).json({ok: false, message: 'Error trying to return all people'})
    }
  }

  async getPeopleCharacters(request, response) {
    const peopleMovies = {};
    people.map(person => {
      peopleMovies[person] = new Set();
    });
    try {
      const promises = Object.entries(movies).map(async obj => {
        const [movieName, movieId] = obj;
        const { data } = await api.get(`/movie/${movieId}/credits`);
        data.cast.forEach(person => {
          if (!people.includes(person.name)) return;
          peopleMovies[person.name].add(person.character.replace(' (uncredited)', ''));
        })
      })

      await Promise.all(promises)

      return response.json(Object.entries(peopleMovies).map(person => {
        const [name, charactersSet] = person;
        return {
          name,
          characters: Array.from(charactersSet)
        }
      }).filter(person => person.characters.length >= 2))
    } catch (error) {
      console.log(error);
      return response.status(500).json({ok: false, message: 'Error trying to return all people'})
    }
  }
}

export default new PersonController();