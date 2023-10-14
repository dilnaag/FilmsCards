
function render(arr) {
    document.querySelector(".cards").innerHTML+=""
    arr.forEach(obj => {
        document.querySelector(".cards").innerHTML +=`
        <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title" >${obj.Title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${obj.Year}</h6>
        <p class="card-text">${obj.Genre}<p>
        <p class="card-text">${obj.Director}<p>
        <p class="card-text">${obj.Country}<p>
        <p class="card-text">${obj.Awards}<p>
        <p class="card-text">${obj.imdbRating}<p>
        </div>
        </div>`
    });
}
render(films)