const modal = document.querySelector("[data-modal]")
const newBook = document.querySelector(".new-book")
const form = document.querySelector("form")
const myLibrary = []

function Book(title, author, pages, isRead) {
	this.title = title
	this.author = author
	this.pages = pages
	this.isRead = isRead
}

function addBooktoLibrary(e) {
	e.preventDefault()
	const formData = new FormData(form)
	const formDataObj = Object.fromEntries(formData)
	myLibrary.push(formDataObj)
	form.reset()
	modal.close()
	console.log(myLibrary)
}

newBook.addEventListener("click", () => {
	modal.showModal()
})

form.addEventListener("submit", addBooktoLibrary)

