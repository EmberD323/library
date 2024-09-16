const myLibrary =[];


function Book(title,author,pages,readornot){ //constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readornot = readornot;
    this.info = function(){
      return title + " by " + author + ", " + pages +" pages" +", " + readornot;
    }
        
}

function addBooktoLibrary(book){
    return myLibrary.push(book);
}

const theHobbit = new Book("The Hobbit","J.R.R Tolkien", "295", "not yet read");
addBooktoLibrary(theHobbit);
console.log(myLibrary);