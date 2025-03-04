import { createApp } from 'vue';
import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import globalComponents from '@/components';
import router from '@/router';
import store, { useAppStore } from '@/store';
import directive from '@/directive';
import App from '@/App.vue';
import '@/assets/style/global.less';
import '@/utils/interceptor';
import { formatUrl } from '@/utils/url';
import { formatTime, parseTime } from '@/utils/time';
import { densityList, genderList } from '@/utils/consts';
import { hasPermission } from '@/utils/permission';
// eslint-disable-next-line import/no-unresolved
import 'virtual:svg-icons-register';
import '@/assets/style/them/gray.less';

const app = createApp(App);
if (import.meta.env?.MODE === 'development') {
	app.use(ArcoVue, {});
}
app.use(ArcoVueIcon);
app.use(router);
app.use(store);
app.use(globalComponents);
app.use(directive);

const appStore = useAppStore();

app.config.globalProperties.$logo = appStore.logo;
app.config.globalProperties.$rurl = formatUrl;
app.config.globalProperties.$formatTime = formatTime;
app.config.globalProperties.$parseTime = parseTime;
app.config.globalProperties.$densityList = densityList;
app.config.globalProperties.$genderList = genderList;
app.config.globalProperties.$hasPermission = hasPermission;

document.title = appStore.title;
app.mount('#app');
