const showList = document.querySelector('#list-link');
const addNew = document.querySelector('#addlink');
const contactInfo = document.querySelector('#contact-link');
const bookSection = document.querySelector('.container');
const mainTitle = document.querySelector('#list-title');
const addSection = document.querySelector('.add-section');
const contact = document.querySelector('#contacts');

function ListDisplay() {
  bookSection.style.display = 'block';
  mainTitle.style.display = 'block';
  addSection.style.display = 'none';
  contact.style.display = 'none';
}

function NewBook() {
  addSection.style.display = 'block';
  contact.style.display = 'none';
  bookSection.style.display = 'none';
  mainTitle.style.display = 'none';
}

function Getinfo() {
  contact.style.display = 'block';
  addSection.style.display = 'none';
  bookSection.style.display = 'none';
  mainTitle.style.display = 'none';
}

showList.addEventListener('click', ListDisplay);
addNew.addEventListener('click', NewBook);
contactInfo.addEventListener('click', Getinfo);
