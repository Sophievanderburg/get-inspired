export const urlAPI = 'https://quote.api.fdnd.nl/v1/quote'
export const titleFromTagsForm = document.querySelector("main section form:first-of-type h3")
export const titleFromAuthorForm = document.querySelector("main section form:nth-of-type(2) h3")


export function getTags(quotes){
    console.log("GET TAGS")
    console.log(quotes.data)
    quotes.data.forEach(data => {
        titleFromTagsForm.insertAdjacentHTML('afterend', 
        `<div>
            <input type="checkbox">
        <label> ${data.tags}</label>
        </div>`)
    })
}

export function getAuthors(quotes){
    console.log("GET AUTHORS")
    quotes.data.forEach(data => {
        titleFromAuthorForm.insertAdjacentHTML('afterend', 
        `<div>
            <input type="checkbox">
        <label> ${data.name}</label>
        </div>`)
    })
}