<template>
  <div>
    <Header/>
    <br>
    <img src="../assets/images/contact_bird.png"/>

    <ButtonTrigger
      @onTrigger="val=>trigger=val"
      val_1="Адреса офисов"
      val_2="На карте"
    />

    <div v-if="trigger">
    <div
      v-for="el in addressArr"
      :key="el.id"
      class="contact_list">
      <div>{{el.name}}</div>
      <div>{{el.weekdays}}</div>
      <div>{{el.weekends}}</div>
    </div>

    </div>
    <img v-else src="../assets/images/contact_map.png" />

    <Footer/>

  </div>
</template>
<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import ButtonTrigger from '../controls/ButtonTrigger.vue'

export default {
  name: 'Contact',
  components: {
    Header,
    Footer,
    ButtonTrigger
  },
  data () {
    return {
      addressArr: [
        {
          id: 1,
          name: 'г. Казань, ул. Гаврилова, 1',
          weekdays: 'пн - пт 08:00 - 20:00',
          weekends: 'сб 09:00 - 16:00'
        },
        {
          id: 2,
          name: 'г. Казань, ул. Азата Аббасова, 11',
          weekdays: 'пн - пт 08:00 - 20:00',
          weekends: 'сб 09:00 - 16:00'
        },
        {
          id: 3,
          name: 'г. Казань, ул. Октябрьский городок, 1/24',
          weekdays: 'пн - пт 08:00 - 20:00',
          weekends: 'сб 09:00 - 16:00'
        },
        {
          id: 4,
          name: 'г. Казань, ул. Гвардейская, 16 В',
          weekdays: 'пн - пт 08:00 - 20:00',
          weekends: 'сб 09:00 - 16:00'
        },
        {
          id: 5,
          name: 'Пестречинский район, с.Новое Шигалеево, ул. Тукая, 28а',
          weekdays: 'вт - пт 09:00 - 19:00',
          weekends: 'сб 10:00 - 16:00'
        }
      ],
      trigger: true
    }
  }
}
</script>
<style>
  .contact_list{
    margin: 0 auto;
    width: 280px;
    text-align: left;
    padding: 15px 30px;
  }
  .contact_list div:first-child{
    font-weight: bold;
  }
</style>
