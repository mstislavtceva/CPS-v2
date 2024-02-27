import '../scss/style.scss'
import '../../node_modules/swiper/swiper.scss'
import '../../node_modules/swiper/modules/pagination.scss'

import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'
import brandsBtn from './brandsBtn.js'

// Инициализация и управление свайпером
let init = false
let swiper

function swiperCard() {
  if (window.innerWidth < 768) {
    if (!init) {
      init = true
      swiper = new Swiper('.swiper', {
        modules: [Pagination],

        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: '16px',

        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      })
    }
  } else if (init) {
    swiper.destroy()
    init = false
  }
}
swiperCard()
window.addEventListener('resize', swiperCard)

console.log('Works!')
