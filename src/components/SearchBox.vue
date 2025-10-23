<template>
    <a-space class="site-input-group-wrapper" direction="vertical" size="large">

        <a-input-group compact class="site-input-group">
            <a-select
                ref="select"
                v-model:value="checked"
                style="width: 90px;display: inline-block;"
                :options="engineList"
                :field-names="{ label: 'title', value: 'id', options: 'children' }"
                @focus="focus"
                @change="handleChange"
                size="large"
            ></a-select>
            <div class="site-input-group">
                <a-input type="text" v-model:value="value6" size="large" placeholder="请输入搜索内容" allowClear style="border-radius:0 6px 6px 0"/>
            </div>
        </a-input-group>
    </a-space>
</template>
<script lang="ts" setup>
import type {SelectProps} from 'ant-design-vue';
import {ref} from 'vue';


const engineList = ref<SelectProps['options']>([
        {
            "id": "baidu",
            "title": "百度",
            "url": "https://www.baidu.com",
            "icon": "/src/assets/images/baidu2.svg",
        },
        {
            "id": "google",
            "title": "谷歌",
            "url": "https://www.google.com",
            "icon": "/src/assets/images/google2.svg",
        },
        {
            "id": "bing",
            "title": "Bing",
            "url": "https://www.bing.com",
            "icon": "/src/assets/images/bing2.svg",
        }
    ]
)
let checked = ref("baidu");
const value6 = ref<string>('');
const focus = () => {
    console.log('focus');
};

const handleChange = (value: string) => {
    console.log(`selected ${value}`);
};
</script>
<style scoped>
.site-input-group-wrapper{
    width: 100%;
    padding: 0 40px;
}
.site-input-group {
    width: 100%;
    display: flex;
    justify-content: center;
}
</style>
