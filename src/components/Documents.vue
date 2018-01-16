<template>
  <div>
    <Header />
    <img class="documents_logo" src="../assets/images/documents_logo.png"/>

    <div v-for="el in textArr" :key="el.id" class="documents">
      <img src="../assets/images/documents_pdf.png"/>
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
  name: 'Documents',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      textArr: [
        {id: 1, name: 'Проектная декларация', house: 'dom 2.15', date: 'Добавлено 12.08.2017'},
        {id: 2, name: 'Проектная декларация', house: 'dom 2.15', date: 'Добавлено 12.08.2017'},
        {id: 3, name: 'Проектная декларация', house: 'dom 2.15', date: 'Добавлено 12.08.2017'},
        {id: 4, name: 'Проектная декларация', house: 'dom 2.15', date: 'Добавлено 12.08.2017'},
        {id: 5, name: 'Проектная декларация', house: 'dom 2.15', date: 'Добавлено 12.08.2017'},
        {id: 6, name: 'Проектная декларация', house: 'dom 2.15', date: 'Добавлено 12.08.2017'},
        {id: 7, name: 'Проектная декларация', house: 'dom 2.15', date: 'Добавлено 12.08.2017'},
        {id: 8, name: 'Проектная декларация', house: 'dom 2.15', date: 'Добавлено 12.08.2017'},
        {id: 10, name: 'Проектная декларация', house: 'dom 2.15', date: 'Добавлено 12.08.2017'}
      ]
    }
  }
}
</script>
<style>
  .documents_logo{
    float: right;
  }
  .documents{
    clear: both;
    text-align: left;
    padding: 20px;
    max-width: 400px;
    margin: 0 auto;
  }
  .documents img{
    float: left;
    padding: 0 30px;
  }
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
