// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const cardsContainer = document.querySelector(".cards-container"),
  getData = axios
    .get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
      const allArticles = Object.entries(response.data.articles);
      allArticles.map(topic => {
        topic[1].map(item => {
          cardsContainer.appendChild(createCards(item, topic[0]));
        });
      });
    })
    .catch(err => {
      console.log(`Error: ${err}`);
    });

const createCards = (item, dataAttr) => {
  //Element Creation
  if (dataAttr === "node") dataAttr = "node.js";

  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const span = document.createElement("span");

  //Class Additions
  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");
  card.setAttribute("data-tab", dataAttr);

  //Adding of Content
  headline.textContent = item.headline;
  img.src = item.authorPhoto;
  span.textContent = item.authorName;

  //Appends
  imgContainer.appendChild(img);
  author.appendChild(imgContainer);
  author.appendChild(span);
  card.appendChild(headline);
  card.appendChild(author);

  return card;
};
