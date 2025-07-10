const movieSuggestions = {
  happy: [
    {
      title: "The Secret Life of Walter Mitty",
      image: "https://m.media-amazon.com/images/I/91U4U+SdJRL._AC_SY679_.jpg"
    },
    {
      title: "Amélie",
      image: "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg"
    },
    {
      title: "Paddington 2",
      image: "https://m.media-amazon.com/images/I/81Y8K6biYJL._AC_SY679_.jpg"
    }
  ],
  sad: [
    {
      title: "The Pursuit of Happyness",
      image: "https://m.media-amazon.com/images/I/71ePbXQkZ0L._AC_SY679_.jpg"
    },
    {
      title: "Blue Valentine",
      image: "https://m.media-amazon.com/images/I/81wzRI+J1bL._AC_SY679_.jpg"
    },
    {
      title: "A Silent Voice",
      image: "https://m.media-amazon.com/images/I/81Cn7Usj40L._AC_SY679_.jpg"
    }
  ]
  // You can add more moods later!
};


function suggestMovie() {
  const mood = document.getElementById("moodSelector").value;
  const suggestionDiv = document.getElementById("suggestion");
  const imageElement = document.getElementById("poster");

  if (!mood || !movieSuggestions[mood]) {
    suggestionDiv.innerText = "Please select a valid mood.";
    imageElement.src = "";
    return;
  }

  const movies = movieSuggestions[mood];
  const randomMovie = movies[Math.floor(Math.random() * movies.length)];

  suggestionDiv.innerText = `You should watch: ${randomMovie.title}`;
  imageElement.src = randomMovie.image;
}

