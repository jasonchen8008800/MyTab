<script setup lang="ts">
const props = defineProps({
    item: Object,
})
</script>

<template>
    <div class="fold-card">
        <div class="fold-card-box">
            <a-row :gutter="[10,10]">
                <a-col :span="12"  v-for="it in item.children" :key="item.id">

                    <a-image class="fold-card-icon" :preview="false" :src="it.src" style="width: 55px;height: 55px"></a-image>
                </a-col>
            </a-row>

        </div>
        <div class="fold-card-title">{{ item.name }}</div>
    </div>
</template>

<style scoped>
.fold-card {
}
.fold-card-title{
    text-align: center;
    margin-top: 8px;
}
.fold-card-box {
    padding: 0 15px;
}

</style>
