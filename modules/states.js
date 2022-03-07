import {quoteList} from '/modules/getAndRender.js'

export function showLoadingState(){
    quoteList.insertAdjacentHTML('afterbegin', 
        `<p>
        We are searching for the inspiring quotes! Hold on just a second.
        </p>`)
}

export function hideLoadingState(){
    quoteList.removeChild(quoteList.firstElementChild);
}


export function showErrorState(){
    quoteList.insertAdjacentHTML('afterbegin', 
        `<p>
        Something went wrong... Please reload this page to try again.
        </p>`)
}
