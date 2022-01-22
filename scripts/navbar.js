const ShowList = document.querySelector('#list-link');
const AddNew = document.querySelector('#addlink');
const ContactInfo = document.querySelector('#contact-link');
const BookSection = document.querySelector('.container');
const MainTitle = document.querySelector('#list-title');
const AddSection = document.querySelector('.add-section');
const Contact = document.querySelector('#contacts');

function ListDisplay() {
  BookSection.style.display = 'block';
  MainTitle.style.display = 'block';
  AddSection.style.display = 'none';
  Contact.style.display = 'none';
}

function NewBook() {
  AddSection.style.display = 'block';
  Contact.style.display = 'none';
  BookSection.style.display = 'none';
  MainTitle.style.display = 'none';
}

function Getinfo() {
  Contact.style.display = 'block';
  AddSection.style.display = 'none';
  BookSection.style.display = 'none';
  MainTitle.style.display = 'none';
}

ShowList.addEventListener('click', ListDisplay);
AddNew.addEventListener('click', NewBook);
ContactInfo.addEventListener('click', Getinfo);