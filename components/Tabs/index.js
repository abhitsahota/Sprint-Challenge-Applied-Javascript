// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then((response) => {
    console.log(response)
    let tabdata = document.querySelector('.topics')
    response.data.topics.forEach(item => {
        tabdata.appendChild(tabComponent(item))
    })
})
.catch((error) => {
    console.log(error)
})

function tabComponent(object){
    const newtab = document.createElement("div");  
    newtab.textContent = object
    newtab.classList.add('tab')
    return newtab
}