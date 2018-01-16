<template>
  <div>
    <div class="calc" @click="toCalc">
      <label>стоимость квартиры</label>
      <input v-model="cost_flat"/>
      <label>первоначальный взнос</label>
      <input v-model="contribution"/>
      <div class="calc_buttons" @click="contribution = cost_flat * percent / 100">
        <div :class="{ active: percent===10 }" @click="percent=10">10%</div>
        <div :class="{ active: percent===15 }" @click="percent=15">15%</div>
        <div :class="{ active: percent===20 }" @click="percent=20">20%</div>
        <div :class="{ active: percent===25 }" @click="percent=25">25%</div>
        <div :class="{ active: percent===30 }" @click="percent=30">30%</div>
        <div :class="{ active: percent===35 }" @click="percent=35">35%</div>
        <div :class="{ active: percent===40 }" @click="percent=40">40%</div>
      </div>
      <label>срок ипотеки</label>
      <input v-model="months"/>
      <div class="calc_buttons" @click="months = year * 12">
        <div :class="{ active: year===3 }" @click="year=3">3<br>года</div>
        <div :class="{ active: year===5 }" @click="year=5">5<br>года</div>
        <div :class="{ active: year===7 }" @click="year=7">7<br>года</div>
        <div :class="{ active: year===10 }" @click="year=10">10<br>года</div>
        <div :class="{ active: year===15 }" @click="year=15">15<br>года</div>
        <div :class="{ active: year===20 }" @click="year=20">20<br>года</div>
        <div :class="{ active: year===25 }" @click="year=25">25<br>года</div>
        <div :class="{ active: year===30 }" @click="year=30">30<br>года</div>
      </div>
      <label>процентная вставка</label>
      <input v-on:keydown="toCalc" v-model="interestRate"/>
    </div>
    <div class="calc-total">
      <p>Ежемесячный платёж</p>
      <p>
        {{monthlyPayment}} ₽
      </p>
    </div>
    <div class="calc-apply">
      <p>Сумма кредита {{credit}} ₽</p>
      <div class="apply-button">
        Оставить заявку
      </div>
      <p>Рассчет предварительный, необходимо уточнить у менеджеров</p>
    </div>
    <br><br>
  </div>
</template>
<script>
export default{
  name: 'Calc',
  data () {
    return {
      percent: 0,
      year: 0,
      cost_flat: 0,
      contribution: 0,
      months: 0,
      interestRate: 0,

      monthlyPayment: 0,
      credit: 0
    }
  },
  methods: {
    toCalc: function () {
      this.credit = this.cost_flat - this.contribution

      let S = this.credit
      let p = this.interestRate
      let n = this.year

      p = p / 1200
      n = n * 12

      if (
        n ==== 0 ||
        p ==== 0
      ) return

      let res = (S * p / (1 - Math.pow(1 + p, -n))).toFixed(2)

      this.monthlyPayment = parseInt(res)
    }
  }
}
</script>
<style>
  .calc{
    background: #61635c;
    padding: 25px;
    text-align: left;
    max-width: 400px;
    margin: 0 auto;
  }
  .calc label{
    color: white;

  }
  .calc input{
    background: #555;
    padding: 8px ;
    border: none;
    color: white;
    font-size: 20px;
    margin: 3px 0 10px;
    width: 300px;
  }
  .calc_buttons{
    margin: 0 auto;
    text-align: left;
    width: 320px;
    margin: 5px 0 20px 0;
  }
  .calc_buttons div{
    background: white;
    display: inline-block;
    width: 55px;
    text-align: center;
    padding: 5px;
    margin: 5px;
  }
  .calc_buttons .active{
    background: #18c746;
  }
  .calc-total{
    width: 100%;
    text-align: left;
    padding: 10px 0;
    background: yellow;
    font-size: 25px;
    max-width: 400px;
    margin: 0 auto;
  }
  .calc-apply p, .calc-total p{
    margin: 0 30px;
  }
  .calc-apply{
    max-width: 400px;
    margin: 0 auto;
    width: 100%;
    text-align: left;
    padding: 10px 0;
  }
  .apply-button{
    background: #18c746;
    color: white;
    width: 150px;
    padding: 10px;
    margin: 10px 30px;
    box-shadow: 0 5px 15px #999;
    text-align: center;
    text-shadow: 1px 2px 7px #000;
  }
</style>
