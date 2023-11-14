// selecting our elements
const laodMoreBtn = document.getElementsByClassName("laod-more")[0];
const headerWrapper = document.getElementsByClassName("header-Wrapper")[0];

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
    loadMorePictures(firstTenPictures);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// // our functions

function loadMorePictures(firstTenPictures) {
  // console.log(e.target.parentElement.parentElement.children[0]);
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

    textWrapper.appendChild(postTitle);
    textWrapper.appendChild(addFavoBtn);
    textWrapper.appendChild(postPText);

    postDateBy.appendChild(dateAthorP);

    postWrapper.appendChild(postImg);
    postWrapper.appendChild(textWrapper);
    postWrapper.appendChild(postDateBy);
    headerWrapper.appendChild(postWrapper);
  });
}

//our events listners
laodMoreBtn.addEventListener("click", getPictures);

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
 </div>*/

//  date
// :
// "1997-05-13"
// explanation
// :
// "The GRB distance scale controversy may have just ended with a flash. Gamma Ray Bursts (GRBs) are powerful explosions occurring in seemingly random positions on the sky.  They are so featureless and so poorly resolved, however, that their distances could not be determined.  Last Thursday, May 8th, the orbiting Beppo-Sax Satellite detected and precisely located a GRB (GRB970508), quickly relaying its position to astronomers. Within hours, many of the world's most powerful telescopes were re-pointed in the direction of the new GRB.  There they found a faint but variable optical source: a potential counterpart to the gamma-ray burst that was getting brighter.  Most importantly, continued scrutiny showed that this optical transient had absorption lines with a redshift of about 0.8 - the distance scale of galaxies and quasars. If this source and GRB970508 are related, the GRB itself must be many billions of light-years away and the 30-year controversy on the distance scale to GRBs will draw dramatically to a close. GRBs could move from the realm of astronomical mystery to useful beacons of the early universe.  Above is a \"negative\" image of the GRB970508 field, located near the north celestial pole, taken hours after the initial flash of gamma rays. The faint optical transient source is inside the box. North is up and the image is 2.5 arcminutes across (about a tenth the size of the full moon)."
// hdurl
// :
// "https://apod.nasa.gov/apod/image/9705/grb970508_groot1_big.jpg"
// media_type
// :
// "image"
// service_version
// :
// "v1"
// title
// :
// "Optical Transient Near GRB970508 Shows Distant Redshift"
// url
// :
// "https://apod.nasa.gov/apod/image/9705/grb970508_groot1.jpg"
// [[Prototype]]
// :
// Object
