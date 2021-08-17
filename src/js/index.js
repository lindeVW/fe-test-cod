// Styles get loaded in js for fast compiling during development
import '../sass/style.scss'

// Import vue and the modal component
import Vue from 'vue/dist/vue.js'
import Modal from './components/Modal.vue'
import Glide from '@glidejs/glide'

const init = () => {
  // Initialize javascript functions
  loadComponent()
  handleHeaderScroll()
  initGlide()
}

const loadComponent = () => {
  new Vue({ // eslint-disable-line no-new
    el: '#vue',
    components: {
      Modal
    }
  })
}

const handleHeaderScroll = () => {
  const $header = document.querySelector('.js-header')
  if ($header) {
    window.addEventListener('scroll', e => {
      if (window.scrollY > (window.innerHeight - 200)) {
        window.requestAnimationFrame(() => {
          $header.classList.add('header--scrolled')
        })
      } else {
        window.requestAnimationFrame(() => {
          $header.classList.remove('header--scrolled')
        })
      }
    })
  }
}

const initGlide = () => {
  const $glideEls = document.querySelectorAll('.js-glide')
  if ($glideEls.length > 0) {
    $glideEls.forEach($glide => {
      const settings = {
        perView: 2,
        gap: 80,
        bound: true,
        breakpoints: {
          991: {
            perView: 1,
            gap: 40
          }
        }
      }

      if ($glide.classList.contains('js-glide-small')) {
        settings.gap = 40
        settings.perView = 3
        settings.breakpoints = {
          991: {
            perView: 2
          },
          767: {
            perView: 1
          }
        }
      }

      const glide = new Glide($glide, settings)

      const $prev = $glide.querySelector('.js-glide-prev')
      if ($prev) {
        $prev.addEventListener('click', () => {
          glide.go('<')
        })
      }

      const $next = $glide.querySelector('.js-glide-next')
      if ($next) {
        $next.addEventListener('click', () => {
          glide.go('>')
        })
      }

      glide.mount()
    })
  }
}

init()
