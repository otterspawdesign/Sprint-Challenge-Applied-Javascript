// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const topics = document.querySelector(".topics"),
  getTopics = axios
    .get("https://lambda-times-backend.herokuapp.com/topics")
    .then(response => {
      const allTopics = document.createElement("div");
      allTopics.classList.add("tab");
      allTopics.classList.add("active-tab");
      allTopics.setAttribute("data-tab", "all");
      allTopics.textContent = "ALL";
      allTopics.addEventListener("click", showCards);
      topics.appendChild(allTopics);
      response.data.topics.map(topic => {
        const newTopic = document.createElement("div");
        newTopic.classList.add("tab");
        newTopic.setAttribute("data-tab", topic);
        newTopic.textContent = topic;
        newTopic.addEventListener("click", showCards);
        topics.appendChild(newTopic);
      });
    })
    .catch(err => {
      console.log(`Error: ${err}`);
    });

const showCards = e => {
  const cards = document.querySelectorAll(".card");
  const tabs = document.querySelectorAll(".tab");

  cards.forEach(card => {
    if (e.target.getAttribute("data-tab") === "all")
      card.style.display = "block";
    else
      card.style.display =
        card.getAttribute("data-tab") === e.target.getAttribute("data-tab")
          ? "block"
          : "none";
  });

  tabs.forEach(tab => tab.classList.remove("active-tab"));
  e.target.classList.add("active-tab");
};
