<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './components/AppHeader.vue'
import Footer from './components/AppFooter.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  color: #333;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

h2 {
  color: #5d4037;
  text-align: center;
  margin-bottom: 30px;
}
</style>