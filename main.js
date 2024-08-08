function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.info = () => {
        console.log(`${title} by ${author}, ${pages} pages, ${read}`);
    }
}

let theHobbit = new Book("The Hobbit", "Jason Delgado", 295, "has not read" );

theHobbit.info();