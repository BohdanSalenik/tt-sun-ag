<template>
  <div>
    <HomeFirstScreen />
    <HomeMain />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeFirstScreen from '@/components/home/HomeFirstScreen.vue'
import HomeMain from '@/components/home/HomeMain.vue'
export default {
  name: 'Home',
  components: {
    HomeFirstScreen,
    HomeMain,
  }
}
</script>
