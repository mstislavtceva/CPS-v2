// Открытие и закрытие модалок по кнопке бургера
// Модалка заказать звонок
const callMain = document.querySelector('.call-main')
const callModal = callMain.querySelector('.call')
const callOverlay = callMain.querySelector('.overlay')
const callModalOpenBtns = document.querySelectorAll('.call-btn')
const callCloseBtn = document.querySelector('#call-close')

// Модалка обратная связь
const feedMain = document.querySelector('.feedback-main')
const feedModal = feedMain.querySelector('.feedback')
const feedOverlay = feedMain.querySelector('.overlay')
const feedModalOpenBtns = document.querySelectorAll('.message-btn')
const feedCloseBtn = document.querySelector('#feedback-close')

// Бургер и меню
const burgerMain = document.querySelector('.sidebar-main')
const menu = burgerMain.querySelector('.sidebar')
const menuOverlay = burgerMain.querySelector('.overlay')

const menuToggleFunc = function (turn) {
  if (turn) {
    menu.style.display = 'block'
    menu.classList.add('open-menu')
    menuOverlay.classList.add('open-overlay')
  } else {
    menu.style.display = 'none'
    menu.classList.remove('open-menu')
    menuOverlay.classList.remove('open-overlay')
  }
}

const callToggleFunc = function (turn) {
  if (turn) {
    callModal.style.display = 'block'
    callModal.style.zIndex = '200'
    callOverlay.classList.add('open-overlay')
  } else {
    callModal.style.display = 'none'
    callModal.style.zIndex = '2'
    callOverlay.classList.remove('open-overlay')
  }
}

const feedToggleFunc = function (turn) {
  if (turn) {
    feedModal.style.display = 'block'
    feedModal.style.zIndex = '200'
    feedOverlay.classList.add('open-overlay')
  } else {
    feedModal.style.display = 'none'
    feedModal.style.zIndex = '2'
    feedOverlay.classList.remove('open-overlay')
  }
}

export default function modalFunc() {
  // По кнопке звонка
  for (let callModalOpenBtn of callModalOpenBtns) {
    callModalOpenBtn.addEventListener('click', function () {
      menuToggleFunc(false)
      callToggleFunc(true)
    })
  }

  // По кнопке закрытия звонка
  callCloseBtn.addEventListener('click', function () {
    callToggleFunc(false)

    if (window.innerWidth < 768) {
      menuToggleFunc(false)
    } else if (window.innerWidth > 1439) {
      menu.style.display = 'block'
      menu.classList.add('open-menu')
    } else {
      menuToggleFunc(true)
    }
  })

  // По заблюренной области у звонка
  callOverlay.addEventListener('click', function () {
    callToggleFunc(false)

    if (window.innerWidth < 768) {
      menuToggleFunc(false)
    } else if (window.innerWidth > 1439) {
      menu.style.display = 'block'
      menu.classList.add('open-menu')
    } else {
      menuToggleFunc(true)
    }
  })

  // По кнопке заявки
  for (let feedModalOpenBtn of feedModalOpenBtns) {
    feedModalOpenBtn.addEventListener('click', function () {
      menuToggleFunc(false)

      feedToggleFunc(true)
    })
  }

  // По кнопке закрытия заявки
  feedCloseBtn.addEventListener('click', function () {
    feedToggleFunc(false)

    if (window.innerWidth < 768) {
      menuToggleFunc(false)
    } else if (window.innerWidth > 1439) {
      menu.style.display = 'block'
      menu.classList.add('open-menu')
    } else {
      menuToggleFunc(true)
    }
  })

  // По заблюренной области у заявки
  feedOverlay.addEventListener('click', function () {
    feedToggleFunc(false)

    if (window.innerWidth < 768) {
      menuToggleFunc(false)
    } else if (window.innerWidth > 1439) {
      menu.style.display = 'block'
      menu.classList.add('open-menu')
    } else {
      menuToggleFunc(true)
    }
  })
}
