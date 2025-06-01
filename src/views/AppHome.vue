<template>
  <main class="home">
    <section class="hero-container">
      <div 
        class="hero-bg"
        :style="{ backgroundImage: `url(${backgrounds[currentBg]})` }"
        :class="{ 'transitioning': isTransitioning }"
      ></div>
      <div class="hero-content">
        <h1>Добро пожаловать в нашу кофейню!</h1>
        <p>Лучший кофе города с 2015 года</p>
        <router-link to="/menu" class="btn">Посмотреть меню</router-link>
      </div>
    </section>

    <section class="features-section">
      <div class="section-header">
        <h2>Почему выбирают нас</h2>
        <div class="divider"></div>
      </div>
      
      <div class="features-grid">
        <div class="feature-card" v-for="(feature, index) in features" :key="index">
          <div class="feature-icon">
            <span>{{ feature.icon }}</span>
          </div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </section>

    <section class="promo">
      <h2>Акция месяца!</h2>
      <p>Каждый понедельник - скидка 20% на весь кофе с собой</p>
    </section>
  </main>
</template>

<script>
import heroBg1 from '@/assets/park_cofe.jpg'
import heroBg2 from '@/assets/train_cofe.jpg'
import heroBg3 from '@/assets/now_cofe.jpg'

export default {
  name: 'AppHome',
  data() {
    return {
      backgrounds: [heroBg1, heroBg2, heroBg3],
      currentBg: 0,
      isTransitioning: false,
      features: [
        {
          icon: "☕",
          title: "Свежие зерна",
          description: "Ежедневная обжарка отборной арабики"
        },
        {
          icon: "🛋️",
          title: "Уютная атмосфера",
          description: "Идеальное место для работы и встреч"
        },
        {
          icon: "🍰",
          title: "Авторские десерты",
          description: "Домашняя выпечка по собственным рецептам"
        }
      ]
    }
  },
  mounted() {
    setInterval(() => {
      this.changeBackground()
    }, 5000)
  },
  methods: {
    changeBackground() {
      this.isTransitioning = true
      setTimeout(() => {
        this.currentBg = (this.currentBg + 1) % this.backgrounds.length
        this.isTransitioning = false
      }, 500)
    }
  }
}
</script>

<style scoped>
.hero-container {
  position: relative;
  width: 100%;
  height: 100vh;
  max-height: 800px;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: opacity 1s ease-in-out;
  z-index: 0;
}

.hero-bg.transitioning {
  opacity: 0.7;
}

.hero-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: white;
  text-align: center;
  padding: 20px;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);
}

/* Затемнение фона */
.hero-container::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 0;
}

/* Стили для текста */
.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 20px;
  color: white;
}

.hero-content p {
  font-size: 1.5rem;
  margin-bottom: 30px;
  color: white;
}

/* Кнопка */
.btn {
  display: inline-block;
  background: #5d4037;
  color: white;
  padding: 12px 30px;
  border-radius: 4px;
  text-decoration: none;
  font-size: 1.1rem;
  transition: background 0.3s;
  border: 2px solid white;
}

.btn:hover {
  background: #7b5e57;
}

/* Секция features */
.features-section {
  padding: 80px 20px;
  background: #f9f5f2;
  position: relative;
}

.section-header {
  text-align: center;
  margin-bottom: 50px;
}

.section-header h2 {
  font-size: 2.5rem;
  color: #5d4037;
  margin-bottom: 15px;
}

.divider {
  width: 80px;
  height: 3px;
  background: #d7ccc8;
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: white;
  padding: 40px 30px;
  border-radius: 10px;
  border: 3px solid  #5d4037;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #5d4037;
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #5d4037;
}

.feature-card p {
  color: #666;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .feature-card {
    padding: 30px 20px;
  }
  
  .section-header h2 {
    font-size: 2rem;
  }
}

/* Секция promo */
.promo {
  background: #d7ccc8;
  padding: 30px;
  text-align: center;
  margin: 20px 0;
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2rem;
  }
  
  .hero-content p {
    font-size: 1.2rem;
  }
  
  .hero-container {
    height: 70vh;
  }
  
  .feature {
    width: 100%;
  }
}
</style>