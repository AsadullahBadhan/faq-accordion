const accHeaders = document.querySelectorAll('.accordion-header');

accHeaders.forEach(element => {
  element.addEventListener('click', showAnswer)
})

function showAnswer(evt) {
  evt.currentTarget.classList.toggle('active');
  evt.currentTarget.nextElementSibling.classList.toggle('active');
}