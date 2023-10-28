const STORAGE_KEY = "BOOK_APPS"
const EVENT_CHANGE = "change-books";
const SAVED_EVENT = "saved-books";
const RENDER_EVENT = 'render-todo';

let books = [];
var todos = [];

   function isStorageExist() {
    if (typeof Storage === undefined) {
    alert("ups!");
    return false;
  }
  return true;
}

   function saveData() { 
       const parsed = JSON.stringify(data);
       localStorage.setItem(STORAGE_KEY, parsed);
       document.dispatchEvent(new Event(''));
   }
   
   
   
   function addTodo() {
  const textTodo = document.getElementById('title').value;
  const timestamp = document.getElementById('date').value;
 
  const generatedID = generateId();
  const todoObject = generateTodoObject(generatedID, textTodo, timestamp, false);
  todos.push(todoObject);
 
  document.dispatchEvent(new Event(RENDER_EVENT));
}


   function logTodos() {
  console.log(todos);
}

    function generateTodoObject(title, author, year, isComplete) {
      return {
        id: +new Date(),
        title,
        author,
        year,
        isComplete
    };
}
    
    function addBook() {
    if (localStorage.getItem('data') === null) {
    localStorage.setItem('data', '[]');
  }
  const inputBookTitle = document.getElementById("bookTitle").value;
  const inputBookAuthor = document.getElementById("bookAuthor").value;
  const inputBookYear = document.getElementById("bookYear").value;
  const inputBookIsComplete = document.getElementById("isComplete").checked;
  
  
    const bookObject = composeBookObject(inputBookTitle, inputBookAuthor, inputBookYear, inputBookIsComplete);
    
    const data = JSON.parse(localStorage.getItem('data'));
    
    data.push(bookObject);
  
    localStorage.setItem('data', JSON.stringify(data));
  
   const book = makeBook(inputBookTitle, inputBookAuthor, inputBookYear, inputBookIsComplete);
  
  book[BOOK_ITEMID] = bookObject.id;
  
  if (inputBookIsComplete == false) {
    incompleteBookshelfList.append(book);
  } else {
    completeBookshelfList.append(book);
  }
}

   function generateId() {
  return +new Date();
}

function generateNewBook(id, bookTitle, inputAuthor, inputYear, isReaded) {
  return {
    id,
    bookTitle,
    inputAuthor,
    inputYear,
    isReaded,
  };
}


   function updateDataToStorage() {

   if (isStorageExist()) {
    saveData();
  }
}

   function makeBook(inputBookTitle, inputBookAuthor, inputBookYear, inputBookIsComplete) {
     const bookTitle = document.createElement("h1");
  bookTitle.innerText = inputBookTitle;
  bookTitle.classList.add("move");

      const authorName = document.createElement("p");
  authorName.innerText = inputBookAuthor;

     const bookYear = document.createElement("p");
      bookYear.innerText = inputBookYear;
     
     const textContainer = document.createElement("div");
  textContainer.classList.add("inner");
  textContainer.append(bookTitle, authorName, bookYear);
     
     const container = document.createElement("div");
          container.classList.add("item", "list-item", "shadow");
          container.append(textContainer);
          container.setAttribute("id", `book-${inputBookTitle}`);
            if (newBook.isReaded) {
    const undoButton = document.createElement("img"); 
    undoButton.setAttribute("src", "assets/undo-outline.svg");
    undoButton.classList.add("undo-button");

    
    undoButton.addEventListener("click", function () {
      if (confirm("Apakah Anda yakin ingin mengubah status buku ini menjadi belum dibaca?")) {
        undoBookTitleFromReaded(inputBookTitle);
       
       alert("Buku telah diubah menjadi belum dibaca!");
      } else {
      alert("Buku telah dibaca.");
      }
    });
    
    container.append(undoButton);
  }
  return container;
}

   function deleteData() {
     if (localStorage.clear('data') == null) {
    var penyimpanan = [];
  }
}


    function addBookTitleToReadList(bookId) {
      const bookTarget = findBook(bookId);
      if (bookTarget == null) return;
  
      bookTarget.isReaded = true;
      saveData();
    }
    
    
    document.addEventListener(EVENT_CHANGE, function () {
       const unReadBooksList = document.getElementById("books-items");
  unReadBooksList.innerHTML = "";

       const unReadBook = document.getElementById("unread-book"); unReadBook.innerText = "";
       const readBook = document.getElementById("read-book"); readBook.innerText = "";
        
        let read = [];
        let unRead = [];
        
        for (const bookItem of books) {
          const bookList = makeBook(bookItem);
        if (bookItem.isReaded) {readBookList.append(bookList);
        
        read.push(bookList);
      readBook.innerText = read.length;
    } else {
      unReadBooksList.append(bookList);
      unRead.push(bookList);
      unReadBook.innerText = unRead.length;
    }
  }
});

   function ifNoList() {
     const bookCount = books.length;
     const container = document.querySelector(".no-list");
     if (bookCount === 0) {
    container.classList.add("picture");
  } else {
    container.classList.remove("picture");
  }
}
   
   

   function totalOfBooks() {
  const totalBooks = document.getElementById("total-books");
  totalBooks.innerHTML = books.length;
}

   function addBookTitleToReadList(bookId) {
     const bookTarget = findBook(bookId);
     if (bookTarget === null) return;
     bookTarget.isRead = true;
  document.dispatchEvent(new Event(EVENT_CHANGE));
  saveData();
}
  
  
   function loadDataFromStorage() {
     const serializedData = localStorage.getItem(STORAGE_KEY);
  const data = JSON.parse(serializedData);

  if (data !== null) {
    books = data;
    document.dispatchEvent(new Event("ondataloaded"));
  }
}

   document.addEventListener(RENDER_EVENT, function () {
  console.log(todos);
});