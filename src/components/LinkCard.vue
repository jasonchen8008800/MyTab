<script setup lang="ts">
const props = defineProps({
    item:Object,
})
function jump(){
    window.open(props.item.url, "_blank")
}
</script>

<template>
    <div class="link-card" @click="jump()">
        <div class="link-card-icon-box">
            <a-image class="link-card-icon" :preview="false" :src="item.src"></a-image>
        </div>
        <div class="link-card-title">{{item.name}}</div>
    </div>
</template>

<style scoped>
.link-card{
    display: flex;
    flex-direction: column;
    padding: 0 4px 0 4px;
    align-items: flex-start;
    cursor: pointer;
}
.link-card-icon-box{
}
.link-card-icon img{
    border-radius: 10px;
}
.link-card-title{
    width: 100%;
    text-align: center;
}

</style>
