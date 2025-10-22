<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div class="main background">
    <div class="left"></div>
    <div class="center">
      <MyDatatime></MyDatatime>
    </div>
    <div class="right"></div>
  </div>
</template>

<style scoped>
.main{
  display: flex;
  flex-direction: row;
}
.background {
  background-image: url("../assets/catalina.jpg");
  background-size: 100% 100%;
  position: fixed;
  top: 0px;
  width: 100%;
  height: 100%;
}
.left{
  width: 25%;
  border: 1px solid red;
  height: 100%;
}
.center{
  width: 50%;
  border: 1px solid blue;
  height: 100%;
}
.right{
  width: 25%;
  border: 1px solid green;
  height: 100%;
}
</style>
