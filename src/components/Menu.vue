<template>
  <div class="menu">

    <Header/>
    <hr noshade/>

    <div class="menu_button" @click="goTo('')">
      Подобрать квартиру
    </div>

    <div v-for="el in listArr" :key="el.id" class="menu_list">
      <div  @click="goTo(el.src)">{{el.name}}</div>
    </div>

    <br/><br/>
    <div>
      reelt@mail.ru
    </div>

  </div>

</template>
<script>
import Header from './Header.vue'

export default {
  name: 'Menu',
  components: {
    Header
  },
  data () {
    return {
      listArr: [
        {id: 1, name: 'Инфраструктура', src: '1'},
        {id: 2, name: 'Преимущества Царёва Village', src: '2'},
        {id: 3, name: 'О застройщике', src: '3'},
        {id: 4, name: 'Новости', src: '4'},
        {id: 5, name: 'Онлайн-камеры', src: '5'},
        {id: 6, name: 'История строительства', src: '6'},
        {id: 7, name: 'Документация', src: '7'},
        {id: 8, name: 'Ипотека', src: 'martgage'},
        {id: 9, name: 'Конгтакты', src: 'contact'}
      ]
    }
  },
  methods: {
    goTo: function (val) {
      this.$router.push('/' + val)
    }
  }
}
</script>
<style>
  .menu {
    background: #61635c;
    color: #ffffff;
  }

  .menu hr {
    height: 0px;
    background: white;
  }

  .menu_button {
    margin: 15px auto;
    height: 40px;
    width: 240px;
    background: #18c746;
    box-shadow: 0 5px 40px #414c37;
    line-height: 40px;
    cursor: pointer;
  }

  .menu_list {
    text-align: left;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ffffff;
    margin: 0 10px;
    cursor: pointer;
  }

</style>
