// variabelen
const array = [ "1", "2"]
const foo = "bar"

const urlAPI = 'https://quote.api.fdnd.nl/v1/quote'

const quoteLijst = document.querySelector('ul:first-of-type')
const lijst = document.querySelector('ul:nth-of-type(2)')




// story
getData()
//testFunctie()

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


function testFunctie(){
  console.log("joe")
  console.log(array[0])
  console.log(foo)
  quoteLijst.insertAdjacentHTML('afterbegin', '<li>${foo}</li>')
}