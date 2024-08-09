const booksGrid = document.getElementById('books-grid');


// Create an array to store Book objects
const library = [{
    title: 'Full Stack Web Development: The Comprehensive Guide',
    author: 'Philip Ackermann',
    pages: 740,
    read: false,
    image: 'https://m.media-amazon.com/images/I/7127pava55L._SY522_.jpg',
    description: 'Full stack web developers are always in demand—do you have the skillset? Between these pages you’ll learn to design websites with CSS, structure them with HTML, and add interactivity with JavaScript.',
},
{
    title: 'Mastering Node.js Web Development',
    author: 'Adam Freeman',
    pages: 778,
    read: false,
    image: 'https://m.media-amazon.com/images/I/81qzUSU4pzL._SY522_.jpg',
    description: 'Unlock the full potential of Node.js with practical skills to develop and deploy scalable and high-performance server-side applications that enhance your client-side projects',
},
{
    title: 'PHP & MySQL: Server-side Web Development',
    author: 'Jon Duckett',
    pages: 672,
    read: false,
    image: 'https://m.media-amazon.com/images/I/61KLW4yTnbL._SY522_.jpg',
    description: 'Learn PHP, the programming language used to build sites like Facebook, Wikipedia and WordPress, then discover how these sites store information in a database (MySQL) and use the database to create the web pages.',
},
];

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.info = () => {
        console.log(`${title} by ${author}, ${pages} pages, ${read}`);
    }
}

function addBookToLibrary() {
    // Get the book info from the user
    const newBook = {};
}

function displayBooks(arr) {
    // Loop through the array
    arr.forEach(item => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        const content = `
        <div class="book-card__image"><img src="${item.image}"/></div>
        <h3 class="book-card__title">${item.title}</h3>
        <p class="book-card__description">${item.description}</p>
        <div class="container book-card__meta">
            <div class="book-card__pages">Pages: ${item.pages}</div>
            <div class="book-card__read">Has Read: ${item.read}</div>
        </div>
        `
        bookCard.innerHTML += content;
        booksGrid.appendChild(bookCard);
    });
}

displayBooks(library);

let theHobbit = new Book("The Hobbit", "Jason Delgado", 295, "has not read" );

