import { getTags, getAuthors } from '/modules/forms.js'

// variabelen
export const urlAPI = 'https://quote.api.fdnd.nl/v1/quote'
export const quoteList = document.querySelector('ul:first-of-type')

export const paragraph = document.querySelector('main > p')


// Activate functions
getAndRenderData();


//Get data form API
export function getAndRenderData(){
    console.log("GET DATA")
    fetch(urlAPI)
      .then(function(response){
        return response.json()
      })
      .then(quotes =>{
        quotes.data = quotes.data.slice(0,-4)
        renderData(quotes)
        getTags(quotes)
        getAuthors(quotes)
      })
      .catch((error) => {
        console.log("Er gaat iets fout...")
        console.log(error)
    });
}

//Render data form API
export function renderData(quotes){
    console.log("RENDER DATA")
    paragraph.innerHTML =  "Here are some quotes to inspire you!"
    quotes.data.forEach(data => {
        quoteList.insertAdjacentHTML('afterbegin', 
        `<li> 
            <p> ${data.text}</p>
            <div>
                <img src='${data.avatar}' alt='Profielfoto'>
                <h3>${data.name}</h3>
            </div
        </li>`)
        })
}