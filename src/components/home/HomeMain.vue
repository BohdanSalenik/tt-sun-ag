<template>
  <main class="main" id="main">
    <div class="wrapper">
      <section class="projects">
        <MobileNavSticky />
        <div class="projects-control">
          <h2 class="projects__title">Проекты</h2>
          <div class="projects__filters">
            <button 
              type="button"
              data-filter="all"
              @click="showAll"
              :class="['projects__btn', {'projects__btn--active': filter === 'all'}]"
            >
              Усі
            </button>
            <button 
              type="button" 
              data-filter="finance"
              @click="sortByFinance"
              :class="['projects__btn', {'projects__btn--active': filter === 'finance'}]"
            >
              фінанси
            </button>
            <button 
              type="button" 
              data-filter='realty'
              @click="sortByRealty"
              :class="['projects__btn', {'projects__btn--active': filter === 'realty'}]"
            >
              нерухомість
            </button>
          </div>
        </div>

        <ProjectBlock 
          v-for="(block, i) in sortedBlocks.slice(startIndex, lastIndex)"
          :key="block.id"
          :index="i"
          :imgSrc="block.img"
          :title="block.title"
          :address="block.address"
          :client="block.client"
          :modificator="block.color"
          :stripText="block.stripText"
          :svgColor="block.svgColor"
          :id="block.id"
        />
        <Pagination 
          :perPage="perPage" 
          :startIndex="startIndex" 
          :length="Math.ceil(sortedBlocks.length / perPage)"
          :nextPage="nextPage"
          :prevPage="prevPage"
        />
        <ContactForm />
      </section>
    </div>
  </main>
</template>

<script>
import ProjectBlock from './ProjectBlock.vue';
import Pagination from './Pagination.vue';
import ContactForm from './ContactForm.vue';
import MobileNavSticky from '../MobileNavSticky.vue';
export default {
  components: {
    ProjectBlock,
    Pagination,
    ContactForm,
    MobileNavSticky,
  },
  computed: {
    blocks() {
      return this.$store.state.blocks;
    }
  },
  data() {
    return {
      filter: 'all',
      sortedBlocks: [...this.$store.state.blocks],
      perPage: window.innerWidth <= 500 ? 3 : 4,
      lastIndex: window.innerWidth <= 500 ? 3 : 4,
      startIndex: 0,
    }
  },
  methods: {
    resetIndex() {
      this.lastIndex = window.innerWidth <= 500 ? 3 : 4;
      this.perPage = window.innerWidth <= 500 ? 3 : 4,
      this.startIndex = 0;
      this.$store.commit('resetCurrentPage');
    },
    changeFilter(e) {
      this.filter = e.target.getAttribute('data-filter')
    },
    sortByRealty(e) {
      this.changeFilter(e);
      this.sortedBlocks = this.blocks.filter(block => block.category === 'realty')
      this.resetIndex();
    },
    sortByFinance(e) {
      this.changeFilter(e);
      this.sortedBlocks = this.blocks.filter(block => block.category === 'finance')
      this.resetIndex();
    },
    showAll(e) {
      this.changeFilter(e);
      this.sortedBlocks = [...this.$store.state.blocks];
      this.resetIndex();
    },
    nextPage() {
      if(this.startIndex + this.perPage >= this.sortedBlocks.length) {
        return;
      }
      this.startIndex += this.perPage;
      this.lastIndex += this.perPage;
    },
    prevPage() {
      if (this.startIndex - this.perPage < 0) {
        return;
      }
      this.startIndex -= this.perPage;
      this.lastIndex -= this.perPage;
    }
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.resetIndex();
    })
  }
}
</script>

<style scoped>

</style>