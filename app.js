const URL = "https://api.chucknorris.io/jokes/random?category=";
const randomURL = "https://api.chucknorris.io/jokes/random";
const chuckIMG = document.querySelector(".chuck-img");

const collectionOfCategory = [
  "animal",
  "career",
  "celebrity",
  "dev",
  "explicit",
  "fashion",
  "food",
  "history",
  "money",
  "movie",
  "music",
  "political",
  "religion",
  "science",
  "sport",
  "travel",
];

// - - - - - - -
// GRAB JOKE FROM API
// - - - - - - -

let btn = document.querySelectorAll("button");

for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", (e) => {
    const jokeCategory = e.target.id;
    const indexOfCategory = collectionOfCategory.indexOf(jokeCategory);
    let category = collectionOfCategory[indexOfCategory];
    let url = URL;

    shake();
    if (jokeCategory === "random") {
      url = randomURL;
      category = "";
    }

    async function getJoke() {
      try {
        let data = await fetch(url + category);
        return await data.json();
      } catch (error) {
        console.log(error);
      }
    }
    async function renderJoke() {
      let jokes = await getJoke();
      let { value: joke } = jokes;
      console.log(joke);

      let paragraphOne = document.querySelector(".joke-paragraph-one");
      let paragraphTwo = document.querySelector(".joke-paragraph-two");
      console.log(paragraphOne);

      paragraphOne.innerHTML = `
      <p class="joke">${joke}</p>
      `;

      paragraphTwo.innerHTML = `
        <p class="joke">${joke}</p>
        `;
    }
    renderJoke();
  });
}

// - - - - - - -
// SHAKE IMAGE
// - - - - - - -

function shake() {
  chuckIMG.classList.add("shake-img");
  const random = Math.random() * 1000;
  setTimeout(() => {
    chuckIMG.classList.remove("shake-img");
  }, random);
}
