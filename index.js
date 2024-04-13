const bookDialog = document.getElementById('bookDialog');
const titleInput = document.getElementById('titleInput');
const authorInput = document.getElementById('authorInput');
const pagesInput = document.getElementById('pagesInput');
const newBookBtn = document.getElementById('newBook');
const addBookBtn = document.getElementById('addBookBtn');
const booksDiv = document.getElementById('books');

const myLibrary = [];

newBookBtn.addEventListener('click', () => {
    bookDialog.show();
})

addBookBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const id = myLibrary.length + 1;
    const title = titleInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;
    const read = document.querySelector('input[name="read"]:checked').value;
    
    const book = new Book(id, title, author, pages, read);
    addBookToLibrary(book);
    bookDialog.close();
    clearBooks();
    displayBooks();
})





function Book(id, title, author, pages, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function displayBooks() {
    myLibrary.forEach((book) => {
        booksDiv.innerHTML += `<div class="books" id="${book.id}">
        <h3>${book.title}</h3>
        <p>${book.author}</p>
        <p>${book.pages}</p>
        <p>Have Read: ${book.read}</p>
        <button id="removeBook" class="removeBtn>Remove Book</button>
        </div>`;
    })
}

function addBookToLibrary(b) {
    myLibrary.push(b);
}



function removeBook(elem) {
    const parentId = elem.parentNode.id;
    const parent = document.getElementById(parentId);
    parent.remove();
}

function clearBooks() {
    booksDiv.innerHTML = '';
}