document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const movieLinks = document.querySelectorAll('.category a');
    const selectedMovieContainer = document.getElementById('selected-movie');
    selectedMovieContainer.innerHTML = ''; // Clear previous content

    // Find the matching movie
    let selectedMovie = null;
    movieLinks.forEach(link => {
        const movieName = link.getAttribute('data-movie-name').toLowerCase();
        if (movieName.includes(searchTerm)) {
            selectedMovie = link.cloneNode(true);
        }
    });

    // Display selected movie or message if not found
    if (selectedMovie) {
        selectedMovieContainer.appendChild(selectedMovie);
    } else {
        selectedMovieContainer.innerHTML = '<p>No matching movie found.</p>';
    }
});
