<template>
  <main class="about">
    <h2>Наша история</h2>
    
    <section class="history-section">
      <div class="history-content">
        <h3>Как всё начиналось</h3>
        <p>В 2015 году два энтузиаста кофе - Анна и Максим - решили открыть небольшую кофейню в центре города. Начиная с крошечного помещения на 15 мест, они сами готовили кофе и разрабатывали рецепты.</p>
        <img :src="require('@/assets/1_cafe.png')" alt="Первая кофейня">
      </div>
    </section>
    
    <section class="history-section">
      <div class="history-content reverse">
        <h3>Наш секрет</h3>
        <p>Мы тщательно отбираем зёрна только у проверенных фермеров из Эфиопии, Колумбии и Бразилии. Наш мастер обжарки создаёт уникальные купажи, которые делают вкус нашего кофе неповторимым.</p>
        <img :src="require('@/assets/gains.jpg')" alt="Кофейные зёрна">
      </div>
    </section>
    
    <section class="history-section">
      <div class="history-content">
        <h3>Сегодня</h3>
        <p>Сейчас "Ароматная Чашка" - это сеть из 3 кофеен в городе, команда из 20 бариста и тысячи довольных клиентов. Но мы сохранили дух маленькой уютной кофейни, где каждый чувствует себя как дома.</p>
        <img :src="require('@/assets/now_cofe.jpg')" alt="Современная кофейня">
      </div>
    </section>
    
    <h2>Наша команда</h2>

    <section class="team">
      <div class="team-grid">
        <div class="team-member">
          <img :src="require('@/assets/about_Anna.jpg')" alt="Анна">
          <h4>Анна</h4>
          <p>Со-основатель, главный бариста</p>
        </div>
        <div class="team-member">
          <img :src="require('@/assets/about_Maksim.png')" alt="Максим">
          <h4>Максим</h4>
          <p>Со-основатель, мастер обжарки</p>
        </div>
        <div class="team-member">
          <img :src="require('@/assets/about_Olga.jpg')" alt="Ольга">
          <h4>Ольга</h4>
          <p>Шеф-кондитер</p>
        </div>
      </div>
    </section>
    
    <section class="values">
      <h3>Наши ценности</h3>
      <ul>
        <li>Качество - используем только лучшие ингредиенты</li>
        <li>Традиции - сохраняем аутентичные рецепты</li>
        <li>Инновации - постоянно экспериментируем</li>
        <li>Комфорт - создаём уютную атмосферу</li>
      </ul>
    </section>
  </main>
</template>

<script>
export default {
  name: 'AppAbout'
}
</script>

<style scoped>
.history-section {
  margin: 40px 0;
}

.history-content {
  display: flex;
  align-items: center;
  gap: 40px;
  margin-bottom: 60px;
}

.history-content.reverse {
  flex-direction: row-reverse;
}

.history-content img {
  width: 50%;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-top: 30px;
}

.team-member {
  text-align: center;
}

.team-member img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
}

.values {
  background: #f5f5f5;
  padding: 30px;
  border-radius: 8px;
  margin-top: 40px;
}

.values ul {
  list-style-type: none;
  padding: 0;
}

.values li {
  margin-bottom: 10px;
  position: relative;
  padding-left: 25px;
}

.values li:before {
  content: "☕";
  position: absolute;
  left: 0;
}

@media (max-width: 768px) {
  .history-content, 
  .history-content.reverse {
    flex-direction: column;
  }
  
  .history-content img {
    width: 100%;
  }
}
</style>