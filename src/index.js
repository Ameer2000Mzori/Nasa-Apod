// selecting our elements
const loadMoreBtn = document.getElementsByClassName("load-more")[0];
const headerWrapper = document.getElementsByClassName("header-Wrapper")[0];
const loadingAnimation =
  document.getElementsByClassName("loading-Animation")[0];
const loadingAnimationFavo = document.getElementsByClassName(
  "loading-Animation-Favo"
)[0];
const favoWrapper = document.getElementsByClassName("favo-Wrapper")[0];
const favoBtn = document.getElementsByClassName("favo-btn")[0];
favoWrapper.style.display = "none";
// getting Api
const picturesApi = `https://api.nasa.gov/planetary/apod?api_key=SDygpe49fq5aqEh9rfBN5kR1LJxxwSUpY4hWeEEh&count=10`;

// our dataObj

// load more button functions :

// fatch our api

async function getPictures() {
  // hidden our favo elemetns

  loadingAnimationFavo.style.display = "none";
  favoWrapper.style.display = "none";
  // showing our loadMore elements

  headerWrapper.style.display = "flex";
  loadingAnimation.style.display = "block";
  // fechting data
  try {
    const res = await fetch(picturesApi); // Corrected this line

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    const firstTenPictures = data.slice(0, 10);
    console.log(firstTenPictures);

    // disable loading text on screen

    loadingAnimation.style.display = "none";

    //passing our data to the loadMore function

    loadMorePictures(firstTenPictures);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// our functions

function loadMorePictures(firstTenPictures) {
  //creating for each for our newly created elements and giving them values

  firstTenPictures.forEach((el) => {
    const postWrapper = document.createElement("div");
    postWrapper.classList = "post-Wrapper";

    const postImg = document.createElement("img");
    postImg.classList = "post-Img";
    postImg.alt = "img";
    postImg.title = "this image is from nasa api";
    postImg.src = `${el.url}`;

    const textWrapper = document.createElement("text-Wrapper");
    textWrapper.classList = "text-Wrapper";

    const postTitle = document.createElement("h1");
    postTitle.textContent = `${el.title}`;

    const addFavoBtn = document.createElement("button");
    addFavoBtn.classList = "add-Faov-Btn";
    addFavoBtn.textContent = "ADD TO FAVO";

    const postPText = document.createElement("p");
    postPText.classList = "post-P-Text";
    postPText.textContent = `${el.explanation}`;

    const postDateBy = document.createElement("div");
    postDateBy.classList = "post-Date-By";

    const dateAthorP = document.createElement("p");
    dateAthorP.textContent = `On ${el.date} Athor ${el.copyright}`;

    // appending our elements to html

    textWrapper.appendChild(postTitle);
    textWrapper.appendChild(addFavoBtn);
    textWrapper.appendChild(postPText);
    postDateBy.appendChild(dateAthorP);
    postWrapper.appendChild(postImg);
    postWrapper.appendChild(textWrapper);
    postWrapper.appendChild(postDateBy);
    headerWrapper.appendChild(postWrapper);

    // our events listner within the loop

    addFavoBtn.addEventListener("click", (e) => {
      console.log("hallo world", e.target.parentElement);
    });
  });
}

// favorites posts functions

function showFavorites() {
  // hidden our loadMore elemetns
  headerWrapper.style.display = "none";
  // showing our favo elemetns
  favoWrapper.style.display = "flex";
  loadingAnimationFavo.style.display = "block";
}

//our events listners
loadMoreBtn.addEventListener("click", getPictures);
favoBtn.addEventListener("click", showFavorites);
