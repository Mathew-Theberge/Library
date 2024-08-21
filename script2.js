const cardContainer = document.querySelector(".card-container")
const newBook = document.querySelector(".new-book")
const modal = document.querySelector("[data-modal]")
const form = document.querySelector("form")

const myLibrary = []
let number = 0

function Book(title, author, pages, isRead, id) {
	this.title = title
	this.author = author
	this.pages = pages
	this.isRead = isRead
    this.id = id
}

function addBooktoLibrary(title, author, pages, isRead) {
    id = number
    ++number
    const book = new Book(title, author, pages, isRead, id)
    myLibrary.push(book)
}

function displayBooks() {
    while(cardContainer.firstChild) {
        cardContainer.removeChild(cardContainer.firstChild)
    }
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
        if (book.isRead === "true") {
            isReadBtn.classList.add("read-btn")
            isReadBtn.textContent = "Read"
        } else {
            isReadBtn.classList.add("not-read-btn")
            isReadBtn.textContent = "Not Read"
        }
        div.append(isReadBtn)
    })
}

newBook.addEventListener("click", () => {
    modal.showModal()
} )

form.addEventListener("submit", (e) => {
    e.preventDefault()
	const formData = new FormData(form)
	const formDataObj = Object.fromEntries(formData)
    addBooktoLibrary(
        formDataObj.book_title,
        formDataObj.book_author,
        formDataObj.book_pages,
        formDataObj.is_read,
        formDataObj.id
    )
    displayBooks()
    form.reset()
    modal.close()
})

addBooktoLibrary(1, 2, 3, true, 5)
console.log(myLibrary)
addBooktoLibrary(11, 22, 33, false, 55)
console.log(myLibrary)
addBooktoLibrary(15, 24, 33, true, 51)
console.log(myLibrary)

displayBooks()