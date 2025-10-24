<script setup lang="ts">
import lunar from "mpvue-calendar/dist/lunar";
import Calendar from "mpvue-calendar";
</script>

<template>
    <div class="calendar-card" >
        <Calendar :lunar="lunar" completion/>
    </div>
</template>

<style scoped>
</style>
