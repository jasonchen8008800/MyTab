<script setup lang="ts">
import { ref } from 'vue';
import type { TabsProps } from 'ant-design-vue';
const mode = ref<TabsProps['tabPosition']>('top');
const activeKey = ref(1);
const callback: TabsProps['onTabScroll'] = val => {
    console.log(val);
};
</script>

<template>
    <div class="main-container">
        <a-tabs
            class="main-tabs"
            centered
            v-model:activeKey="activeKey"
            :tab-position="mode"
            @tabScroll="callback"
        >
            <a-tab-pane v-for="i in 3" :key="i" :tab="`Tab-${i}`">Content of tab {{ i }}</a-tab-pane>
        </a-tabs>
    </div>
</template>

<style scoped>
.main-container {

}
.main-tabs {
    width: 100%;
    height: 100%;
    color: white;
}
</style>
