// creating constructor
function Book(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;

}
// display constructor
function Display() {

}

// add function to display prototype

Display.prototype.add = function (book) {
  // console.log("adding")
  let tableBody = document.getElementById('tableBody')
  let uiString = `<tr>
                  <th scope="row">-</th>
                  <td>${book.name}</td>
                  <td>${book.author}</td>
                  <td>${book.type}</td>
                </tr>`;

  tableBody.innerHTML += uiString


};



Display.prototype.clear = function () {
  let libraryForm = document.getElementById('libraryForm');
  libraryForm.reset();
}
// implementing validate function

Display.prototype.validate = function (book) {
  if (book.name.length < 2 || book.author.length < 2) {
    return false;
  }
  else {
    return true;
  }

}

Display.prototype.show = function (type, displayMessage) {
  let message = document.getElementById('message');
  message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                        <strong>${type}:</strong> ${displayMessage}
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      </div>`
  setTimeout(function () {
    message.innerHTML = ''
  }, 2000);
}






// add submit buttom event listener


let libraryForm = document.getElementById('libraryForm');

libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {

  let name = document.getElementById('bookName').value
  let author = document.getElementById('author').value
  let type;
  let fiction = document.getElementById('fiction')
  let programming = document.getElementById('programming')
  let other = document.getElementById('other')

  if (fiction.checked) {
    type = fiction.value;
  }
  else if (programming.checked) {
    type = programming.value;

  }
  else if (other.checked) {
    type = other.value
  }

  e.preventDefault();
  let book = new Book(name, author, type)
  // console.log(book)
  // console.log("added book");
  let display = new Display();

  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.show('success', ' your book is successfully added');

  }
  else {
    display.show('danger', '-Sorry you cannot add this book')
  }




}