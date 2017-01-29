var allFilms = []
var makeRequest = function(url, callback) {
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.onload = callback;
  request.send();
}

var requestComplete = function() {
  if (this.status != 200) return;
  var film = JSON.parse(this.responseText)
  // console.log(film)
  populateFilmTitle(film);
  populateFilmPoster(film);
  onPosterClick(film);
  selectFilmByYear(film);
}

var selectFilmByYear = function(films) {
  var year = document.querySelector('select');
  var option = document.createElement('option');
  
    option.innerText = films.Year;
    option.value = films.Year;

    allFilms.push(films);
    year.onchange = function() {
      allFilms.forEach(function(film) {
      if (this.value === film.Year) {
        populateFilmTitle(films);
        populateFilmPoster(films);
        onPosterClick(films);

      }
      })
    };
  
  
    // console.log(filmYears)
    // console.log(option)
  year.appendChild(option);
};

var populateFilmTitle = function(film) {
  var div = document.querySelector('div');
  var titles = document.createElement('p');
  titles.innerText = film.Title;
  div.appendChild(titles);
  // console.log(film.Title);
}

var populateFilmPoster = function(film) {
  var div = document.querySelector('div');
  var posters = document.createElement('img');
  posters.src = film.Poster;
 
  div.appendChild(posters);
  // console.log(film.Title);
}

var populateFilmSynopsis = function(film) {
  var synopsisDiv = document.querySelector('div');
  var synopsis = document.createElement('p');
  synopsis.innerText = film.Title + "\n" + "\n" + "Plot: " + film.Plot + "\n" + "\n" + "Genre: " + film.Genre;
  var homeBtn = document.createElement('button')
      homeBtn.innerText = "Home"
      // onHomeClick();
    synopsisDiv.appendChild(synopsis);
    synopsisDiv.appendChild(homeBtn);
}



var onPosterClick = function(film) {
    var synopsis = document.querySelector('div')
    var posters = document.querySelectorAll('img');
    posters.forEach(function(poster) {
      if (poster.src === film.Poster) {
        poster.onclick = function() {
          synopsis.innerText = "";
          populateFilmSynopsis(film);
      }
        document.querySelector('p')
      }
    })
  }
  



var app = function() {
  var url = 'http://www.omdbapi.com/?t=Moonlight&y=2016&plot=short&r=json'
  makeRequest(url, requestComplete);
}

var app2 = function() {
  var url = 'http://www.omdbapi.com/?t=la+la+land&y=&plot=short&r=json'
  makeRequest(url, requestComplete);
}

var app3 = function() {
  var url = 'http://www.omdbapi.com/?t=Manchester+by+the+sea&y=&plot=short&r=json'
  makeRequest(url, requestComplete);
}

var app4 = function() {
  var url = 'http://www.omdbapi.com/?t=Arrival&y=&plot=short&r=json'
  makeRequest(url, requestComplete);
}

var app5 = function() {
  var url = 'http://www.omdbapi.com/?t=Hell+or+High+Water&y=&plot=short&r=json'
  makeRequest(url, requestComplete);
}

var app6 = function() {
var url = 'http://www.omdbapi.com/?t=Mad+Max&y=2015&plot=short&r=json'
  makeRequest(url, requestComplete);
}
var app7 = function() {
var url = 'http://www.omdbapi.com/?t=Sicario&y=2015&plot=short&r=json'
  makeRequest(url, requestComplete);
}
var app8 = function() {
var url = 'http://www.omdbapi.com/?t=martian&y=2015&plot=short&r=json'
  makeRequest(url, requestComplete);
}
var app9 = function() {
var url = 'http://www.omdbapi.com/?t=star+wars&y=2015&plot=short&r=json'
  makeRequest(url, requestComplete);
}
var app10 = function() {
var url = 'http://www.omdbapi.com/?t=inside+out&y=2015&plot=short&r=json'
  makeRequest(url, requestComplete);
}
var app11 = function() {
var url = 'http://www.omdbapi.com/?t=whiplash&y=2014&plot=short&r=json'
  makeRequest(url, requestComplete);
}
var app12 = function() {
var url = 'http://www.omdbapi.com/?t=boyhood&y=2014&plot=short&r=json'
  makeRequest(url, requestComplete);
}
var app13 = function() {
var url = 'http://www.omdbapi.com/?t=guardians&y=2014&plot=short&r=json'
  makeRequest(url, requestComplete);
}
var app14 = function() {
var url = 'http://www.omdbapi.com/?t=lego&y=2014&plot=short&r=json'
  makeRequest(url, requestComplete);
}
var app15 = function() {
var url = 'http://www.omdbapi.com/?t=budapest&y=2014&plot=short&r=json'
  makeRequest(url, requestComplete);
}


window.onload = function() {
  // selectFilmByYear();
  app();
  app2();
  app3();
  app4();
  app5();
  app6();
  app7();
  app8();
  app9();
  app10();
  app11();
  app12();
  app13();
  app14();
  app15();
};

var onHomeClick = function(film) {
  var button = document.querySelector('button') 
  button.onclick = function() {
   window.onload = function() {
     app();
     app2();
     app3();
     app4();
     app5();
   };
  }
}

