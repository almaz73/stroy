<template>
  <div>
    <Header />
    <img class="documents_logo" src="../assets/images/documents_logo.png"/>

    <div v-for="el in textArr" :key="el.id" class="documents">
      <!--<img src={{el.p|path}} />-->
      <span>
        <div><b>{{el.name}}</b></div>
        <div>{{el.house}}</div>
        <div>{{el.date}}</div>
      </span>

    </div>

    <div class="documents_button">
      <span>Планировки</span>
      <span>Подобрать квартиру</span>
    </div>

    <Footer />
  </div>
</template>
<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
export default {
  name: 'Infra',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      textArr: [
        { id: 1, name: '15 минут от Казани', p: 'p1', l: 'l1' },
        { id: 2, name: 'Природное озеро и лес рядом с домом', p: 'p2', l: 'l2' },
        { id: 3, name: 'Площадки для спорта и игр', p: 'p3', l: 'l3' },
        { id: 4, name: '4 детсада по 160 мест, школа на 1550 мест', p: 'p4', l: 'l4' },
        { id: 5, name: 'Малоэтажная застройка', p: 'p5', l: 'l5' },
        { id: 6, name: 'Парковая зона', p: 'p6', l: 'l6' },
        { id: 7, name: 'Торговый центр', p: 'p7', l: 'l7' },
        { id: 8, name: 'Удобные въезды и выезды в посёлок', p: 'p8', l: 'l8' }
      ]
    }
  },
  filters: {
    path: function (val) {
      return "../assets/images/infra/" + val + ".png"
    }
  }
}
</script>
<style>
  .documents_button{
    margin: 0 auto;
    max-width: 400px;
    margin: 30px 0;
  }
  .documents_button span{
    background: #18c746;
    padding: 15px;
    max-width: 150px;
    color:white;
  }
</style>
