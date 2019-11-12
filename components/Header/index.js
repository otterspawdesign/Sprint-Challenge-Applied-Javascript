// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
  // Element Creation
  const div = document.createElement("div");
  const dateSpan = document.createElement("span");
  const h1 = document.createElement("h1");
  const tempSpan = document.createElement("span");

  // Class Additions
  div.classList.add("header");
  dateSpan.classList.add("date");
  tempSpan.classList.add("temp");

  //Adding Text Content
  dateSpan.textContent = "SMARCH 28, 2019";
  h1.textContent = "Lambda Times";
  tempSpan.textContent = "98º";

  //Appending Elements
  div.appendChild(dateSpan);
  div.appendChild(h1);
  div.appendChild(tempSpan);

  return div;
}

const header = document
  .querySelector(".header-container")
  .appendChild(Header());
