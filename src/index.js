// selecting our elements
const laodMoreBtn = document.getElementsByClassName("laod-more")[0];
const addFaovBtn = document.getElementsByClassName("add-Faov-Btn")[0];
// getting Api
const picturesApi = `https://api.nasa.gov/planetary/apod?api_key=SDygpe49fq5aqEh9rfBN5kR1LJxxwSUpY4hWeEEh&count=10`;

// fatch our api
async function getPictures() {
  try {
    const res = await fetch(picturesApi); // Corrected this line

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    const firstTenPictures = data.slice(0, 10);
    console.log(firstTenPictures);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

const textFunc = (e) => {
  console.log(e.target.parentElement.parentElement.children[0]);
};

// // our functions

// function loadMorePictures() {
//   const postWrapper = document.createElement("div");
//   postWrapper.classList = "post-Wrapper";

// }

//our events listners
addFaovBtn.addEventListener("click", textFunc);

// our html tree :

/*
<div class="post-Wrapper">
  <img
    class="post-Img"
    src="https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp"
    alt=""
  />
  <div class="text-Wrapper">
    <h1>POST TITLE</h1>
    <button class="add-Faov-Btn">ADD TO FAVO</button>
    <p class="post-P-Text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Consectetur atque optio vero culpa. Deserunt odio recusandae
      voluptates, praesentium tenetur animi commodi provident ex hic
      officiis ipsa quo in debitis. Voluptatem?
    </p>
    <div class="post-Date-By">
      <p>2023-01-24 by Ameer Ameen</p>
    </div>
  </div>
</div> */
