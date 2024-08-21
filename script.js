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
        const card = document.createElement("div")
        card.classList.add("card")
        cardContainer.append(card)
        const title = document.createElement("div")
        title.textContent = book.title
        card.append(title)
        const author = document.createElement("div")
        author.textContent = book.author
        card.append(author)
        const pages = document.createElement("div")
        pages.textContent = book.pages
        card.append(pages)
        const isReadBtn = document.createElement("button")
        if (book.isRead === "true") {
            isReadBtn.classList.add("read-btn")
            isReadBtn.textContent = "Read"
        } else {
            isReadBtn.classList.add("not-read-btn")
            isReadBtn.textContent = "Not Read"
        }
        isReadBtn.addEventListener("click", () => {
            if (isReadBtn.matches(".read-btn")) {
                isReadBtn.classList.remove("read-btn")
                isReadBtn.classList.add("not-read-btn")
                isReadBtn.textContent = "Not Read"
                book.isRead = null
            } else {
                isReadBtn.classList.remove("not-read-btn")
                isReadBtn.classList.add("read-btn")
                isReadBtn.textContent = "Read"
                book.isRead = "true"
            }
        })
        card.append(isReadBtn)

        const deleteBtn = document.createElement("button")
        deleteBtn.textContent = "Remove Book"
        card.append(deleteBtn)

        deleteBtn.addEventListener("click", () => {
            myLibrary.splice(book.id, 1)
            card.remove()
            // resets id values on all remaining objects after deletion
            // in order to re alighn id values to array indexes
            number = 0
            myLibrary.forEach( (book) => {
                book.id = number
                ++number
            })
        })
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

modal.addEventListener("click", e => {
    const dialogDimensions = modal.getBoundingClientRect()
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
    modal.close()
    form.reset()
    }
  })