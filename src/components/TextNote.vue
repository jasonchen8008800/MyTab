<script setup lang="ts">
import {TagOutlined} from '@ant-design/icons-vue';

</script>

<template>
    <div class="text-container">
        <div class="text-title">
            <a-space size="small" class="text-title-items">
                <TagOutlined/>
                <span>记事本</span>
            </a-space>
        </div>
        <div class="text-content">
            <a-textarea ref="textarea" class="text-content-textarea" allowClear :rows="8"></a-textarea>
        </div>
    </div>
</template>

<style scoped>
.text-container {
    height: 100%;
}

.text-title {
    width: 100%;
    height: 50px;
    background: #ffa500;
    font-size: 16px;
    border-radius: 12px 12px 0 0;
}

.text-title-items {
    font-size: 16px;
}

.text-content {
    height: 100%;
}

.text-content-textarea {
    border-radius: 0 0 12px 12px;
}
</style>
