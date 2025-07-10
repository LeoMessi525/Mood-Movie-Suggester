const movieSuggestions = {
  happy: ["The Secret Life of Walter Mitty", "Amélie", "Paddington 2"],
  sad: ["The Pursuit of Happyness", "Blue Valentine", "A Silent Voice"],
  bored: ["Inception", "Mad Max: Fury Road", "Everything Everywhere All at Once"],
  inspired: ["The Social Network", "Steve Jobs", "Whiplash"]
};

function suggestMovie() {
  const mood = document.getElementById("moodSelector").value;
  const suggestionDiv = document.getElementById("suggestion");

  if (!mood || !movieSuggestions[mood]) {
    suggestionDiv.innerText = "Please select a valid mood.";
    return;
  }

  const movies = movieSuggestions[mood];
  const randomMovie = movies[Math.floor(Math.random() * movies.length)];

  suggestionDiv.innerText = `You should watch: ${randomMovie}`;
}
