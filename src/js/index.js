import '../scss/style.scss'

import modalFunc from './modalBtn.js'
import burgerFunc from './burger.js'
import descBtn from './descBtn.js'
import brandsBtn from './brandsBtn.js'
import equipBtn from './equipBtn.js'
import brandsSwiperCard from './brandsSwiper.js'
import equipSwiperCard from './equipSwiper.js'
import priceSwiperCard from './priceSwiper.js'

// Вызов слайдера из секции brands
brandsSwiperCard()
window.addEventListener('resize', brandsSwiperCard)

// Вызов слайдера из секции equipment
equipSwiperCard()
window.addEventListener('resize', equipSwiperCard)

// Вызов слайдера из секции price
priceSwiperCard()
window.addEventListener('resize', priceSwiperCard)

// Проверка работы
console.log('Works!')

// Бургер функция
burgerFunc()
window.addEventListener('resize', burgerFunc)

// Модалки функция
modalFunc()
