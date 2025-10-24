<script setup lang="ts">
import { ref } from "vue";
//date改变触发事件
const change = (obj) => {
    console.log("obj", obj);
};
const date = ref("2025-10-25"); //设置日期，若不设置，则默认为今天
const range = [2015, 2025]; //设置年份范围 默认[2010,2030]
</script>

<template>
    <div style="width: 600px;height:500px; margin-top: 16px; margin-left: 16px;background-color: white;">
        <baidu-calendar  />
    </div>
</template>

<style scoped>
</style>
