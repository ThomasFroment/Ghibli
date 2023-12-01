const gridElement = document.getElementById("grid");

async function cardGenerator() {
    const response = await fetch("https://ghibliapi.vercel.app/films");
    const data = await response.json();

    data.forEach((movie) => {
        gridElement.insertAdjacentHTML('beforeend', 
        `
            <div class="card">
                <img src="${movie.image}">
                <div class="card-body">
                    <h1 class="title">${movie.title}</h1>
                    <h1 class="director">${movie.director}</h1>
                    <div class="card-footer">
                        <button class="btn">View</button>
                        <h2 class="original-title">${movie.original_title}</h2>
                    </div>
                </div>
            </div>
        `)
    });
}

cardGenerator();
