<template>
  <div class="wrapper">
    <MHeader/>

    <div class="content">
      <Main/>
      <Quiz/>
      <About/>
    </div>

    <MFooter/>
  </div>
</template>

<script setup>
  import MHeader from "#/components/MHeader.vue";
  import MFooter from "#/components/MFooter.vue";
  import Main from "#/components/Main.vue";
  import Quiz from "#/components/Quiz.vue";
  import About from "#/components/About.vue";
</script>


<style scoped>

</style>
