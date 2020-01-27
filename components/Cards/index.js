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

function createCard(object){

    // create elements

    const card = document.createElement('div')
    const heading = document.createElement('div')
    const author = document.createElement('div')
    const contImg = document.createElement('div')
    const authorImg = document.createElement('img')
    const nameauthor = document.createElement('span')


    // structure

    card.appendChild(heading)
    card.appendChild(author)
    author.appendChild(contImg)
    contImg.appendChild(authorImg)
    author.appendChild(nameauthor)

    card.classList.add('card')
    heading.classList.add('headline')
    author.classList.add('author')
    contImg.classList.add('img-container')

    heading.innerHTML = object.headline
    authorImg.src = object.authorPhoto
    nameauthor.textContent = `By ${object.authorName}`

    return card
}

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then((response) => {
    let cardContainer = document.querySelector('.cards-container')
    let carddata = Object.values(response.data.articles)
    carddata.forEach(element => {
        element.forEach(item => {
            cardContainer.appendChild(createCard(item))
        })
    })
})
.catch((error) => { 
    console.log(error)
})