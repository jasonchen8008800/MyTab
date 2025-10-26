<script setup lang="ts">
import Clock from "../components/Clock.vue";
import SearchBox from "../components/SearchBox.vue";
import MainContainer from "../components/MainContainer.vue";
import ContextMenu from '@imengyu/vue3-context-menu'

function onContextMenu(e : MouseEvent) {
  //prevent the browser's default menu
  e.preventDefault();
  //show your menu
  ContextMenu.showContextMenu({
    x: e.x,
    y: e.y,
    items: [
      { 
        label: "添加标签", 
        onClick: () => {
          alert("You click a menu item");
        }
      },
      {
        label: "新建文件夹", 
        onClick: () => {
            alert
        },
      },
      {
        label: "更换壁纸", 
        onClick: () => {
            alert
        },
      },

      {
        label: "批量编辑", 
        onClick: () => {
            alert
        },
      },

      {
        label: "设置", 
        onClick: () => {
            alert
        },
      },
    ]
  }); 
}
</script>

<template>
    <div class="main background"  @contextmenu="onContextMenu($event)">
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
