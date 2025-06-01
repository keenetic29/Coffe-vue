<template>
  <main class="contacts">
    <div class="section-header">
      <h2>Наши контакты</h2>
      <div class="divider"></div>
    </div>
    
    <div class="contact-cards">
      <div v-for="(cafe, index) in cafes" :key="index" class="cafe-card">
        <h3>{{ cafe.name }}</h3>
        <div class="contact-detail">
          <span class="icon">📍</span>
          <p>{{ cafe.address }}</p>
        </div>
        <div class="contact-detail">
          <span class="icon">📞</span>
          <p>{{ cafe.phone }}</p>
        </div>
        <div class="contact-detail">
          <span class="icon">🕒</span>
          <p>{{ cafe.hours }}</p>
        </div>
        <button class="map-btn" @click="openMap(cafe.address)">Посмотреть на карте</button>
      </div>
    </div>
    
    <div class="contact-form-section">
      <div class="form-container">
        <div class="form-header">
          <h3>Остались вопросы?</h3>
          <p>Заполните форму и мы свяжемся с вами</p>
        </div>
        
        <form @submit.prevent="submitForm" class="message-form">
          <div class="form-group">
            <label>Ваше имя</label>
            <input 
              type="text" 
              v-model="form.name" 
              required
              placeholder="Иван"
            >
          </div>
          
          <div class="form-group">
            <label>Email</label>
            <input 
              type="email" 
              v-model="form.email" 
              required
              placeholder="example@mail.com"
            >
          </div>
          
          <div class="form-group">
            <label>Ваше сообщение</label>
            <textarea 
              v-model="form.message" 
              required
              placeholder="Напишите ваш вопрос..."
            ></textarea>
          </div>
          
          <button type="submit" class="submit-btn">
            Отправить сообщение
          </button>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'AppContacts',
  data() {
    return {
      cafes: [
        {
          name: "Центральная кофейня",
          address: "ул. Главная, 1, Москва",
          phone: "+7 (999) 123-45-67",
          hours: "Пн-Пт: 8:00-22:00, Сб-Вс: 9:00-23:00"
        },
        {
          name: "Кофейня у парка",
          address: "Парковая аллея, 5, Москва",
          phone: "+7 (999) 765-43-21",
          hours: "Ежедневно: 9:00-22:00"
        },
        {
          name: "Привокзальная",
          address: "Вокзальная площадь, 3, Москва",
          phone: "+7 (999) 802-40-82",
          hours: "Ежедневно: 9:00-22:00"
        }
      ],
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      // Здесь должна быть логика отправки
      alert(`Спасибо, ${this.form.name}! Ваше сообщение отправлено.`);
      this.form = { name: '', email: '', message: '' };
    },
    openMap(address) {
      // В реальном приложении здесь будет открытие карты
      alert(`Открываем карту для адреса: ${address}`);
    }
  }
}
</script>

<style scoped>
.contacts {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
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

/* Стили для карточек контактов */
.contact-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.cafe-card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  border: 3px solid #5d4037;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
}

.cafe-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

.cafe-card h3 {
  font-size: 1.5rem;
  color: #5d4037;
  margin-bottom: 20px;
}

.contact-detail {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  justify-content: center;
}

.contact-detail .icon {
  margin-right: 10px;
  font-size: 1.2rem;
}

.map-btn {
  background: #5d4037;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  margin-top: 20px;
  cursor: pointer;
  transition: background 0.3s;
}

.map-btn:hover {
  background: #7b5e57;
}

/* Стили для формы */
.contact-form-section {
  background: #f9f5f2;
  padding: 50px;
  border-radius: 12px;
}

.form-container {
  max-width: 600px;
  margin: 0 auto;
}

.form-header {
  text-align: center;
  margin-bottom: 30px;
}

.form-header h3 {
  font-size: 2rem;
  color: #5d4037;
  margin-bottom: 10px;
}

.form-header p {
  color: #666;
}

.message-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 25px;
}

label {
  display: block;
  margin-bottom: 8px;
  color: #5d4037;
  font-weight: 500;
}

input, textarea {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

input:focus, textarea:focus {
  outline: none;
  border-color: #5d4037;
}

textarea {
  height: 150px;
  resize: vertical;
}

.submit-btn {
  background: #5d4037;
  color: white;
  border: none;
  padding: 15px 25px;
  border-radius: 6px;
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;
  margin-top: 10px;
}

.submit-btn:hover {
  background: #7b5e57;
}

.send-icon {
  margin-left: 10px;
}

@media (max-width: 768px) {
  .contact-cards {
    grid-template-columns: 1fr;
  }
  
  .contact-form-section {
    padding: 30px 20px;
  }
}
</style>