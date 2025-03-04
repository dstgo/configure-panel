<template>
	<a-layout-footer class="footer">{{ appStore.copyright }}</a-layout-footer>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/store';

const appStore = useAppStore();
</script>

<style lang="less" scoped>
.footer {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 40px;
	color: var(--color-text-3);
	font-size: 11px;
	text-align: center;
}
</style>
