let apiBody = document.getElementById("api_body");
let jokeApi = "https://icanhazdadjoke.com/";

let fetchData = () => {
  let response = fetch(jokeApi, {
    headers: {
      Accept: "application/json",
    },
  })
    .then((data) => {
      return data.json();
    })
    .then((res) => {
      console.log(res.joke);
      apiBody.innerHTML = res.joke;
    })
    .catch((error) => {
      console.log(error);
    });
};

fetchData();
document.getElementById("fetchJoke").addEventListener("click", fetchData);
