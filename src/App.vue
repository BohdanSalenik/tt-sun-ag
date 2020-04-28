<template>
  <div>
    <Header />
    <router-view/>
    <Footer />
    <FooterMobile />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import FooterMobile from '@/components/FooterMobile.vue'
export default {
  components: {
    Header,
    Footer,
    FooterMobile,
  }
}
</script>

<style lang="scss">

</style>
