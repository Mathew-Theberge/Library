const modal = document.querySelector("[data-modal]")
const newBook = document.querySelector(".new-book")

const myLibrary = []

function Book(title, author, pages, isRead) {
	this.title = title
	this.author = author
	this.pages = pages
	this.isRead = isRead
}

function addBooktoLibrary() {
	
}

newBook.addEventListener("click", () => {
	modal.showModal()
})