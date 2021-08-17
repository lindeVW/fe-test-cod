<template>
  <div>
    <button type="button" @click="openModal" class="nav__link">Login</button>
    <div class="modal" :class="{ 'modal--open': modal }">
      <div class="modal__backdrop" @click="closeModal"></div>
      <div class="container">
        <div class="modal__content">
          <button
            type="button" class="modal__button"
            aria-label="close"
            @click="closeModal"
          ></button>
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExampleComponent',
  data () {
    return {
      modal: false
    }
  },
  methods: {
    openModal () {
      this.modal = true
    },
    closeModal () {
      this.modal = false
    }
  }
}
</script>
