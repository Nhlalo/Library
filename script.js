const lightMode = document.querySelector('.lightMode');
const darkMode = document.querySelector('.darkMode');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const published = document.querySelector('#published');
const read = document.querySelector('#read');
const bookInforContainer = document.querySelector('.library');
const additionButton = document.querySelector('.bookAddition');
const totalBooksDisplay = document.querySelector('.totalBooks');
const completelyReadBooksDisplay = document.querySelector('.readBooks');
let totalBooks = 4;
let completelyReadBooks = 4;



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

document.querySelector('.bookAddition').addEventListener('click', e => {
  modalWindow.classList.add('modal-window-visibility');
  overLayOut.classList.add('overLayOut-visibility')
  e.target.classList.add('bookAddition-visibility')

})

document.querySelector('.fa-close').addEventListener('click', () => {
  modalWindow.classList.remove('modal-window-visibility');
  overLayOut.classList.remove('overLayOut-visibility');
  document.querySelector('.bookAddition').classList.remove('bookAddition-visibility')
})

function createBooks(title,author,pages,published,read){
  this.title =title;
  this.author = author;
  this.pages = pages;
  this.published = published;
  this.read = read;
}

const userLibrary = [
  {title:'The Lord of the Rings', author:'J.R.R Tolkien',pages: '423',published:'1955-10-20',read: 'Read'},
  {title:'Life of Pi', author:'Yann Martel',pages: '354',published:'2001-09-11',read: 'Read'},
  {title:'The Great Gatsby', author:'F. Scott Fitzgerald',pages: '163',published:'1925-04-10',read: 'Read'},
  {title:'The Hobbit', author:'J.R.R Tolkien',pages: '310',published:'1937-09-10',read: 'Read'}
];

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

      completelyReadBooks++;
      completelyReadBooksDisplay.textContent = completelyReadBooks;
    }else{
      newDiv.setAttribute('id', 'notRead')

    }

const inputChecked = document.querySelector('.toggleLabel input[type="checkbox"]');

    const toggleLabelParent = inputChecked.parentElement.parentElement;
    inputChecked.addEventListener('click', (e) =>{
      if(e.target.checked == false){
       toggleLabelParent.setAttribute('id', 'notRead')
       const indexOfArray = userLibrary.findIndex(user => user.title == `${ inputChecked.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent}`)
       userLibrary[indexOfArray].read = 'Not Read';
       completelyReadBooks--;
       completelyReadBooksDisplay.textContent = completelyReadBooks;
      
      }else{
        toggleLabelParent.removeAttribute('id', 'notRead')
        const indexOfArray = userLibrary.findIndex(user => user.title == `${ inputChecked.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent}`)
         userLibrary[indexOfArray].read = 'Read';
         completelyReadBooks++;
         completelyReadBooksDisplay.textContent = completelyReadBooks;

      }
    }
    )


   const faClose =  document.querySelector('.fa-close2');
  
     faClose.addEventListener('click', () => {
      console.log(faClose.nextElementSibling)
      bookInforContainer.removeChild(faClose.parentElement)
      const indexOfArray = userLibrary.findIndex(user => user.title == `${faClose.nextElementSibling.textContent}`)
      userLibrary.splice(indexOfArray,1)
      totalBooks--;
      totalBooksDisplay.textContent = completelyReadBooks;
      if(e.target.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.checked == true){
        completelyReadBooks--;
        completelyReadBooksDisplay.textContent = completelyReadBooks;
     }
     
     
    })


 
    
  
}

document.querySelector('.newBook').addEventListener('click', e => {
  modalWindow.classList.remove('modal-window-visibility');
  overLayOut.classList.remove('overLayOut-visibility');
 if(title.value.length > 0 && author.value.length > 0 && !isNaN(pages.value) && published.value.length > 0){
  addBookToLibrary()
  addInforDetail()
  totalBooks++;
  totalBooksDisplay.textContent = totalBooks;
  document.querySelector('.bookAddition').classList.remove('bookAddition-visibility')
}
console.log(userLibrary)
  title.value = ''
  author.value = '';
  pages.value = '';
  published.value = '';
  read.checked = false;
})

const inputCheckeds = document.querySelectorAll('.toggleLabel input[type="checkbox"]');
inputCheckeds.forEach(inputChecked => {
    const toggleLabelParent = inputChecked.parentElement.parentElement;
    inputChecked.addEventListener('click', (e) =>{
      if(e.target.checked == false){
        toggleLabelParent.setAttribute('id', 'notRead')
        const indexOfArray = userLibrary.findIndex(user => user.title == `${ inputChecked.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent}`)
        userLibrary[indexOfArray].read = 'Not Read';
        completelyReadBooks--;
        completelyReadBooksDisplay.textContent = completelyReadBooks;
     
      }else{
        toggleLabelParent.removeAttribute('id', 'notRead')
        const indexOfArray = userLibrary.findIndex(user => user.title == `${ inputChecked.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent}`)
         userLibrary[indexOfArray].read = 'Read';
         completelyReadBooks++;
         completelyReadBooksDisplay.textContent = completelyReadBooks;
     
      }
    }
    )
  })

 
  document.querySelectorAll('.fa-close2').forEach( deleteBookInfor => {
    const bookInforDeletion = deleteBookInfor.parentElement;
    deleteBookInfor.addEventListener('click', (e) => {
      bookInforContainer.removeChild(bookInforDeletion)
      const indexOfArray = userLibrary.findIndex(user => user.title == `${deleteBookInfor.nextElementSibling.textContent}`)
      userLibrary.splice(indexOfArray,1)
      totalBooks--;
      totalBooksDisplay.textContent = totalBooks;
      if(deleteBookInfor.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.checked == true){
         completelyReadBooks--;
         completelyReadBooksDisplay.textContent = completelyReadBooks;
      }
    })
  
  })

 


