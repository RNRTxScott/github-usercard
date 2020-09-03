import axios from 'axios';


/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/RNRTxScott')
.then(res => {
const newArr = res.data
  newArr.forEach(item => {
    entryPoint.appendChild(gitBro(item))
  })
  //console.log(res.data);
})
.catch(error => {
  console.log("the data was not returned", error)
})

function gitBro(profileScott){
const newCard = document.createElement('div');
const newImg = document.createElement('img');
const newCardInfo = document.createElement('div');
/*
newName = document.createElement('h3'),
newUserName = document.createElement('p'),
newLocation = document.createElement('p'),
newProfile = document.createElement('p'),
newLink = document.createElement('a'),
newFollowers = document.createElement('p'),
newFollowing = document.createElement('p'),
newBio = document.createElement('p');
*/

newCardInfo.textContent = `login: ${profileScott}`;
newImg.src = newImg;
newImg.classList.add('.card img');
newCard.classList.add('.card');


newCard.appendChild(newImg);
newCard.appendChild(newCardInfo);
return newCard
}


const entryPoint = document.querySelector('.cards')
// console.log(entryPoint);


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/