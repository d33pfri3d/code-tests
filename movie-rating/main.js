const API_KEY = 'a1440b51083235855ff1792f84e378ef';
const APP = {};

let allGenres = [];
let genreFilters = [];
let currentRating = 0;
// container where we will append filters
const filters = document.getElementById('filters');
const ratingFilter = document.getElementById('rating-range');
const ratingElement = document.getElementById('currentRating');
// container where we will append the movies
const movieContainer = document.getElementById('movies');
const movieListContainer = document.createElement('ul');
movieContainer.appendChild(movieListContainer)

APP.movieApi = 'https://api.themoviedb.org/3/movie/now_playing?page=1&language=en-US&api_key=';
APP.genreApi = 'https://api.themoviedb.org/3/genre/movie/list?api_key=';
APP.imagePath = {
  small: 'https://image.tmdb.org/t/p/w92',
  medium: 'https://image.tmdb.org/t/p/w154'
}

APP.remove = function(array, element){
  var i = array.indexOf(element)
  if(i != -1){
    array.splice(i, 1)
  }
}

APP.filterMovies = function(){ 
  
  document.querySelectorAll('.movie-item').forEach(element => {

    // Hide Everything and get rating
    element.classList.add('hidden-genre');
    let rating = element.getAttribute('data-rating');

    // Hide or Show based on a filter being selected
    if(genreFilters.length > 0){
      // We need to filter through the Genres
      genreFilters.forEach(genre => {
        if( element.classList.contains('genre-'+genre) && rating > currentRating){
          element.classList.remove('hidden-genre')
        }
      });
    } else {
      // Just do the rating
      if (rating > currentRating) element.classList.remove('hidden-genre');
    }

  });

}

// Generate Genres

APP.createGenreList = function(genres){
  genres.forEach(genre => {
    APP.createGenreElement(genre)
  });
}

// Generate Movies
APP.createMovieList = function(movies){
  movies.forEach(movie => {
    APP.createMovieElement(movie);
  })
}

// Movie Element
APP.createMovieElement = function(movie){
  // console.log(movie);

  // Movie Wrapper & list item
  let wrapper = document.createElement('div');
  wrapper.classList.add('movie-card');

  let listItem = document.createElement('li');
  listItem.classList.add('movie-item');
  listItem.setAttribute('data-rating', movie.vote_average)

  let image = document.createElement('img');
  image.setAttribute('src', APP.imagePath.small+movie.poster_path);

  // Movie Metadata
  let metaContainer = document.createElement('div');
  metaContainer.classList.add('movie-meta');

  let title = document.createElement('h2');
  title.innerText = movie.title;

  let ratingLabel = document.createElement('span');
  ratingLabel.innerText = movie.vote_average;

  let genreInfoList = document.createElement('ul');
  
  //
  movie.genre_ids.forEach(genreId => {
    
    let thisGenre = allGenres.find( genre => genre.id === genreId);

    let genreElement = document.createElement('li');
    genreElement.innerText = thisGenre.name;

    genreInfoList.appendChild(genreElement);
    listItem.classList.add('genre-'+thisGenre.id);

  });

  metaContainer.appendChild(title);
  metaContainer.appendChild(genreInfoList);
  metaContainer.appendChild(ratingLabel);

  //
  wrapper.appendChild(image);
  wrapper.appendChild(metaContainer);
  listItem.appendChild(wrapper);
  movieListContainer.appendChild(listItem);

}

// Genre Element
APP.createGenreElement = function(genre){

  // create the checkbox
  let checkboxElement = document.createElement('input');
  checkboxElement.setAttribute('type', 'checkbox');
  checkboxElement.setAttribute('name', genre.name);
  checkboxElement.setAttribute('id', genre.id);

  // create the label
  let genreLabel = document.createElement('label');
  genreLabel.setAttribute('for', genre.id);
  genreLabel.innerText = genre.name;

  //wrap the two elements together
  let genreWrapper = document.createElement('span');
  genreWrapper.appendChild(genreLabel);
  genreWrapper.appendChild(checkboxElement);

  filters.appendChild(genreWrapper);

  // Change Event
  checkboxElement.addEventListener('change', function(event){
    event.target.checked ? genreFilters.push(event.target.id) : APP.remove(genreFilters, event.target.id);
    APP.filterMovies();
  });

}

APP.setCurrentRating = function(){
  ratingElement.innerText = currentRating;
}

ratingFilter.addEventListener('input', function(event){
  currentRating = event.target.value;
  APP.filterMovies();
  APP.setCurrentRating();
});


// Lets Run
APP.setCurrentRating();
// Go get the Genres
APP.fetchGenres = fetch(APP.genreApi+API_KEY)
  .then(function(res){
    return res.json();
  }).then(function(genreObj){
    APP.createGenreList(genreObj.genres);
    allGenres = genreObj.genres;
  })

  APP.fetchMovies = fetch(APP.movieApi+API_KEY)
  .then(function(res){ return res.json() })
  .then(function(movieObj){ APP.createMovieList(movieObj.results) })