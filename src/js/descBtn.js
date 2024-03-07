// Открытие и закрытие текста описания по кнопке
const describeBtn = document.querySelector('#describe-btn')
const describeText = document.querySelector('.describe__parag')

export default describeBtn.addEventListener('click', function () {
  if (describeBtn.lastElementChild.textContent === 'Скрыть') {
    if (window.innerWidth < 768) {
      describeText.style.height = '110px'
    } else if (window.innerWidth < 1120 && window.innerWidth > 767) {
      describeText.style.height = '160px'
    } else if (window.innerWidth > 1119 && window.innerWidth < 1390) {
      describeText.style.height = '175px'
    }

    describeBtn.firstElementChild.style.transform = 'rotate(0deg)'
    describeBtn.lastElementChild.textContent = 'Читать далее'
  } else {
    if (window.innerWidth < 768) {
      describeText.style.height = '100%'
    } else if (window.innerWidth < 1120 && window.innerWidth > 767) {
      describeText.style.height = '90%'
    } else if (window.innerWidth > 1119 && window.innerWidth < 1390) {
      describeText.style.height = '80%'
    }

    describeBtn.firstElementChild.style.transform = 'rotate(180deg)'
    describeBtn.lastElementChild.textContent = 'Скрыть'
  }
})
