/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const movies = require("./movies");
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, throw an error with a message.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]|Error} An array of strings, which are movie titles.
 *
 * NOTE: You must use the `.map()` method.
 * 
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
function getAllMovieTitles(movies) {
let result = []; // create an empty array/object to push movie titles to.
if (movies.length === 0) { //create a condition that allows for error to be thrown.
  throw "There are no movies."
}

const movieTitles = movies.map((movie) => {
  result.push(movie.title);
 //write the map function to iterate over the movies array  and the push movie title to result
  
})

return result; //return the empty array
}

/**
 * checkIfAnyMovieHasRating()
 * -----------------------------
 * Returns a boolean, representing whether or not any of the movies has been given the provided rating. If the inputted `movies` array is empty, throw an error with a message.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} [rating="G"] - A movie rating. Defaults to "G".
 * @returns {boolean|Error} Returns `true` if a movie exists in the list with the given rating, otherwise returns `false`.
 *
 * NOTE: You must use the `.some()` method.
 *
 * EXAMPLE:
 *  checkIfAnyMovieHasRating(movies, "G");
 *  //> true
 *
 * EXAMPLE:
 *  checkIfAnyMovieHasRating(movies, "R");
 *  //> false
 */
function checkIfAnyMovieHasRating(movies, rating) {
  if (movies.length === 0) { //create a condition that calls for an error.
    throw "There are no movies.";
  }
  const movieRatings = movies.some((movie) => {//use the some method to iterate over the movies array and find ratings.
    if (!movie.rating ) {//write a condition that says if the rating does not exist the default rating is "G".
     return movie.rating = "G"
    }if (!movie.rating !== rating) {//write conditional that say if movie,rating matches raitng parameter return true or false if otherwise.
      return false;
    }else {
      return true;
    }

  })
  return movieRatings;//return the variable that contains the process of code
}

/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty, throw an error with a message. If the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|Error|null} The movie object with the matching `imdbID`.
 *
 * NOTE: You must use the `.find()` method.
 * 
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
function findById(movies, id) {

  
  if (movies.length === 0) {
    throw "There are no movies.";
  }
  const movieFinder = movies.find((movie) => {
    if (movie.imdbID === id) {// if the 
      return movie;// the movie that matche the id.
    } if (!movie) {// if it's not the movie return null, however this is not passing the test.
      return null;
    }
      
    
  })
  return movieFinder;//returns the movie object.
}

/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty, throw an error with a message. If no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]|Error} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * NOTE: You must use the `.filter()` method.
 * 
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function filterByGenre(movies, genre) {
  let result = [] // create an empty array to hold the right movies required by tests.
  if (movies.length === 0) {//create a conditons that allows for an error to be thrown.
    throw "There are no movies.";
  }
  const movieGenres = movies.filter((movie) => {// a variable that contains the filter process.
    if (movie.genre.toLowerCase().includes(genre.toLowerCase())) {//for case insensitivty .toLowerCase to remove chances of missing a movie that fits the criteria also to limit errors.
       result.push(movie);
     
    }
  })
  
  return result;//return array

}

/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year. If the movie array is empty, throw an error with a message.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]|Error} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * NOTE: You must use the `.filter()` method.
 * 
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function getAllMoviesReleasedAtOrBeforeYear(movies, year) {
  let result = [];//create an empty that the movies will be pushed to.
  if (movies.length === 0) {
    throw "There are no movies."
  }
  return movies.filter((movie) => {//write proces of filter.
    if (Number(movie.released.slice(-4)) <= year) {//change released year ot a number(Number()) and use slice to isolate the year of the release from released property string.
     return result.push(movie)
     
    }
  })
}

/**
 * checkMinMetascores()
 * -----------------------------
 * Returns either true or false depending whether all movies have a minimum metascore. If the movie array is empty, throw an error with a message.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} metascore - A minimum metascore number. (e.g. 80)
 * @returns {Boolean|Error} A boolean
 *
 * NOTE: You must use the .every()` method.
 *
 * EXAMPLE:
 *  checkMinMetascores(movies, 90));
 *  //>  false
 */
function checkMinMetascores(movies, metascore) {
  if (movies.length === 0) {
    throw "There are no movies."
  }
const movieScore = movies.every((movie) => {// write process to iterate over movies array and check every metascorre.
  if (movie.metascore >= metascore) {//write conditional that meets the criteria of test metascore fits within range set by tests.
    return true;
  }else {
    return false;
  }

})
return movieScore;
}

/**
 * getRottenTomatoesScoreByMovie()
 * -----------------------------
 * Transform each movie, returning an array of objects where the key is the title of the movie and the value is the score received from Rotten Tomatoes. If there are no movies, throw an error with a message.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object[]|Error} An array of movie objects where the key is the movie title and the value is the score received from Rotten Tomatoes.
 * 
 * NOTE: You must use both the `.map()` method and the `.find()` method.
 *
 * EXAMPLE:
 *  getRottenTomatoesScoreByMovie(movies);
 *  //> [
      { "Toy Story 4": "97%" },
      { "Inside Out": "98%" },
      { Coco: "97%" },
      { "Incredibles 2": "93%" },
      { Moana: "95%" },
      { "How to Train Your Dragon": "99%" },
      { Paddington: "97%" },
      { "The Lion King": "93%" },
      { Fantasia: "95%" },
      { "James and the Giant Peach": "91%" },
    ];
 */
function getRottenTomatoesScoreByMovie(movies) {
  if (movies.length === 0) {
    throw "There are no movies."
  }
  return movies.map((movie) => {//write process to iterate over movies array using .map. Use .find to look at the ratings array.
    return {[movie.title]: movie.ratings.find((movie => movie.source === "Rotten Tomatoes")).value}

  })//return and create object that only gives movie title and ratings that are desingate to ROtten Tomatoes source with score (value). 
  
}
// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  checkIfAnyMovieHasRating,
  findById,
  filterByGenre,
  checkMinMetascores,
  getAllMoviesReleasedAtOrBeforeYear,
  getRottenTomatoesScoreByMovie,
};
