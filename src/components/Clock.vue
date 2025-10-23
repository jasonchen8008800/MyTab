<script setup lang="ts">
import {onBeforeUnmount, onMounted, ref} from "vue";
import {SolarDay, SixtyCycleYear} from "tyme4ts";

let currentDate = new Date();
let year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1;
let day = currentDate.getDate();

let solarDay = SolarDay.fromYmd(year, month, day);
let lunarDate = solarDay.getLunarDay()
let lunaTerm = solarDay.getTerm().toString();

const nowTime = ref('')
/**
 * 将小于10的数字前面补0
 * @function
 * @param {number} value
 * @returns {string} 返回补0后的字符串
 */
const complement = (value: number): string => {
    return value < 10 ? `0${value}` : value.toString()
}
/**
 * 格式化时间为XXXX年XX月XX日XX时XX分XX秒
 * @function
 * @returns {string} 返回格式化后的时间
 */
const formateDate = () => {
    const time = new Date()
    const hour = complement(time.getHours())
    const minute = complement(time.getMinutes())
    const second = complement(time.getSeconds())
    return `${hour}:${minute}:${second}`
}
var timer = 0
timer = setInterval(function () {

}, 1000)

onMounted(() => {
    timer = setInterval(() => {
        nowTime.value = formateDate()
    }, 1000)
})
onBeforeUnmount(() => {
    clearInterval(timer) //清除定时器
    timer = 0
})
</script>

<template>
    <div class="datetime">
        <div class="time"><span>{{ nowTime }}</span></div>
        <div class="date">{{ year + "-" + month + "-" + day }} {{ lunarDate }} {{ lunaTerm }}</div>
    </div>
</template>

<style scoped>
.datetime {
    width: 100%;
    height: 15rem;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    color: white;
    transform: translate3d(0px, 100px, 0px)
}

.time {
    margin-top: 50px;
    font-size: 4.5rem;
    display: flex;
    flex-direction: column;

    span {
    }
}

.date {
    margin-top: 0.5rem;
    font-size: 1rem;

}
</style>
