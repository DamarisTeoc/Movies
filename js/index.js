const requestURL = "./json/peliculas.json";


async function fetchMoviesJSON(){
    const  response = await fetch(requestURL);
    const movies = await response.json();
    return movies;
}

fetchMoviesJSON().then(movies =>{
    console.log(movies);

    for (let index = 0; index < movies.peliculas.length; index++) {

    let image = movies.peliculas[index].img;
    let title = movies.peliculas[index].nombre;
    let director = movies.peliculas[index].director;
    let classification = movies.peliculas[index].clasificacion;
    
    moviesSection.innerHTML += `
    <div class="card" style="width: 18rem;">
    <div class="card.body">
    <img class="poster" src="${image}">
    <p class="description">${title}<br>${director}<br>${classification}</p>
</div>
</div>
    `

    }
});
