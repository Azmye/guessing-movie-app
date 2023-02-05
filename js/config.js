const key = 'c6e09799f073fdcab59c60b86ee5d712';
const movieIds = [
  238, 278, 240, 315162, 19404, 424, 129, 389, 372058, 496243, 497, 155, 680, 429, 13, 372754, 696374, 122, 769, 724089, 11216, 346, 704264, 637, 12477, 311, 539, 761053, 550, 510, 598, 324857, 14537, 4935, 620249, 92321, 378064, 1891, 120,
  652837, 505642, 315162, 536554, 843794, 842544, 877703, 76600, 758009, 653851, 846433, 542196, 1035806, 615777, 899112, 436270, 39456, 1013870, 736526, 19995, 676547, 899579, 1041513, 668482, 297270, 411, 661374, 555604, 1015963, 955991,
  740952, 724495, 683328, 980078, 1024546, 943221, 663712, 866413, 985103, 985939, 447362, 157336, 423, 18491, 244786, 121, 599, 27205, 807, 73, 567, 914, 128, 555604, 3782, 274, 901, 533514, 12493, 795607, 361743,
];

const playVideo = (link) => {
  playBtn.classList.add('d-none');
  placeholder.classList.add('d-none');
  videoPlayer.classList.remove('d-none');

  const videos = `<iframe class='iframe' src="https://www.youtube.com/embed/${link}?autoplay=1&controls=0&start=30&disablekb=1&loop=1&modestbranding=1&playsinline=1&color=white&&mute=1" frameborder="0"  allow="autoplay"></iframe>
  <div class="position-absolute top-0 bottom-0 start-0 end-0 bg-transparent"></div>`;

  videoPlayer.innerHTML = videos;
  setTimeout(() => {
    playBtn.classList.remove('d-none');
    placeholder.classList.remove('d-none');
    videoPlayer.classList.add('d-none');

    videoPlayer.replaceChildren();
  }, 30 * 1000);
};

const videoPlayerResetter = () => {
  playBtn.classList.remove('d-none');
  placeholder.classList.remove('d-none');
  videoPlayer.classList.add('d-none');

  videoPlayer.replaceChildren();
};

const recordAnswer = (movieTitle, answer) => {
  const html = `<li class="list-group-item text-light text-uppercase  ${answer ? 'bg-success' : 'bg-danger'}">${movieTitle}</li>`;
  recordList.innerHTML += html;
};

const generateNumber = () => {
  const randomNumber = Math.floor(Math.random() * 101);
  return randomNumber;
};

const fetchMovie = async (endpoint, q) => {
  const base = 'https://api.themoviedb.org/3';
  const response = await fetch(`${base}${endpoint}${q}`);

  const data = await response.json();

  return data;
};

// const searchMovies = async (query) => {
//   const movie = await fetchMovie('/search/movie', `?api_key=${key}&query=${query}`);
//   return movie;
// };

// form.addEventListener('keyup', (e) => {
//   const term = e.target.value.trim().toLowerCase();
//   searchMovies(term).then((movie) => console.log(movie.results[0]));
// });

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const term = e.target.value.trim().toLowerCase();
// });

// searchMovies('t').then((movie) => console.log(movie));
// console.log(movieIds.length);
