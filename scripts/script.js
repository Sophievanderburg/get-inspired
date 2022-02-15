// variabelen
const urlAPI = 'https://quote.api.fdnd.nl/v1/quote'
const quoteLijst = document.querySelector('ul:first-of-type')

const paragraafje = document.querySelector('main > p')

const scrolKnop = document.querySelector('header a')
const main = document.querySelector('main')


// story
getData()
scrolKnop.addEventListener('click', scrollFunction)

//functions
function getData(){
  console.log('GET')
  fetch(urlAPI)
    .then(function(response){
      return response.json()
    })
    .then(quotes => {
        console.log(quotes.data)
        paragraafje.innerHTML =  "Here are some quotes to inspire you!"
        quotes.data.forEach(data => {
            quoteLijst.insertAdjacentHTML('afterbegin', 
            `<li> 
              <p> ${data.text}</p>
              <div>
                  <img src='${data.avatar}' alt='Profielfoto'>
                  <h3>${data.name}</h3>
              </div
             </li>`)
              })
        })
    .catch((error) => {
        console.log("ERROR")
    });
}


function scrollFunction () {
    if (document.documentElement.scrollTop < 500) {
        scrolKnop.scrollIntoView();
        scrolKnop.classList.add('draai')
      } else {
        document.documentElement.scrollTop = 0;
        scrolKnop.classList.remove('draai')
      }
}