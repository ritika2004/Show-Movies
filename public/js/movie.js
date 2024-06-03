// const axios = require("axios");

// document
//   .getElementById("movieForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent the form from submitting the traditional way

//     const movieName = document.getElementById("movie").value;
//     const apiKey = "2833dce9"; // Replace with your OMDb API key
//     const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(
//       movieName
//     )}`;
//     // http://www.omdbapi.com/?i=tt3896198&apikey=2833dce9
//     axios
//       .get(apiUrl)
//       .then((response) => {
//         if (response.data.Response === "True") {
//           displayMovieInfo(response.data);
//         } else {
//           displayError(response.data.Error);
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching data from OMDb API:", error);
//         displayError("Error fetching data from OMDb API");
//       });
//   });

// function displayMovieInfo(movie) {
//   const movieInfoDiv = document.getElementById("movieInfo");
//   movieInfoDiv.innerHTML = `
//         <h2>${movie.Title} (${movie.Year})</h2>
//         <p><strong>Director:</strong> ${movie.Director}</p>
//         <p><strong>Actors:</strong> ${movie.Actors}</p>
//         <p><strong>Plot:</strong> ${movie.Plot}</p>
//         <img src="${movie.Poster}" alt="Poster of ${movie.Title}">
//     `;
// }

// function displayError(error) {
//   const movieInfoDiv = document.getElementById("movieInfo");
//   movieInfoDiv.innerHTML = `<p style="color: red;">${error}</p>`;
// }
