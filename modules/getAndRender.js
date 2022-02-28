// variabelen
export const urlAPI = 'https://quote.api.fdnd.nl/v1/quote'
export const quoteList = document.querySelector('ul:first-of-type')

export const paragraph = document.querySelector('main > p')

getData();

//functions
export function getData(){
  console.log('GET')
  fetch(urlAPI)
    .then(function(response){
      return response.json()
    })
    .then(quotes => {
        console.log(quotes.data)
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
        })
    .catch((error) => {
        console.log("ERROR")
    });
}