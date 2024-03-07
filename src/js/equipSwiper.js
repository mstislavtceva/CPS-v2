import '../../node_modules/swiper/swiper.scss'
import '../../node_modules/swiper/modules/pagination.scss'

import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'

// Инициализация и управление свайпером
let init = false
let swiper

export default function equipSwiperCard() {
  if (window.innerWidth < 768) {
    if (!init) {
      init = true
      swiper = new Swiper('.equipment__swiper', {
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
