<template>
  <div class="wrapper wrapper--project">
    <h1 :class="['mb20', 'mt20',]">
      {{block.title}} 
      <span>ID: {{block.id}}
      </span>
    </h1>  
    <img :src="path(block.img)" :alt="block.title" class="mb20 img">
    <button type="button" @click="goHome">
      Back
    </button>
  </div>
</template>

<script>
export default {
  props: ['block'],
  methods: {
  path(img) {
    return require('../../assets/blocks-images/' + img)
  },
  goHome() {
    this.$router.push('/')
  }
  }
}
</script>

<style lang="scss" scoped>
  img {
    width: 100%;
  }
  .mb20 {
    margin-bottom: 20px;
  }
  .mt20 {
    margin-top: 20px;
  }
  .bgColor {
    height: 30px;
    width: 100%;
    &--blue {
      background: #77A0E2;
    }
    &--green {
      background: #6FCF97;
    }
  }
  button {
    cursor: pointer;
    padding: 14px 50px;
    color: #fff;
    background-color: #000;
    border-radius: 50px;
  }
</style>