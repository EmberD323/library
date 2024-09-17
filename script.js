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

function addBooktoLibrary(book){//adds books to array
    return myLibrary.push(book);
}

function displayLibrary(){ //for each book in library array add a new div in HTML
    let grid = document.querySelector(".gridContainer");
    return myLibrary.forEach(function(book,index){
        //if book not already on page
        let bookTitleNoSpaces = book.Title.replace(/\s/g, '');
        let bookSearch =document.querySelector("."+bookTitleNoSpaces);
        if(bookSearch == null){
            let libraryArrayIndex = index;
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
            //when info is title - add name as title
            let bookInfo = document.createElement("div");
            let bookTitle = book.Title;
            if(info=="Title"){
                console.log(bookTitle);
                //remove spaces
                let bookTitleNoSpaces = bookTitle.replace(/\s/g, '');
                bookInfo.classList.add(bookTitleNoSpaces);
            }
            else{
                bookInfo.classList.add(info);
            }
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

        }
        return
        
    });
}

//books to start library with
const theHobbit = new Book("The Hobbit","J.R.R Tolkien", "295", "Not yet read");
const Cerulean = new Book("The House on the Cerulean Sea","T.J Klune", "394", "Read");
const Witch = new Book("A Very Secret Society of Irregular Witches","Sangu Mandanna", "318", "Read");
//add these books to library
addBooktoLibrary(theHobbit);
addBooktoLibrary(Cerulean);
addBooktoLibrary(Witch);
//add library to HTML
displayLibrary();

//user adding books using form
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
    //addnewbooto webpage
    displayLibrary();
  
});

const closeButton = document.querySelector("#close");
closeButton.addEventListener("click",(e)=>{
    e.preventDefault();
    form.style.display = "none";//hide form
});

//remove book from libray
const removeButtons = document.querySelectorAll(".remove");
const grid = document.querySelector(".gridContainer");

removeButtons.forEach((button)=>{
    button.addEventListener("click",()=>{
        const bookToRemove = document.querySelector("#book"+button.id);
        grid.removeChild(bookToRemove);

        //delete from mylibrary
        let myLibraryEntry = myLibrary[button.id];
        myLibrary.splice(button.id,button.id+1);
        console.log(myLibrary);

    });
});

//change book status to read
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

////change book status to not read
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