<template>
  <footer>
    <div class="footer-content">
      <p>Часы работы: Пн-Пт 8:00-22:00, Сб-Вс 9:00-23:00</p>
      <p>© 2025 Кофейня "Ароматная Чашка". Все права защищены.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
footer {
  background-color: #4e342e;
  color: white;
  padding: 20px;
  text-align: center;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}
</style>