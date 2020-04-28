<template>
  <div class="wrapper--pagination">
    <div class="pagination">
      <button 
        class="pagination__btn pagination__btn--prev" 
        @click="() => changePagePrev(-1)"
      >
        <div class="arrow-left"></div>
      </button>
      <ul class="pagination__list">
        <li 
          v-for="(page, i) in length"
          :key="page + 1"
          :class="['pagination__item', {'pagination__item--active': i === currentPage}]"
        >
          {{page}}
        </li>
      </ul>
      <button 
        class="pagination__btn pagination__btn--next" 
        @click="() => changePageNext(1)"
      >
        <div class="arrow-right"></div>
      </button>
  </div>
  </div>
</template>

<script>
export default {
  props:['length', 'nextPage', 'prevPage'],
  computed: {
    currentPage() {
      return this.$store.state.currentPage;
    }
  },
  methods: {
    changePageNext(val) {
      if (this.currentPage === this.length - 1) {
        return;
      }
      this.nextPage();
      this.$store.commit('changeCurrentPage', val);
    },
    changePagePrev(val) {
      if (this.currentPage === 0) {
        return;
      }
      this.prevPage();
      this.$store.commit('changeCurrentPage', val);
    },
  }
}
</script>

<style lang="scss" scoped>
  .pagination {
    display: flex;
    align-items: center;
    padding-top: 28px;
    margin-bottom: 133.5px;
    @media screen and (max-width: 450px) {
      width: 314px;
      justify-content: space-between;
      padding: 0;
      margin-bottom: 50px;
    }
    &__list {
      display: flex;
    }
    &__item {
      cursor: pointer;
      margin-right: 20px;
      font-family: Montserrat;
      font-style: normal;
      font-weight: bold;
      font-size: 22px;
      line-height: 122%;
      transition: color 0.3s ease-in-out;

      letter-spacing: 0.29em;
      color: rgba(69, 68, 78, 0.4);
      &:hover {
        color: rgba(69, 68, 78, 0.9);
      }
      &:last-child {
        margin-right: 0;
      }
      &--active {
        color: #56CCF2;
        &:hover {
          color: #56CCF2;
        }
      }
    }
    &__btn {
      cursor: pointer;
      width: 50px;
      height: 50px;
      background: #56CCF2;
      &--prev {
        position: relative;
        margin-right: 105px;
        @media screen and (max-width: 450px) {
          margin: 0;
        }
      }
      &--next {
        position: relative;
        margin-left: 105px;
        @media screen and (max-width: 450px) {
          margin: 0;
        }
      }
      &:hover {
        background: linear-gradient(212.13deg, #84B0C7 0%, #56CCF2 100%);
      }
    }
  }

  .arrow-right,
  .arrow-left {
    display: block;
    width: 15px;
    height: 15px;
    border-top: 1px solid #fff;
    border-left: 1px solid #fff;
  }
  .arrow-right {
    margin: 15px 14px;
    transform: rotate(135deg);
  }

  .arrow-left {
    margin: 15px 22px;
    transform: rotate(-45deg);
  }
</style>