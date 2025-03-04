import type { RouteRecordRaw } from 'vue-router';
import { REDIRECT_ROUTE_NAME } from '@/router/constants';

export const DEFAULT_LAYOUT = () => import('@/layout/base-layout.vue');

export const REDIRECT_MAIN: RouteRecordRaw = {
	path: '/redirect',
	name: 'redirectWrapper',
	component: DEFAULT_LAYOUT,
	meta: {
		requiresAuth: true,
		hideInMenu: true
	},
	children: [
		{
			path: '/redirect/:path',
			name: REDIRECT_ROUTE_NAME,
			component: () => import('@/views/redirect/index.vue'),
			meta: {
				requiresAuth: true,
				hideInMenu: true
			}
		}
	]
};

export const NOT_FOUND_ROUTE: RouteRecordRaw = {
	path: '/:pathMatch(.*)*',
	name: 'notFound',
	component: () => import('@/views/not-found/index.vue')
};

export const LOGIN_ROUTE: RouteRecordRaw = {
	path: '/auth',
	name: 'auth',
	redirect: '/auth/login',
	component: () => import('@/views/auth/index.vue'),
	meta: {
		requiresAuth: false
	},
	children: [
		{
			path: 'login',
			name: 'login',
			component: () => import('@/views/auth/components/login.vue'),
			meta: {
				requiresAuth: false,
				hideInMenu: true
			}
		}
	]
};
