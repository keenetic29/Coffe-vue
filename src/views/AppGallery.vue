<template>
  <main class="gallery">
    <h2>Наши кофейни</h2>
    <div class="gallery-grid">
      <div v-for="(cafe, index) in cafes" :key="index" class="cafe-card">
        <h3>{{ cafe.name }}</h3>
        <img :src="cafe.image" :alt="cafe.name">
        <p>{{ cafe.address }}</p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'AppGallery',
  data() {
    return {
      cafes: [
        {
          name: "Центральная кофейня",
          address: "ул. Главная, 1",
          image: require('@/assets/Center_cofe.png')
        },
        {
          name: "Кофейня у парка",
          address: "Парковая аллея, 5",
          image: require('@/assets/park_cofe.jpg')
        },
        {
          name: "Привокзальная",
          address: "Вокзальная пл., 3",
          image: require('@/assets/train_cofe.jpg')
        }
      ]
    }
  }
}
</script>

<style scoped>
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  padding: 20px;
}

.cafe-card {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.cafe-card img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.cafe-card h3 {
  padding: 15px;
  background: #5d4037;
  color: white;
  margin: 0;
}

.cafe-card p {
  padding: 10px 15px;
}
</style>