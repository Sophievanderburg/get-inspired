#  Welcome to the Get Inspired repo! ✨
Here will be some pictures off the SPA when it is "finished" :)

## About the SPA
### 💬 User story 
As a student Digital Design, I want to look at inspiring web design quotes, to get some fresh energy when I'm down while working on crazy deadlines.

## Interaction (This is still in the making 😄)
### 📚 Filter on subject 
When you open the app, all the quotes are shown. There are quotes about all sorts of subjects like: design, code & prototyping. It could be that you are in the middle of the prototyping fase and you only want to see those kind of quotes. You can do that by selecting that subject in the filter form. This way you only need to see the quotes you probably want to see.

### 👫 Filter on author
Maybe you have a favourite designer and you only want to see the quotes they said/wrote. You can do that by selecting the designer in the filter form. This way you only need to see the quotes form your  favourite designer.



## Practical information
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



##  

You can find more information about my proces in the wiki 😊
