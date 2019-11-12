/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselContainer = document.querySelector(".carousel-container"),
  createCarousel = () => {
    //Element Creation
    const carousel = document.createElement("div");
    const leftButton = document.createElement("div");
    const imgOne = document.createElement("img");
    const imgTwo = document.createElement("img");
    const imgThree = document.createElement("img");
    const imgFour = document.createElement("img");
    const rightButton = document.createElement("div");

    //Class Additions
    carousel.classList.add("carousel");
    leftButton.classList.add("left-button");
    rightButton.classList.add("right-button");

    //Adding Content
    leftButton.textContent = "<";
    imgOne.src = "./assets/carousel/mountains.jpeg";
    imgTwo.src = "./assets/carousel/computer.jpeg";
    imgThree.src = "./assets/carousel/trees.jpeg";
    imgFour.src = "./assets/carousel/turntable.jpeg";
    rightButton.textContent = ">";

    //Appends
    carousel.appendChild(leftButton);
    carousel.appendChild(imgOne);
    carousel.appendChild(imgTwo);
    carousel.appendChild(imgThree);
    carousel.appendChild(imgFour);
    carousel.appendChild(rightButton);

    return carousel;
  };

carouselContainer.appendChild(createCarousel());

class Carousel {
  constructor(element) {
    this.element = element;

    this.leftButton = this.element.querySelector(".left-button");
    this.rightButton = this.element.querySelector(".right-button");
    this.imgs = this.element.querySelectorAll("img");
    this.imgs.forEach((img, i) => {
      img.style.position = "relative";
      img.style.left = `${i * img.style.width}px`;
      img.style.transitionDuration = "0.3s";
    });

    this.leftButton.style.zIndex = 1;
    this.leftButton.addEventListener("click", () => this.moveLeft());
    this.rightButton.addEventListener("click", () => this.moveRight());
  }

  moveLeft() {
    this.imgs.forEach(img => {
      img.style.left =
        Number(img.style.left.split("px")[0]) <=
        -(img.offsetWidth * (this.imgs.length - 1))
          ? false
          : `${Number(img.style.left.split("px")[0]) - img.offsetWidth}px`;
    });
  }

  moveRight() {
    this.imgs.forEach(img => {
      img.style.left =
        img.style.left.split("px")[0] === "0"
          ? false
          : `${Number(img.style.left.split("px")[0]) + img.offsetWidth}px`;
    });
  }
}

const carousel = new Carousel(carouselContainer);
