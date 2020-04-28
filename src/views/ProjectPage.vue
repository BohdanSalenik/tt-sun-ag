<template>
  <ProjectInDetail :block="block"/>
</template>

<script>
import ProjectInDetail from '@/components/project-page/ProjectInDetail.vue'
export default {
  props:['id'],
  components: {
    ProjectInDetail,
  },
  computed: {
    block() {
      return this.$store.state.blocks.find(block => block.id === this.$route.params.id)
    }
  },
}
</script>
