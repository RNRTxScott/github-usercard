import axios from 'axios';


/*
axios.get('https://api.github.com/users/RNRTxScott')
.then(response => {
const profile = response.data;
  
  response.data.forEach(item => {
    cards.append(cardCreator(item))
  })
})
.catch(error => {
  console.log("the data was not returned", error)
})

const cards = document.querySelector('.cards')
const cardInfo = cardCreator(profile)
cards.appendChild(cardInfo)

function cardCreator(){

return newCard
}
*/
// console.log(entryPoint);

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
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

axios.get('https://api.github.com/users/RNRTxScott')
.then(response => {
//const profile = Response.data;
const cards = document.querySelector('.cards')
cards.append(cardMaker(response.data))
console.log('response',response);
//card.forEach( response => {
 // card.append(cardMaker(response.userimage))
})
 // cards.appendchild(cardmaker(profile));
 //profile.forEach( profile => {
 // cards.append(profile)
 // })

.catch(error =>{
  console.log(error)
})


 //console.log('cards', cards);

function cardMaker(obj){
  
  const card = document.createElement('div');
  
  const userimage = document.createElement('img');
  const cardinfo = document.createElement('div');
  const name = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const webaddress = document.createElement('a')
  const profile = document.createElement('p');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  card.classList.add("card");
  cardinfo.classList.add('card-p');
  name.classList.add('name');
  name.classList.add('username');
  userimage.classList.add('card-img');
  //username.classList.add('.card-p')
  card.classList.add('header')
  card.classList.add('container')

  userimage.src = obj.avatar_url;
  name.textContent = obj.name;
  username.innerHTML = obj.login;
  location.textContent = `Location: ${obj.location}`;
  webaddress.href = obj.html_url;
  webaddress.textContent = obj.html_url;
  profile.textContent = `profile ${webaddress}`;
  followers.textContent = `Followers: ${obj.followers}`;
  following.textContent = `Following: ${obj.following}`;
  bio.textContent = obj.bio;

  card.append(userimage);
  card.append(cardinfo);
  card.append(name);
  card.append(username);
  card.append(location);
  card.append(profile);
  card.append(followers);
  card.append(following);
  card.append(bio);

  return card;
}
const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"
];
followersArray.forEach(otUser => {
  axios.get(`https://api.github.com/users/${otUser}`)
  .then(response => {
  const cards = document.querySelector('.cards')
  cards.append(cardMaker(response.data))
  console.log('response2',response);
  })
   
  .catch(error =>{
    console.log(error)
  })
  })

