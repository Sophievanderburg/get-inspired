// variabelen
const urlAPI = 'https://quote.api.fdnd.nl/v1/quote'
const quoteLijst = document.querySelector('ul:first-of-type')


// story
getData()


//functions
function getData(){
  console.log('GET1')
  fetch(urlAPI)
    .then(function(response){
      return response.json()
    })
    .then(function(quotes){
      console.log("hoi")
      console.log(quotes.data[0].name)
      quoteLijst.insertAdjacentHTML('afterbegin', 
      `<li> 
        <p> ${quotes.data[0].text}</p>
        <div>
            <img src='${quotes.data[0].avatar}' alt='Profielfoto'>
            <h3>${quotes.data[0].name}</h3>
        </div
       </li>`)
    })
}
