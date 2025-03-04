<template>
	<div class="container">
		<div class="logo">
			<img alt="logo" style="width: 40px" :src="$logo" />
			<div class="logo-text">{{ appStore.name }}</div>
		</div>
		<div class="login-box">
			<div class="login-box-left">
				<img src="@/assets/images/login-bg.png" alt="login left image" class="login-box-left-image" />
				<div class="login-box-left-desc">
					<div class="login-box-left-title">{{ appStore.desc }}</div>
					<div class="login-box-left-sub-title">{{ appStore.subDesc }}</div>
				</div>
			</div>
			<div class="login-box-right">
				<RouterView />
				<div class="login-box-footer">
					<Footer />
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import Footer from '@/components/footer/index.vue';
import { useAppStore } from '@/store';

const appStore = useAppStore();
</script>

<style lang="less" scoped>
.logo {
	position: fixed;
	top: 24px;
	left: 22px;
	z-index: 1;
	display: inline-flex;
	align-items: center;

	&-text {
		margin-right: 4px;
		margin-left: 4px;
		font-size: 20px;
	}
}

.container {
	padding: 0;
}

.login-box {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	height: 100vh;

	&-left {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 67%;
		padding: 100px;
		overflow: hidden;
		background: linear-gradient(154deg, #07070915 30%, hsl(211deg 91% 39%/20%) 48%, #07070915 64%);
		user-select: none;

		&-desc {
			text-align: center;
		}

		&-image {
			width: 400px;
			height: 300px;
		}

		&-title {
			color: var(--color-text-1);
			font-weight: 500;
			font-size: 24px;
			line-height: 32px;
		}

		&-sub-title {
			color: var(--color-text-2);
			font-size: 15px;
			line-height: 24px;
		}
	}

	&-right {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 33%;
		padding: 20px;
		background-color: rgb(255 255 255);
		border-left: 1px solid var(--color-border-2);
	}

	&-footer {
		position: absolute;
		bottom: 0.75rem;
		display: flex;
		text-align: center;
	}
}

// responsive
@media (max-width: @screen-sm) {
	.login-box {
		.login-box-left {
			display: none;
		}

		.login-box-right {
			width: 100%;
			border: none;
		}
	}
}
</style>
