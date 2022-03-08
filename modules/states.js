import {quoteList} from '/modules/getAndRender.js'
import {hideSectionButton, showOrHideSection} from '/modules/sectionInteraction.js'

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

export function removeSearchState(){   
    history.back()
    showOrHideSection()

    console.log(window.location.href)
}

hideSectionButton.addEventListener('click', removeSearchState);