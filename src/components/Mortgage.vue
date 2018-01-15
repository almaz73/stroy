<template>
  <div>
    <Header/>
    <ButtonTrigger
      val_1="Банки - <br> партнеры"
      val_2="Ипотечный калькулятор"
    />

    <img src="../assets/images/banks.png"/>

    <Footer />
  </div>
</template>
<script>
import Header from './Header'
import Footer from './Footer'
import ButtonTrigger from '../controls/ButtonTrigger'
export default{
  name: 'Mortgage',
  components: {
    Header,
    Footer,
    ButtonTrigger
  }
}
</script>
