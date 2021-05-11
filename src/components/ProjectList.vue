<template>
  <div class="project-list">
      <div :key="post.id" v-for="post in posts">
          <ProjectItem :post="post" />
      </div>
      
  </div>
</template>

<script>
import ProjectItem from './ProjectItem'

export default {
    name: 'ProjectList',
    components: {
        ProjectItem,
    },
    props: {
        posts: Array,
    }
}
</script>

<style scoped>
.project-list {
    margin: 0;
}
</style>