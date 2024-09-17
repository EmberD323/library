const myLibrary =[];


function Book(Title,Author,Pages,ReadStatus){ //constructor
    this.Title = Title;
    this.Author = Author;
    this.Pages = Pages;
    this.ReadStatus = ReadStatus;
    //this.info = function(){
    //  return Title + " by " + Author + ", " + Pages +" pages" +", " + Readornot;
    //}
        
}

function addBooktoLibrary(book){
    return myLibrary.push(book);
}

function displayLibrary(){
    //for each book in library add a new div under body
    return myLibrary.forEach(function(book,index){
        let libraryArrayIndex = index;
        let grid = document.querySelector(".gridContainer");
        let newBook = document.createElement("div");
        newBook.classList.add("book");
        newBook.id ="book"+libraryArrayIndex;
        newBook.textContent = book.Title;
        grid.appendChild(newBook);
        //remove buttons
        let removeButton = document.createElement("button");
        removeButton.classList.add("remove");
        removeButton.textContent = "Remove from library";
        removeButton.id =libraryArrayIndex;
        newBook.appendChild(removeButton);
        //for each oject parameter add a div and print
        for(var info in book){
            let bookInfo = document.createElement("div");
            bookInfo.classList.add(info);
            bookInfo.id =info+libraryArrayIndex;
            bookInfo.textContent = info + ": " + book[info];
            newBook.appendChild(bookInfo);

        }
        //read and not read buttons
        let readButton = document.createElement("button");
        readButton.classList.add("read");
        readButton.textContent = "Read";
        readButton.id =libraryArrayIndex;
        newBook.appendChild(readButton);
        let notReadButton = document.createElement("button");
        notReadButton.classList.add("notRead");
        notReadButton.textContent = "Not read";
        notReadButton.id =libraryArrayIndex;
        newBook.appendChild(notReadButton);
        return
    });

}

const theHobbit = new Book("The Hobbit","J.R.R Tolkien", "295", "Not yet read");
const Cerulean = new Book("The House on the Cerulean Sea","T.J Klune", "394", "Read");
const Witch = new Book("A Very Secret Society of Irregular Witches","Sangu Mandanna", "318", "Read");

addBooktoLibrary(theHobbit);
addBooktoLibrary(Cerulean);
addBooktoLibrary(Witch);

console.log("my Library array is");
console.log(myLibrary);
displayLibrary();

//useraddedbooks
const addBookButton = document.querySelector(".newBook");
const form = document.querySelector("form");
const submitButton = document.querySelector("#submit");
form.style.display = "none";//hide form

addBookButton.addEventListener("click",()=>{
    form.style.display = "block";//reveal form
});

submitButton.addEventListener("click",(e)=>{
    e.preventDefault();
    const userInputtedBookName = document.querySelector("#title").value;
    const userInputtedAuthor = document.querySelector("#author").value;
    const userInputtedPages = document.querySelector("#pages").value;
    const userInputtedStatus = document.querySelector("#readStatus").value;
    const newBook = new Book(userInputtedBookName,userInputtedAuthor,userInputtedPages,userInputtedStatus);
    console.log(newBook);
    addBooktoLibrary(newBook);
    //delete everything in grid container
    let bookCards = document.querySelectorAll(".gridContainer>*");
    let grid = document.querySelector(".gridContainer");
    bookCards.forEach(function(child){
        grid.removeChild(child);
    })
    //redisplaylib
    displayLibrary();
  
});

const closeButton = document.querySelector("#close");
submitButton.addEventListener("click",(e)=>{
    e.preventDefault();
    form.style.display = "none";//hide form
});

//removebookfromlibray
const removeButtons = document.querySelectorAll(".remove");
const grid = document.querySelector(".gridContainer");

removeButtons.forEach((button)=>{
    button.addEventListener("click",()=>{
        const bookToRemove = document.querySelector("#book"+button.id);
        grid.removeChild(bookToRemove);

    });
});

//read button
const readButtons = document.querySelectorAll(".read");
readButtons.forEach((readButton)=>{
    readButton.addEventListener("click",()=>{
        const readStatusElement = document.querySelector("#ReadStatus"+readButton.id);
        let readStatus =readStatusElement.textContent;
        if(readStatus!=="Read"){
            readStatusElement.textContent = "ReadStatus: Read";
        }
    });
});

//Notread button
const notReadButtons = document.querySelectorAll(".notRead");
notReadButtons.forEach((notReadButton)=>{
    notReadButton.addEventListener("click",()=>{
        const notReadStatusElement = document.querySelector("#ReadStatus"+notReadButton.id);
        let notReadStatus =notReadStatusElement.textContent;
        if(notReadStatus!=="Not yet read"){
            notReadStatusElement.textContent = "ReadStatus: Not yet read";
        }
    });
});