import '../../node_modules/swiper/swiper.scss'
import '../../node_modules/swiper/modules/pagination.scss'

import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'

// Инициализация и управление свайпером
let init = false
let priceSwiper

export default function priceSwiperCard() {
  if (window.innerWidth < 768) {
    if (!init) {
      init = true
      priceSwiper = new Swiper('.price__swiper', {
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
    priceSwiper.destroy()
    init = false
  }
}
