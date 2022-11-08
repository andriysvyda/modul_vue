<template>
    <master-pages>
      <template v-slot:my-link1>
         <router-link to="/games">Games</router-link>
      </template>

      <template v-slot:my-link2>
         <router-link to="/about">Home</router-link>
      </template>
  
      <h1>About</h1>
  
    </master-pages>
  </template>
    
<script>
import MasterPages from '@/masterpages/MasterPages.vue';

  export default {
    name: 'About',
  
    components: {
      MasterPages,
    },
  }
</script>

<style lang="scss" scoped>

</style>