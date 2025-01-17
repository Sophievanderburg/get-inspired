#  Welcome to the Get Inspired repo! ✨

Link to Github Pages: [sophievanderburg.github.io/get-inspired/](sophievanderburg.github.io/get-inspired/) <br>
<img width="250" alt="Screenshot 2022-03-08 at 16 23 48" src="https://user-images.githubusercontent.com/70577898/157280932-53b589f3-99c8-4c2b-a493-cbbce4da3274.png">
<img width="250" alt="Screenshot 2022-03-08 at 16 23 53" src="https://user-images.githubusercontent.com/70577898/157280951-3e1656e3-23c8-45e4-b540-359b84673550.png">
<img width="250" alt="Screenshot 2022-03-08 at 16 24 06" src="https://user-images.githubusercontent.com/70577898/157280976-c4f7b053-7577-4b9c-a782-a713b5725931.png">

## Table of content
- About the SPA
  * The assigment
- Interaction
  * 📚 Filter on subject 
  * 👫 Filter on author
  * ❗ Disclaimer of the filter
- Practical information
  * Avtivity Diagram
  * How to install
  * The API
  * Routie
- What I would do if I had more time

##

## About the SPA
### The assignment
For the course [web app from scratch](https://github.com/cmda-minor-web/web-app-from-scratch-2122) for the minor Web Design & Devlopement I had to design and build a single page web app based on a User Story. 

>  💬 The used user story <br>
> As a student Digital Design, I want to look at inspiring web design quotes, to get some fresh energy when I'm down while working on crazy deadlines.

## Interaction 
### 📚 Filter on subject 
When you open the app, all the quotes are shown. There are quotes about all sorts of subjects like: design, code & prototyping. It could be that you are in the middle of the prototyping fase and you only want to see those kind of quotes. You can do that by selecting that subject in the filter form. This way you only need to see the quotes you probably want to see.

### 👫 Filter on author
Maybe you have a favourite designer and you only want to see the quotes they said/wrote. You can do that by selecting the designer in the filter form. This way you only need to see the quotes form your  favourite designer.

### ❗ Disclaimer of the filter
The two forms can not be combined when you are filtering. So you can use the subjects-form or the auhtors-form.



## Practical information
### Activity diagram
This is a diagram of how the SPA works <br>
<img width="1108" alt="Screenshot 2022-03-08 at 17 15 01" src="https://user-images.githubusercontent.com/70577898/157278726-cacfed3d-2ca7-4f20-ac12-7891d257e5a6.png">


### How to install
If you do not use Github desktop yet, stop with what you are doing and download it now. I've spent to much time messing around in the terminal. So that is a little hint from me to you. 😄 <br>
If you are at the code-tab on my Github, you see a green button with the text 'code' in it. Click on that button and click on the option 'open with Github Desktop'. This way, it clones my repo on your computer. Now you can adjust my code and write you own. Good luck! 🍀

### The API
URL: https://quote.api.fdnd.nl/v1/quote <br>
From the API I fetch the quotes that are rendered in the SPA

Once the fetch is transformed to ``.json``, you recieve an array with objects in it. In every object is all the data of 1 quote. <br>
Here is an example of what an object looks like:

```   
{"quoteId":"<number>",
"tags":"<tags>",
"text":"<text of the quote>",
"authorId":<number>,
"name":"<name of the author>",
"bio":"<bio of the author>",
"avatar":"<url to a picture of the author>"}
```

### Routie
With routie you can run code when a certain url is at the top of your screen. I played around with it, but prefered not to use it. I decided to leave it in the repo, so if you want to use it, the routie is already included in this repo! 👍
Here is a link for more info: http://projects.jga.me/routie/

## What I would do if I had more time
- I want the user to be able to combine the two forms while filtering: for example filter for the quotes that are from  ...  subject & from the author ...
- After each checkbox a number of how many qoutes will show up if you check that cetrain tag or auhtor.
- At the top of the quoteslist a number of how many quotes there are
- More advanced UI stack. I have all the states, but I think they should be more aesthetically pleasing. Now it is just a short sentence of what is hanppening.



##  

You can find more information about my proces in the wiki 😊
