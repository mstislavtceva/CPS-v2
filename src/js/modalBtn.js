// Открытие и закрытие модалок по кнопке бургера
const callMain = document.querySelector('.call-main')
const callModal = callMain.querySelector('.call')
const callOverlay = callMain.querySelector('.overlay')
const callModalOpenBtns = document.querySelectorAll('.call-btn')
const callCloseBtn = document.querySelector('#call-close')

const feedMain = document.querySelector('.feedback-main')
const feedModal = feedMain.querySelector('.feedback')
const feedOverlay = feedMain.querySelector('.overlay')
const feedModalOpenBtns = document.querySelectorAll('.message-btn')
const feedCloseBtn = document.querySelector('#feedback-close')

export default function modalFunc() {
  // По кнопке звонка
  for (let callModalOpenBtn of callModalOpenBtns) {
    callModalOpenBtn.addEventListener('click', function () {
      callModal.style.display = 'block'
      callModal.style.zIndex = '200'
      callOverlay.classList.add('open-overlay')
    })
  }

  // По кнопке закрытия звонка
  callCloseBtn.addEventListener('click', function () {
    callModal.style.display = 'none'
    callModal.style.zIndex = '2'
    callOverlay.classList.remove('open-overlay')
  })

  // По заблюренной области у звонка
  callOverlay.addEventListener('click', function () {
    callModal.style.display = 'none'
    callModal.style.zIndex = '2'
    callOverlay.classList.remove('open-overlay')
  })

  // По кнопке заявки
  for (let feedModalOpenBtn of feedModalOpenBtns) {
    feedModalOpenBtn.addEventListener('click', function () {
      feedModal.style.display = 'block'
      feedModal.style.zIndex = '200'
      feedOverlay.classList.add('open-overlay')
    })
  }

  // По кнопке закрытия заявки
  feedCloseBtn.addEventListener('click', function () {
    feedModal.style.display = 'none'
    feedModal.style.zIndex = '2'
    feedOverlay.classList.remove('open-overlay')
  })

  // По заблюренной области у заявки
  feedOverlay.addEventListener('click', function () {
    feedModal.style.display = 'none'
    feedModal.style.zIndex = '2'
    feedOverlay.classList.remove('open-overlay')
  })
}
