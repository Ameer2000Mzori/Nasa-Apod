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

// our api key
var picturesApi = `https://api.nasa.gov/planetary/apod?api_key=SDygpe49fq5aqEh9rfBN5kR1LJxxwSUpY4hWeEEh&count=10`;

// our dataObj
var storedData = localStorage.getItem("dataObj");
var dataObj = JSON.parse(storedData) || [];

// load more button functions :

// fatch our api
async function getPictures() {
  // hidden our favo elemetns
  favoBtn.style.display = "block";
  loadingAnimationFavo.style.display = "none";
  favoWrapper.style.display = "none";
  loadingAnimation.style.display = "block";

  favoWrapper.innerHTML = "";
  // showing our loadMore elements
  headerWrapper.style.display = "flex";

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

// our load more function

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

    const textWrapper = document.createElement("div");
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
    const dateP = document.createElement("p");
    if (!el.copyright) {
      el.copyright = "there is no Athor ";
    }
    dateAthorP.textContent = `  ${el.copyright}`;
    dateP.textContent = ` ${el.date}`;

    // appending our elements to html

    textWrapper.appendChild(postTitle);
    textWrapper.appendChild(addFavoBtn);
    textWrapper.appendChild(postPText);
    postDateBy.appendChild(dateAthorP);
    postDateBy.appendChild(dateP);
    postWrapper.appendChild(postImg);
    postWrapper.appendChild(textWrapper);
    postWrapper.appendChild(postDateBy);
    headerWrapper.appendChild(postWrapper);

    // our events listner within the loop

    addFavoBtn.addEventListener("click", (e) => {
      const favoSrc = e.target.parentElement.parentElement.children[0].src;
      const favoTitle =
        e.target.parentElement.parentElement.children[1].children[0]
          .textContent;

      const favoText =
        e.target.parentElement.parentElement.children[1].textContent;

      const favoAthor =
        e.target.parentElement.parentElement.children[2].children[0]
          .textContent;
      const favoDate =
        e.target.parentElement.parentElement.children[2].children[1]
          .textContent;

      // checking if data has same data as wanted to add favorites
      if (!dataObj.some((item) => item.title === favoTitle)) {
        const newObj = {
          url: favoSrc,
          title: favoTitle,
          explanation: favoText,
          date: favoDate,
          copyright: favoAthor,
        };
        dataObj.push(newObj);
        console.log(dataObj);
        console.log(favoSrc, favoTitle, favoText, favoAthor, favoDate);
        addFavoBtn.textContent = "ADDED";
        addFavoBtn.style.backgroundColor = "green";

        localStorage.setItem("dataObj", JSON.stringify(dataObj));
      } else {
        console.log("you already have this item in favo");
        addFavoBtn.textContent = "ADDED ALREADY";
      }
    });
  });
}

// favorites posts functions

function showFavorites(dataObj) {
  favoBtn.style.display = "none";
  // hidden our loadMore elemetns
  headerWrapper.innerHTML = "";
  headerWrapper.style.display = "none";
  loadingAnimationFavo.style.display = "block";
  // showing our favo elemetns
  favoWrapper.innerHTML = "";
  favoWrapper.style.display = "flex";

  dataObj.forEach((el) => {
    // creating and giving each element an value
    const postWrapper = document.createElement("div");
    postWrapper.classList = "post-Wrapper-favo-favo";

    const postImg = document.createElement("img");
    postImg.classList = "post-Img-favo-favo";
    postImg.alt = "img";
    postImg.title = "this image is from nasa api";
    postImg.src = `${el.url}`;

    const textWrapper = document.createElement("div");
    textWrapper.classList = "text-Wrapper-favo-favo";

    const postTitle = document.createElement("h1");
    postTitle.textContent = `${el.title}`;

    const removeFavoBtn = document.createElement("button");
    removeFavoBtn.classList = "remove-Faov-Btn-favo-favo";
    removeFavoBtn.textContent = "REMOVE";

    const postPText = document.createElement("p");
    postPText.classList = "post-P-Text-favo-favo";
    postPText.textContent = `${el.explanation}`;

    const postDateBy = document.createElement("div");
    postDateBy.classList = "post-Date-By-favo-favo";

    const dateAthorP = document.createElement("p");
    const dateP = document.createElement("p");

    if (!el.copyright) {
      el.copyright = "there is no Athor ";
    }
    dateAthorP.textContent = `  ${el.copyright}`;
    dateP.textContent = ` ${el.date}`;

    // appending our elements to html

    textWrapper.appendChild(postTitle);
    textWrapper.appendChild(removeFavoBtn);
    textWrapper.appendChild(postPText);
    postDateBy.appendChild(dateAthorP);
    postDateBy.appendChild(dateP);
    postWrapper.appendChild(postImg);
    postWrapper.appendChild(textWrapper);
    postWrapper.appendChild(postDateBy);
    favoWrapper.appendChild(postWrapper);

    // remove event listner
    removeFavoBtn.addEventListener("click", (e) => {
      const postElement =
        e.target.parentElement.parentElement.children[1].children[0];

      // checking if we are getting data or not
      if (postElement) {
        const postTitle = postElement.textContent;
        console.log(postTitle);
        removeFavoPost(postTitle);
      } else {
        console.error("Couldn't find post element");
      }
    });
  });
  loadingAnimationFavo.style.display = "none";
}

// removing our favo posts function
function removeFavoPost(postTitle) {
  dataObj = dataObj.filter((el) => el.title !== postTitle);
  localStorage.setItem("dataObj", JSON.stringify(dataObj));
  favoWrapper.innerHTML = "";
  showFavorites(dataObj);
}

//our events listners
loadMoreBtn.addEventListener("click", getPictures);
favoBtn.addEventListener("click", () => {
  showFavorites(dataObj);
});
getPictures();
