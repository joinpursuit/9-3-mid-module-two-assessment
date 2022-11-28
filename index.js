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
//function getAllMovieTitles() {}
const getAllMovieTitles = (movies)=>{
  if(!movies.length){//if object is empty it will throw an error
    throw 'The movies object is empty'//error message 
  }
  return movies.map((movie) => movie.title)//using the map method to return movie.title in a new arry. 
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
//function checkIfAnyMovieHasRating() {}
const checkIfAnyMovieHasRating = (movies,rating = 'G') =>{
  if(!movies.length){//if object is empty it will throw an error
    throw 'The movies object is empty'//error message
  }
  return movies.some ((movie) => movie.rated === rating)//using some method to check if a specific element is true. in this case we are  checking if movie.rated is equal to rating and if it is not it will output the default value 'G'
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
//function findById() {}
const findById = (movies,id) =>{
  if(!movies.length){//if object is empty it will throw an error
    throw 'The movies object is empty'//error message
  }
  return movies.find((movie) => movie.imdbID === id)|| null
  //using the find method to find the first value in the object that is true by checking if => movie.imdbID === id, if it is not it will return null 
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
//function filterByGenre() {}
const movieGenre = (string) => string[0].toUpperCase() + string.slice(1).toLowerCase()// created a helper function to format genre. Used the array methods toUpperCase method to capitalize the string at index 0,TolowerCase method to lowercase the remianing string from the slice method and slice(1)which will removes string starting from the index

const filterByGenre = (movies,genre) =>{
  if(!movies.length){//if object is empty it will throw an error
    throw 'The movies object is empty'// error message
  }
  return movies.filter((movie) => movie.genre.includes(movieGenre(genre))) || []//using the filter method which is checking if genre is equal to movie.genre. Movie.genre is a string with one or more genre so we use .includes method to find a specific genre amongst the string of movie.genre. if no genre is found it will output an empty oject.   
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
//function getAllMoviesReleasedAtOrBeforeYear() {}
const getAllMoviesReleasedAtOrBeforeYear = (movies,year) => {
  if(!movies.length){//if object is empty it will throw an error
    throw 'The movies object is empty'//error message
  }
  return movies.filter((movie) => movie.released.slice(7) <= year)
  //we use the filter method to find all elements in the object that is less than or equal to year in the movies object. movies.released is a string with the day,month and year. we only want the year so i used .slice method 7 to access only the year 
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
//function checkMinMetascores() {}
const checkMinMetascores = (movies,metascore) => {
  if(!movies.length){//if object is empty it will throw an error
    throw 'The movies object is empty'//error message 
  }
  return movies.every((movie) => +movie.metascore > metascore)
  //using the every method to check every element in the object that return true if movie.metascore is less than metascore. movie.score is a string. Used unary operator to convert a string to a number
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
//function getRottenTomatoesScoreByMovie() {}
const getRottenTomatoesScoreByMovie = (movies)=>{

if(movies.length === 0){//if object is empty it will throw an error
  throw 'this is an empty object'//error message
}
return movies.map((movie =>{
  return {[movie.title]: movie.ratings.find((element => element.source ===  "Rotten Tomatoes")).value}}))//using map method to return a new array of movie.title which is the key and the value is going to be acced by using the find method to find the first instance it meets the condition.the value "Rotten Tomatoes" will found by the accessing the key, source which is equal to rotten tomatoes in the movies object
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

