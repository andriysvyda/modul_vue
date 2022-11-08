<template>
    <master-pages>
      <template v-slot:my-link1>
         <router-link to="/games">Games</router-link>
      </template>

      <template v-slot:my-link2>
         <router-link to="/">About</router-link>
      </template>
  
      <h1>Home</h1>
  
    </master-pages>
  </template>
    
<script>
import MasterPages from '@/masterpages/MasterPages'

  export default {
    name: 'Home',
  
    components: {
      MasterPages,
    },
  }
</script>

<style lang="scss" scoped>

</style>