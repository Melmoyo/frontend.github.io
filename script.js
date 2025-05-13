const apiUrl=' https://cors-anywhere.herokuapp.com/https://v2.jokeapi.dev/joke/Any?type=single';
const button = document.querySelector("button");
const joke = document.querySelector(".joke-content"); 

button.addEventListener("click",()=>{
  fetch(apiUrl)
  .then(response=> response.json())
        .then(data=>{

        joke.innerHTML=`<p>${data.joke}</p>`;
        });
});
