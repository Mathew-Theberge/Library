const cardContainer = document.querySelector(".card-container")


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

function displayBooks() {
    myLibrary.forEach( (book) => {
        const div = document.createElement("div")
        div.classList.add("card")
        cardContainer.append(div)
        const title = document.createElement("div")
        title.textContent = book.title
        div.append(title)
        const author = document.createElement("div")
        author.textContent = book.author
        div.append(author)
        const pages = document.createElement("div")
        pages.textContent = book.pages
        div.append(pages)
        const isReadBtn = document.createElement("button")
        isReadBtn.textContent = book.isRead
        if (isReadBtn === "true") {
            isReadBtn.classList.add("read-btn")
        } else {
            isReadBtn.classList.add("not-read-btn")
        }
        div.append(isReadBtn)
    })
}

addBooktoLibrary(1, 2, 3, true, 5)
console.log(myLibrary)
addBooktoLibrary(11, 22, 33, false, 55)
console.log(myLibrary)
addBooktoLibrary(15, 24, 33, true, 51)
console.log(myLibrary)

displayBooks()