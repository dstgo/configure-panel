<template>
	<div class="login-form-wrapper">
		<div class="login-form-title">欢迎登陆 👋🏻</div>
		<div class="login-form-sub-title">输入您的账号密码以开始使用配置中心</div>
		<div class="login-form-error-msg">{{ errorMessage }}</div>
		<a-form :model="loginForm" class="login-form" layout="vertical" @submit="handleSubmit">
			<a-form-item field="username" :rules="[{ required: true, message: '账户不能为空' }]" :validate-trigger="['change', 'blur']" hide-label>
				<a-input v-model="loginForm.username" size="large" placeholder="请输入账户">
					<template #prefix>
						<icon-user />
					</template>
				</a-input>
			</a-form-item>
			<a-form-item field="password" :rules="[{ required: true, message: '密码不能为空' }]" :validate-trigger="['change', 'blur']" hide-label>
				<a-input-password v-model="loginForm.password" size="large" placeholder="请输入密码" allow-clear autocomplete>
					<template #prefix>
						<icon-lock />
					</template>
				</a-input-password>
			</a-form-item>
			<a-space :size="16" direction="vertical">
				<div class="login-form-password-actions">
					<a-checkbox checked="rememberPassword" :model-value="loginConfig.rememberPassword" @change="setRememberPassword as any">记住密码</a-checkbox>
				</div>
				<a-button size="large" type="primary" html-type="submit" long :loading="loading">登录</a-button>
			</a-space>
		</a-form>
	</div>
</template>

<script setup lang="ts">
import Footer from '@/components/footer/index.vue';
import { ref, reactive, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { Message } from '@arco-design/web-vue';
import { ValidatedError } from '@arco-design/web-vue/es/form/interface';
import { useStorage } from '@vueuse/core';
import { useUserStore, useAppStore } from '@/store';
import useLoading from '@/hooks/loading';
import { UserLoginRequest } from '@/api/manager/user/type';

const timeInter: any = ref(null);
const router = useRouter();
const errorMessage = ref('');

const { loading, setLoading } = useLoading();
const userStore = useUserStore();
const appStore = useAppStore();
const loginConfig = useStorage('login-config', {
	rememberPassword: true,
	username: '',
	password: ''
});

onUnmounted(() => {
	clearInterval(timeInter.value);
	timeInter.value = null;
});

const loginForm = reactive<UserLoginRequest>({
	username: loginConfig.value.username,
	password: loginConfig.value.password
});

const handleSubmit = async ({ errors, values }: { errors: Record<string, ValidatedError> | undefined; values: Record<string, any> }) => {
	if (loading.value) return;
	if (!errors) {
		setLoading(true);
		try {
			await userStore.login(values as UserLoginRequest);
			// 不引用导致不回跳转
			const { redirect, ...othersQuery } = router.currentRoute.value.query;
			if (redirect && router.hasRoute(redirect as string)) {
				router.push({ name: redirect as string, query: { ...othersQuery } });
			} else {
				router.push({ path: '/', query: { ...othersQuery } });
			}

			Message.success('登陆成功');
			const { rememberPassword } = loginConfig.value;
			const { username, password } = values;
			loginConfig.value.username = rememberPassword ? username : '';
			loginConfig.value.password = rememberPassword ? password : '';
		} catch (err) {
			errorMessage.value = (err as Error).message;
		} finally {
			setLoading(false);
		}
	}
};
const setRememberPassword = (value: boolean) => {
	loginConfig.value.rememberPassword = value;
};
</script>

<style scoped lang="less">
.login-form {
	&-wrapper {
		width: 80%;
	}

	&-title {
		color: var(--color-text-1);
		font-weight: 700;
		font-size: 24px;
		line-height: 32px;
	}

	&-sub-title {
		color: var(--color-text-2);
		font-size: 15px;
		line-height: 24px;
	}

	&-error-msg {
		height: 32px;
		color: rgb(var(--red-6));
		line-height: 32px;
	}

	&-password-actions {
		display: flex;
		justify-content: space-between;
	}

	&-register-btn {
		color: var(--color-text-3) !important;
	}

	&-link {
		color: var(--color-link-light-4);
		cursor: pointer;

		&:active {
			color: var(--color-link-light-2);
		}
	}

	&-bottom {
		display: flex;
		justify-content: center;
	}
}

// responsive
@media (max-width: @screen-sm) {
	.login-form {
		&-wrapper {
			width: 90%;
		}
	}
}
</style>
