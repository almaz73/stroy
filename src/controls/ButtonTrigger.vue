<template>
  <div class="button_trigger" @click="$emit('onTrigger', trigger=!trigger)">
    <div v-if="trigger" class="green">
      {{val_1.toString().replace("&lt;br&gt;", '&nbsp;')}}
    </div>
    <div v-else class="dark">
      {{val_1.replace("&lt;br&gt;", '&nbsp;')}}
    </div>
    <div v-if="trigger" class="dark">
      {{val_2}}
    </div>
    <div v-else class="green">
      {{val_2}}
    </div>
  </div>

</template>
<script>
export default {
  name: 'ButtonTrigger',
  props: {
    val_1: {
      type: String,
      required: true
    },
    val_2: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      trigger: true
    }
  }
}
</script>
<style>
  .button_trigger {
    margin: 26px auto;
    width: 270px;
    cursor: pointer;
    color: white;
    text-align: center;
    padding-bottom: 40px;
  }

  .button_trigger div:first-child {
    float: left;
    width: 50%;
    padding: 10px 0px;
  }

  .button_trigger div:last-child {
    padding: 10px 0;
    float: right;
    width: 50%;
  }

  .button_trigger .green {
    background: #18c746;
  }

  .button_trigger .dark {
    background: #000;
  }
</style>
