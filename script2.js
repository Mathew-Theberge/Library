const myLibrary = []

function Book(title, author, pages, isRead, id) {
	this.title = title
	this.author = author
	this.pages = pages
	this.isRead = isRead
    this.id = id
}

function addBooktoLibrary(title, author, pages, isRead, id) {
    const book = new Book(title, author, pages, isRead, id)
    myLibrary.push(book)
}

addBooktoLibrary(1, 2, 3, 4, 5)
console.log(myLibrary)
addBooktoLibrary(11, 22, 33, 44, 55)
console.log(myLibrary)
addBooktoLibrary(15, 24, 33, 42, 51)
console.log(myLibrary)