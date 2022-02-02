# VI Marvel

## Description

Project made in order to pratice some dev skills and complete the assignment for Vi, where the objective
is to consume TheMovieDB API and return some informations about Marvel movies and actors.

The application basically consist in two endpoints:

- /people
- /people/characters

In **/people** endpoint, you can retrieve all movies that each actor played in, based on provided list of actors and movies;
</br>
In **/people/characters** endpoint, you will be able to see the actors that played more than one Marvel character. _( This endpoint can return the same character with two different names. It will depend on TMDB API data. )_

## Setup

### Locally

Installing dependencies

```bash
$ yarn
# or
$ npm i
```

Setup api_key for [TheMovieDB API](https://www.themoviedb.org/documentation/api) in .env file

Running

```bash
$ yarn start
# or
$ npm run start
```

### Docker

Setup api_key for [TheMovieDB API](https://www.themoviedb.org/documentation/api) in .env file

```bash
$ docker build -t vi-marvel .
# or
$ docker run -p 3000:3000 vi-marvel
```
