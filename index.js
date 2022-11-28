/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
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
// creates a conditional statment that finds the number of elements in movies.length. The conditional asks, if this element is not found, throw an error message. Once that is done, create and return a new array using map which will call all the element in the array but will only return the movie title as a new array
function getAllMovieTitles(movies) {
  if (!movies.length) {
    throw 'There are no movies'
  }
  return movies.map((movie) => movie.title);

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
// creates a conditional statment that finds the number of elements in movies.length. The conditional asks, if this element is not found, throw an error message. Once that is done return true if at least one element in the movies ratings array passes the condition 
function checkIfAnyMovieHasRating(movies, rating = "G") {
  if(!movies.length) {
    throw "No rating listed"
  }
  return movies.some((movie => (movie.rated === rating)))
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
//creates a conditional statment that finds the number of elements in movies.length. The conditional asks, if this element is not found, throw an error message. Once that is done, use the find method and return the value of the first element in the movie.imdbID that paases the test. If that does not exist return null
function findById(movies, id) {
  if (!movies.length) {
    throw "No Movies"
  }
  return movies.find(movie => (movie.imdbID === id)) || null
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
    // creates a conditional statment that finds the number of elements in movies.length. The conditional asks, if this element is not found, throw an error message. Once that is done, use the filter method to loop through the array this will return the newly created array with only the elements that pass the condition inside the function. Movie, genre is case sensitive so lowercase the string movie.genre. (Not sure how to use helper functions so I went back to what we've done previously.)
    function filterByGenre(movies, genre) {
  if (!movies.length){
    throw "No movie genre found"
  }
  return movies.filter(movie => movie.genre.toLowerCase().split(", ").includes(genre.toLowerCase()))
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
// creates a conditional statment that finds the number of elements in movies.length. The conditional asks, if this element is not found, throw an error message. Once that is done, use the filter method to loop through the array this will return the newly created array with only the elements that pass the condition inside the function. We need to access the last element in the movie.released array so use the slice method to access this element. Then determine it is greater than or equal to the year
function getAllMoviesReleasedAtOrBeforeYear(movies, year) {
  if (!movies.length){
    throw "No release date"
  }
  return movies.filter(movie => ((movie.released.slice(-4)) <= year))
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
// creates a conditional statment that finds the number of elements in movies.length. The conditional asks, if this element is not found, throw an error message. Once that is done, use the every method to loop through the array and check and returns every (all) element in the array that passes the condition, if true, return true; if false, return false 
function checkMinMetascores(movies, metascore) {
  if (! movies.length){
    throw "No Metascore"
  }
  return movies.every(movie => movie.metascore >= metascore)
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
//creates a conditional statment that finds the number of elements in movies.length. The conditional asks, if this element is not found, throw an error message. Once that is done, use the map method to loop through the array i will return a new array using map which will call all the element in the array create a key value pair of the movie title and movie rating, the use find to access the first instance where there is a value of title and rating. Loop through the object ratingObj  use find to loop into the ratingObj because ratings is an object in an array of objects and return it as a new array 
function getRottenTomatoesScoreByMovie(movies) {
  if (!movies.length){
    throw "No Rotten Tomato Score Provided"
  }
  return movies.map((movie) => { return {[movie.title]: movie.ratings.find(ratingObj => ratingObj.source === "Rotten Tomatoes").value}})
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
