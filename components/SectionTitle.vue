<script setup>
defineProps({
  title: {
    type: String,
    require: true
  }
})
</script>
 
<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>
 
<style scoped>
h1{
    font-size: 30px;
    font-weight: bold;
}
</style>