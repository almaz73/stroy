<template>
  <div class="head_div">
    <img
      class="head_abs"
      src="../assets/images/head_leave.png"
      @click ="onPrevious"
    />
    <img class="head_left" src="../assets/images/head_leaf.png"/>
    <img class="head_center" src="../assets/images/head_logo.png"/>
    <img v-if="close"
         class="head_right"
         src="../assets/images/head_christ.png"
         @click ="onClose"
    />
    <img v-else
         class="head_right"
         src="../assets/images/head_menu.png"
         @click ="onClose"
    />

  </div>
</template>
<script>
export default {
  name: 'Header',
  data () {
    return {
      close: true
    }
  },
  methods: {
    onPrevious: function () {
      this.$router.push('/menu')
    },
    onClose: function () {
      this.close = !this.close
    }
  }
}
</script>
<style>
  .head_left{
    float: left;
  }
  .head_right{
    float: right;
    cursor: pointer;
  }
  .head_center{
    margin-top: 17px;
    clear: both;
  }
  .head_abs{
    position: absolute;
    top: 16px;
    left: 24px;
    cursor: pointer;
  }
  .head_div{
    background: #61635c;
    height: 77px;
  }
</style>
