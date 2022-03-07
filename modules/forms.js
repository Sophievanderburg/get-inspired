export const urlAPI = 'https://quote.api.fdnd.nl/v1/quote'
export const titleFromTagsForm = document.querySelector("main section form:first-of-type h3")
export const titleFromAuthorForm = document.querySelector("main section form:nth-of-type(2) h3")

export const checkboxAuthor = document.querySelectorAll("main section form:nth-of-type(2) div input[type='checkbox']") 


export function getTags(quotes){
    console.log("GET TAGS")
    // Hier komt de filter voor de dubbele
    quotes.data.forEach(data => {
        titleFromTagsForm.insertAdjacentHTML('afterend', 
        `<div>
            <input type="checkbox" name="${data.tags}">
        <label for="${data.tags}"> ${data.tags}</label>
        </div>`)
    })
}

export function getAuthors(quotes){
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
        titleFromAuthorForm.insertAdjacentHTML('afterend', 
        `<div>
            <input type="checkbox" name="${data}">
            <label for="${data}"> ${data}</label>
        </div>`)
    })
}

export function getCheckedItems(){
    let checkedAuthors = [];
    checkboxAuthor.forEach((checkbox) => {
        if (checkbox.checked) {
            console.log(checkbox.name)
        }; 
    });
    console.log(checkedAuthors)
}