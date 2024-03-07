// Открытие и закрытие карточек с брендами через кнопку
const brandsBtn = document.querySelector('#brands-btn')
const brandsItems = document.querySelectorAll('.brands__item')

export default brandsBtn.addEventListener('click', function () {
  if (brandsBtn.lastElementChild.textContent === 'Скрыть') {
    let lastBrandsItemsArray

    if (window.innerWidth > 1119) {
      lastBrandsItemsArray = Array.from(brandsItems).slice(-3)
    } else {
      lastBrandsItemsArray = Array.from(brandsItems).slice(-5)
    }

    for (let lastBrandItem of lastBrandsItemsArray) {
      lastBrandItem.style.display = 'none'
    }

    brandsBtn.firstElementChild.style.transform = 'rotate(0deg)'
    brandsBtn.lastElementChild.textContent = 'Показать все'
  } else {
    for (let brandItem of brandsItems) {
      brandItem.style.display = 'block'
    }

    brandsBtn.firstElementChild.style.transform = 'rotate(180deg)'
    brandsBtn.lastElementChild.textContent = 'Скрыть'
  }
})
