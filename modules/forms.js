import { authorForm, tagsForm } from './sectionInteraction.js';


export const urlAPI = 'https://quote.api.fdnd.nl/v1/quote'
export const titleFromTagsForm = document.querySelector("main section form:first-of-type h3")
export const titleFromAuthorForm = document.querySelector("main section form:nth-of-type(2) h3")

export const sectionTagsForm = document.querySelector("main section form:nth-of-type(1) section")
export const sectionAuthorForm = document.querySelector("main section form:nth-of-type(2) section")


export const checkboxAuthor = document.querySelectorAll("main section form:nth-of-type(2) input[type='checkbox']") 


export function getTags(quotes){
    sectionTagsForm.innerHTML=""
    console.log("GET TAGS")
    // Hier komt de filter voor de dubbele
    quotes.data.forEach(data => {
        sectionTagsForm.insertAdjacentHTML('afterbegin', 
        `<div>
            <input type="checkbox" name="${data.tags}">
        <label for="${data.tags}"> ${data.tags}</label>
        </div>`)
    })
}

export function getAuthors(quotes){
    sectionAuthorForm.innerHTML=""
    console.log("GET AUTHORS");
    // Bron: https://stackoverflow.com/questions/37856130/javascript-get-values-from-array-but-ignore-duplicates
    let array = quotes.data;
    let authors = [];
    for(var i = 0, len = array.length; i < len; i++) {
        if(authors.indexOf(array[i].name) > -1) {
           // a double type is added to the array
        }
        else {
            // a new type is added to the array
            authors.push(array[i].name);
        }
    } 
    authors.forEach(data => {
        sectionAuthorForm.insertAdjacentHTML('afterbegin', 
        `<div>
            <input type="checkbox" id="${data}">
            <label for="${data}"> ${data}</label>
        </div>`)
    })

    authorForm.addEventListener('change', event => {

        let checkedInputs = [...authorForm.querySelectorAll('input:checked')].map(el => el.id);
        
        // Filter de oorspronkelijke dataset op de entries die in de checkbox aangevinkt zijn
        let newData = quotes.data.filter(element => {
          // Als een van de checkbox entries matcht met 1 van de dataset entries
          if(checkedInputs.includes(element.name)) {
            // Voeg 'm toe aan de nieuwe array
            return true;
          } else {
            // Filter 'm uit de nieuwe array
            return false;
          }
        })
           
        // Nieuwe array
        console.log('Gefilterde array')
        console.log(newData);
      })  
}

