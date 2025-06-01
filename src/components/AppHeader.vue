<template>
  <header>
    <div class="logo">Кофейня "Ароматная Чашка"</div>
    <nav>
      <router-link to="/">Главная</router-link>
      <router-link to="/about">О нас</router-link>
      <router-link to="/menu">Меню</router-link>
      <router-link to="/gallery">Галерея</router-link>
      <router-link to="/contacts">Контакты</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #4e342e;
  color: white;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

nav a {
  color: white;
  text-decoration: none;
  margin-left: 20px;
  padding: 5px 10px;
  border-radius: 4px;
  transition: background 0.3s;
}

nav a:hover {
  background: #7b5e57;
}

.router-link-exact-active {
  background: #5d4037;
  font-weight: bold;
}
</style>