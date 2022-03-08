export const section = document.querySelector('main > section')
export const showSectionLink= document.querySelector('main > a');
export const hideSectionButton = document.querySelector('main section > button:first-of-type');

export const tagsButton = document.querySelector('main section div button:first-of-type');
export const tagsForm = document.querySelector('main section form:first-of-type');
export const authorButton = document.querySelector('main section div button:nth-of-type(2)');
export const authorForm = document.querySelector('main section form:nth-of-type(2)');


export function showOrHideSection(){
    section.classList.toggle("active");
}

export function showAuthorForm(){
    tagsForm.classList.remove("show")
    tagsButton.classList.remove("selected")

    authorForm.classList.add("show");
    authorButton.classList.add("selected")
}

export function showTagsForm(){
    authorForm.classList.remove("show")
    authorButton.classList.remove("selected")

    tagsForm.classList.add("show");
    tagsButton.classList.add("selected")
}

tagsButton.addEventListener('click', showTagsForm);
authorButton.addEventListener('click', showAuthorForm);