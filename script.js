const movieSuggestions = {
  happy: [
    {
      title: "The Secret Life of Walter Mitty",
      image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10016880_p_v12_ap.jpg"
    },
    {
      title: "Amélie",
      image: "https://miro.medium.com/v2/resize:fit:500/0*zIr4AxBByrt43Cez.jpg"
    },
    {
      title: "Paddington 2",
      image: "https://m.media-amazon.com/images/I/81ajUVs6ddL.jpg"
    }
  ],
  sad: [
    {
      title: "The Pursuit of Happyness",
      image: "https://upload.wikimedia.org/wikipedia/en/8/81/Poster-pursuithappyness.jpg"
    },
    {
      title: "Blue Valentine",
      image: "https://play-lh.googleusercontent.com/Q3m9L96mwYMMEzqA2p0YHpXTFkM3_dXi-aSMvg68TVQW6z2Z-99rbvxf9NASUrKmy51l"
    },
    {
      title: "A Silent Voice",
      image: "https://m.media-amazon.com/images/I/81ij1VdzzHL._UF894,1000_QL80_.jpg"
    }
  ],
  bored: [
    {
      title: "Inception",
      image: "https://images.thalia.media/-/BF2000-2000/938d2e34f91a46258918c1b38b835453/inception-dvd-leonardo-dicaprio.jpeg"
    },
    {
      title: "Mad Max: Fury Road",
      image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10854488_p_v8_ac.jpg"
    },
    {
      title: "Everything Everywhere All at Once",
      image: "https://upload.wikimedia.org/wikipedia/en/1/1e/Everything_Everywhere_All_at_Once.jpg"
    }
  ],
  inspired: [
    {
      title: "The Social Network",
      image: "https://i.ytimg.com/vi/8IAGH6k17nw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA_hDFyckjw_AFzkgpfxp8KG1vYgQ"
    },
    {
      title: "Steve Jobs",
      image: "https://resizing.flixster.com/xDLPtKdPaTMPOAJD65hmwAzhX3I=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11491197_p_v8_as.jpg"
    },
    {
      title: "Whiplash",
      image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10488558_p_v12_ai.jpg"
    }
  ]
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

