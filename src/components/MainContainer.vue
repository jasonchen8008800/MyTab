<script setup lang="ts">
import {proxyRefs, ref} from 'vue';
import type {TabsProps} from 'ant-design-vue';
import {VueDraggable, DraggableEvent} from 'vue-draggable-plus'
import TextNote from "./TextNote.vue";
import LinkCard from "./LinkCard.vue";
import FoldCard from "./FoldCard.vue";
import CalendarCard from "./CalendarCard.vue";
import CalendarCard2 from "./CalendarCard2.vue";
import {links} from "./data.ts";

const mode = ref<TabsProps['tabPosition']>('top');
const activeKey = ref(1);
const callback: TabsProps['onTabScroll'] = val => {
    console.log(val);
};

function onStart(event: DraggableEvent) {
    console.log('开始拖拽', event)
}

function onUpdate(event: DraggableEvent) {
    console.log('update',event)
}

function onChange(event: DraggableEvent) {
    console.log('change', event)
}

function onAdd(event: DraggableEvent) {
    console.log('add', event)
}

function onRemove(event: DraggableEvent) {
    console.log('remove', event)
}
function onEnd(event: DraggableEvent) {
    console.log('end', event)
    if (event.oldDraggableIndex == event.newDraggableIndex){
        return
    }

    if (event.data.type != 'link'){
        console.log("类型不符")
        return
    }

    let newCard = links.value[event.newDraggableIndex];
    let oldCard = links.value[event.oldDraggableIndex];

    if (newCard.type=="link" && oldCard.type=="fold"){
        oldCard.childrens.push(newCard)
        links.value.splice(event.newDraggableIndex, 1)
    }
}

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
            <a-tab-pane v-for="i in 3" :key="i" :tab="`Tab-${i}`">
                <VueDraggable
                    ref="el"
                    v-model="links"
                    @update="onUpdate($event)"
                    @add="onAdd($event)"
                    @remove="onRemove($event)"
                    @start="onStart($event)"
                    @end="onEnd($event)"
                    @change="onChange($event)"
                    class="main-tabs-draggable"
                    target=".grid-box"
                >
                    <div class="main-tabs-draggable-item grid-box">
                        <div class="grid-item" :class="item.class" v-for="(item) in links" :key="item.id">
                            <text-note v-if="item.type == 'app'"></text-note>
                            <link-card v-else-if="item.type == 'link'" :item="item"></link-card>
                            <fold-card v-else-if="item.type == 'fold'" :items="item"></fold-card>
                            <calendar-card v-else-if="item.type == 'calendar'"></calendar-card>
                            <!-- <calendar-card-2 v-else-if="item.type == 'calendar'"></calendar-card-2> -->
                        </div>
                    </div>
                </VueDraggable>
            </a-tab-pane>
        </a-tabs>
    </div>
</template>

<style scoped>
.main-container {
    width: 100%;
}

.main-tabs {
    width: 100%;
    height: 100%;
    color: white;
}

.main-tabs-draggable {
    display: flex;
    flex-direction: row;
    justify-items: left;
    flex-wrap: wrap;
}



.g1x1 {
    height: calc(100% - 5px);
    grid-row: span 1 / span 1;
    grid-column: span 1 / span 1;
}

.g2x2 {
    grid-row: span 2 / span 2;
    grid-column: span 2 / span 2;
}

.g3x4 {
    grid-row: span 3 / span 3;
    grid-column: span 4 / span 4;
}

.g4x4 {
    grid-row: span 3 / span 4;
    grid-column: span 4 / span 4;
}
.main-tabs-draggable-item {
    height: 500px;
    overflow-y: scroll;
}

.grid-box {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(10, 60px);
    grid-template-rows: repeat(10, 70px);
    grid-column-gap: 30px;
    grid-row-gap: 10px;
}

.grid-item {
    border: 1px solid red;
}
</style>
