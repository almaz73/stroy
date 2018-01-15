<template>
  <div>
    <Header/>
    <div class="main-div">
      <img src="../assets/images/main_1.png"/>
      <img src="../assets/images/main_2.png"/>
      <br><br>
      <img src="../assets/images/main_3.png"/>
      <img src="../assets/images/main_4.png"/>
      <div class="main_button">
        Выбрать квартиру
      </div>
      <br><br>
      <img src="../assets/images/main_5.png"/>
      <div class="main_button">
        Подробнее
      </div>
      <br><br>
      <img src="../assets/images/main_6.png"/>
      <div class="main_button">
        Подробнее
      </div>
      <br><br>
      <img src="../assets/images/main_7.png"/>
      <div class="main_button">
        Камеры-онлайн
      </div>
      <br><br>
    </div>
    <Footer/>
  </div>

</template>

<script>
import Header from './Header'
import Footer from './Footer.vue'

export default {
  name: 'Index',
  components: {
    Header,
    Footer
  }
}
</script>
<style>
  .main-div img {
    margin: 0 auto;
    display: block;
    width: 100%;
    max-width: 420px;
  }

  .main_button {
    margin: 0 auto;
    background: #18c746;
    width: 200px;
    height: 40px;
    line-height: 40px;
    color: white;
    box-shadow: 0 5px 15px #999;
    text-shadow: 1px 2px 7px #000;

  }
</style>
