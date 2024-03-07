// Открытие и закрытие карточек с техникой через кнопку
const equipBtn = document.querySelector('#equip-btn')
const equipList = document.querySelector('.equipment__list')
const equipItems = document.querySelectorAll('.equipment__item')

export default equipBtn.addEventListener('click', function () {
  if (window.innerWidth === 768) {
    if (equipBtn.lastElementChild.textContent === 'Скрыть') {
      equipList.style.flexWrap = 'nowrap'
      equipBtn.lastElementChild.textContent = 'Показать все'
    } else {
      equipList.style.flexWrap = 'wrap'
      equipBtn.lastElementChild.textContent = 'Скрыть'
    }
  } else if (window.innerWidth > 768) {
    let lastEquipItemsArray = Array.from(equipItems).slice(-4)

    if (equipBtn.lastElementChild.textContent === 'Скрыть') {
      for (let lastEquipItem of lastEquipItemsArray) {
        lastEquipItem.style.display = 'none'
      }

      equipBtn.firstElementChild.style.transform = 'rotate(0deg)'
      equipBtn.lastElementChild.textContent = 'Показать все'
    } else {
      for (let lastEquipItem of lastEquipItemsArray) {
        lastEquipItem.style.display = 'block'
      }

      equipBtn.firstElementChild.style.transform = 'rotate(180deg)'
      equipBtn.lastElementChild.textContent = 'Скрыть'
    }
  }
})
