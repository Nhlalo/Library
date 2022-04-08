const lightMode = document.querySelector('.lightMode');
const darkMode = document.querySelector('.darkMode');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const published = document.querySelector('#published');
const read = document.querySelector('#read');
const bookInforContainer = document.querySelector('.library');

lightMode.addEventListener('click', () => {
  lightMode.classList.add('FA-visibility');
  darkMode.classList.remove('FA-visibility')
  document.body.removeAttribute('id', 'darkMode')
})
darkMode.addEventListener('click', () => {
  lightMode.classList.remove('FA-visibility');
  darkMode.classList.add('FA-visibility');
  document.body.setAttribute('id', 'darkMode')
})

const modalWindow = document.querySelector('.modal-window');
const overLayOut = document.querySelector('.overLayOut')

document.querySelector('.bookAddition').addEventListener('click', () => {
  modalWindow.classList.add('modal-window-visibility');
  overLayOut.classList.add('overLayOut-visibility')

})

document.querySelector('.fa-close').addEventListener('click', () => {
  modalWindow.classList.remove('modal-window-visibility');
  overLayOut.classList.remove('overLayOut-visibility');
})

function createBooks(title,author,pages,published,read){
  this.title =title;
  this.author = author;
  this.pages = pages;
  this.published = published;
  this.read = read;
}

const userLibrary = [];

function addBookToLibrary(){
if(read.checked == true ){
   const readStatus = 'read';

  userLibrary.unshift( new createBooks(title.value,author.value,pages.value,published.value, readStatus))
}else{
  const readStatus = 'Not read';
  userLibrary.unshift( new createBooks(title.value,author.value,pages.value,published.value, readStatus))
}
}

function addInforDetail(){
  const newDiv = document.createElement('div');
  bookInforContainer.insertBefore(newDiv, bookInforContainer.firstElementChild);
  const fontAwesomeClose = document.createElement('i');
  newDiv.appendChild(fontAwesomeClose)
  fontAwesomeClose.classList.add('fa', 'fa-close', 'fa-close2')
  const newh2 = document.createElement('h2')
  newDiv.appendChild(newh2)
  newh2.textContent = `${userLibrary[0].title}`;
  const newSpan1 = document.createElement('span')
  newDiv.appendChild(newSpan1)
  newSpan1.textContent = `By: ${userLibrary[0].author}`
  const newSpan2 = document.createElement('span')
  newDiv.appendChild(newSpan2)
  newSpan2.textContent =`Number of pages: ${userLibrary[0].pages}`
  const newSpan3 = document.createElement('span')
  newDiv.appendChild(newSpan3)
  newSpan3.textContent = `Published: ${userLibrary[0].published}`
  const newLabel = document.createElement('label')
  newLabel.textContent = 'Mark as read'
  newDiv.appendChild(newLabel)
  newLabel.classList.add('toggleLabel')
  const newCheckbox = document.createElement('input')
  newCheckbox.setAttribute('type', 'checkbox')
  newLabel.appendChild(newCheckbox)
  const newDiv2 = document.createElement('div')
  newLabel.appendChild(newDiv2)
  newDiv2.classList.add('toggle-fill')

    if(read.checked == true){
      newCheckbox.click()
      newCheckbox.checked == true;
    }

const inputCheckeds = document.querySelectorAll('.toggleLabel input[type="checkbox"]');
inputCheckeds.forEach(inputChecked => {
    const toggleLabelParent = inputChecked.parentElement.parentElement;
      if(inputChecked.checked == false){
       toggleLabelParent.setAttribute('id', 'notRead')
      }else{
        toggleLabelParent.removeAttribute('id', 'notRead')
      }
  })

inputCheckeds.forEach(inputChecked => {
    const toggleLabelParent = inputChecked.parentElement.parentElement;
    inputChecked.addEventListener('click', () =>{
      if(inputChecked.checked == false){
       toggleLabelParent.setAttribute('id', 'notRead')
       const tip = userLibrary.findIndex(user => user.title == `${ inputChecked.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent}`)
       userLibrary[tip].read = 'Not Read';
      }else{
        toggleLabelParent.removeAttribute('id', 'notRead')
        const tip = userLibrary.findIndex(user => user.title == `${ inputChecked.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent}`)
         userLibrary[tip].read = 'Read';
      }
    }
    )
  })

    fontAwesomeClose.addEventListener('click', () => {
      bookInforContainer.removeChild(fontAwesomeClose.parentElement)
    })
  
}

document.querySelector('.newBook').addEventListener('click', e => {
  modalWindow.classList.remove('modal-window-visibility');
  overLayOut.classList.remove('overLayOut-visibility');
 if(title.value.length > 0 && author.value.length > 0 && !isNaN(pages.value) && published.value.length > 0){
  addBookToLibrary()
  addInforDetail()
}
  title.value = ''
  author.value = '';
  pages.value = '';
  published.value = '';
  read.checked = false;
 
})

const inputCheckeds = document.querySelectorAll('.toggleLabel input[type="checkbox"]');
inputCheckeds.forEach(inputChecked => {
    const toggleLabelParent = inputChecked.parentElement.parentElement;
    inputChecked.addEventListener('click', () =>{
      if(inputChecked.checked == false){
       toggleLabelParent.setAttribute('id', 'notRead')
      }else{
        toggleLabelParent.removeAttribute('id', 'notRead')
      }
    }
    )
  })

  document.querySelectorAll('.fa-close2').forEach( deleteBookInfor => {
    const bookInforDeletion = deleteBookInfor.parentElement;
    deleteBookInfor.addEventListener('click', () => {
      bookInforContainer.removeChild(bookInforDeletion)
    })
  
  })

 
 