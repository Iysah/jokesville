const jokeType = document.getElementById('joke-type');
const jokeBody = document.getElementById('joke-body');
// const catBtn = document.getElementById('cat-btn');
const jokeBtn = document.getElementById('joke-btn');

jokeBtn.addEventListener('click', getRandomJoke)
// dogBtn.addEventListener('click', getRandomDog)

function getRandomJoke() {
    console.log('Whoof!!')
    fetch('https://v2.jokeapi.dev/joke/Any?type=single')
    .then(res => res.json())

    .then(data => {
        jokeType.innerHTML = `<p>Category: ${data.category} <p/>`;
        jokeBody.innerHTML = `<p>${data.joke} <p/>`;
    })
}

//http://api.icndb.com/jokes/random
//https://cat-fact.herokuapp.com/facts/random?animal_type=cat
//https://v2.jokeapi.dev/joke/Any?type=single