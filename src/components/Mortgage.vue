<template>
  <div>
    <Header/>
    <ButtonTrigger
      @onTrigger="val=>trigger=val"
      val_1="Банки - <br> партнеры"
      val_2="Ипотечный калькулятор"
    />

    <img v-if="trigger" src="../assets/images/banks.png"/>
    <Calc v-else/>

    <Footer />
  </div>
</template>
<script>
import Header from './Header'
import Footer from './Footer'
import ButtonTrigger from '../controls/ButtonTrigger'
import Calc from '../controls/Calc'
export default{
  name: 'Mortgage',
  components: {
    Header,
    Footer,
    ButtonTrigger,
    Calc
  },
  data () {
    return {
      trigger: true
    }
  }
}
</script>
