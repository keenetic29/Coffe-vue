<template>
  <main class="menu">
    <h2>Наше меню</h2>
    <div class="coffee-grid">
      <div v-for="(item, index) in coffeeMenu" :key="index" class="coffee-card">
        <img :src="item.image" :alt="item.name">
        <h3>{{ item.name }}</h3>
        <p>{{ item.description }}</p>
        <div class="price">{{ item.price }} руб.</div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'AppMenu',
  data() {
    return {
      coffeeMenu: [
        {
          name: "Эспрессо",
          description: "Крепкий и насыщенный вкус",
          price: 150,
          image: require('@/assets/espresso.jpg')
        },
        {
          name: "Капучино",
          description: "Нежное сочетание эспрессо и молочной пенки",
          price: 180,
          image: require('@/assets/cappuccino.jpg')
        },
        {
          name: "Латте",
          description: "Мягкий кофе с большим количеством молока",
          price: 190,
          image: require('@/assets/latte.jpg')
        },
        {
          name: "Раф",
          description: "Нежный кофе с ванильным кремом",
          price: 220,
          image: require('@/assets/raf.jpg')
        }
      ]
    }
  }
}
</script>

<style scoped>
.coffee-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
  padding: 20px;
}

.coffee-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
}

.coffee-card img {
  max-width: 100%;
  border-radius: 8px;
  height: 200px;
  object-fit: cover;
}

.price {
  font-weight: bold;
  color: #5d4037;
  font-size: 1.2rem;
  margin-top: 10px;
}
</style>