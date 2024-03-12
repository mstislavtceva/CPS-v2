// Открытие и закрытие меню по кнопке бургера
const burgerMain = document.querySelector('.sidebar-main')
const menu = burgerMain.querySelector('.sidebar')
const menuOverlay = burgerMain.querySelector('.overlay')
const burgerOpenBtn = document.querySelector('.burger-btn')
const burgerCloseBtn = document.querySelector('.sidebar__close')

const callModalOpenBtns = document.querySelectorAll('.call-btn')
const feedModalOpenBtns = document.querySelectorAll('.message-btn')
const callModalOpenBtn = document.querySelector('.call-btn')
const messageModalOpenBtn = document.querySelector('.message-btn')

const menuCloseFunc = function () {
  menu.style.display = 'none'
  menu.classList.remove('open-menu')
  menuOverlay.classList.remove('open-overlay')
}

export default function burgerFunc() {
  if (window.innerWidth < 1440) {
    // По кнопке открытия бургера
    burgerOpenBtn.addEventListener('click', function () {
      menu.style.display = 'block'
      menu.classList.add('open-menu')
      menuOverlay.classList.add('open-overlay')
    })

    // По кнопке закрытия бургера
    burgerCloseBtn.addEventListener('click', function () {
      menuCloseFunc()
    })

    // По заблюренной области у бургера
    menuOverlay.addEventListener('click', function () {
      menuCloseFunc()
    })

    // По кнопке звонка
    for (let callModalOpenBtn of callModalOpenBtns) {
      callModalOpenBtn.addEventListener('click', function () {
        menuCloseFunc()
      })
    }

    // По кнопке оставить заявку
    for (let feedModalOpenBtn of feedModalOpenBtns) {
      feedModalOpenBtn.addEventListener('click', function () {
        menuCloseFunc()
      })
    }
  } else {
    menu.style.display = 'block'
  }
}
