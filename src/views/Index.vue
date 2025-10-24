<script setup lang="ts">
import Clock from "../components/Clock.vue";
import SearchBox from "../components/SearchBox.vue";
import MainContainer from "../components/MainContainer.vue";
// import CalendarCard2 from "../components/CalendarCard2.vue";

defineProps<{ msg: string }>();
</script>

<template>
    <div class="main background">
        <div class="left"></div>
        <div class="center">
            <clock></clock>
            <search-box></search-box>
            <main-container></main-container>
            <!-- <calendar-card-2></calendar-card-2> -->
        </div>
        <div class="right"></div>
    </div>
</template>

<style scoped>
.main {
    display: flex;
    flex-direction: row;
}
.background {
    background-image: url("../assets/images/catalina.jpg");
    background-size: 100% 100%;
    position: fixed;
    top: 0px;
    width: 100%;
    height: 100%;
}
.left {
    width: 25%;
    height: 100%;
}
.center {
    width: 50%;
    height: 100%;
}
.right {
    width: 25%;
    height: 100%;
}
</style>
