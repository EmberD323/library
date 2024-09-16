function Book(title,author,pages,readornot){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readornot = readornot;
    this.info = function(){
      return title + " by " + author + ", " + pages +" pages" +", " + readornot;
    }
        
}

const theHobbit = new Book("The Hobbit","J.R.R Tolkien", "295", "not yet read");

console.log(theHobbit.info());