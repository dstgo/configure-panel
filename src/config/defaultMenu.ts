export default [
	{
		app: 'Configure',
		children: [
			{
				app: 'Configure',
				component: '/configure/env/index',
				createdAt: 1698986828,
				icon: 'common',
				id: 8,
				isAffix: true,
				isCache: true,
				keyword: 'ConfigureEnv',
				parentId: 7,
				path: '/configure/env',
				title: '环境管理',
				type: 'M',
				updatedAt: 1699159819,
				weight: 0
			},
			{
				app: 'Configure',
				component: '/configure/server/index',
				createdAt: 1699159786,
				icon: 'apps',
				id: 50,
				isAffix: true,
				isCache: true,
				keyword: 'ConfigureServer',
				parentId: 7,
				path: '/configure/server',
				title: '服务管理',
				type: 'M',
				updatedAt: 1699159786,
				weight: 0
			},
			{
				app: 'Configure',
				component: '/configure/resource/index',
				createdAt: 1699186200,
				icon: 'unordered-list',
				id: 55,
				isAffix: true,
				isCache: true,
				keyword: 'ConfigureResource',
				parentId: 7,
				path: '/configure/resource',
				title: '资源变量',
				type: 'M',
				updatedAt: 1699186200,
				weight: 0
			},
			{
				app: 'Configure',
				component: '/configure/business/index',
				createdAt: 1699373901,
				icon: 'code',
				id: 61,
				isAffix: true,
				isCache: true,
				keyword: 'ConfigureBusiness',
				parentId: 7,
				path: '/configure/business',
				title: '业务变量',
				type: 'M',
				updatedAt: 1699413051,
				weight: 0
			},
			{
				app: 'Configure',
				component: '/configure/template/index',
				createdAt: 1699458029,
				icon: 'file',
				id: 66,
				isAffix: true,
				isCache: true,
				keyword: 'ConfgureTemplate',
				parentId: 7,
				path: '/configure/template',
				title: '配置模板',
				type: 'M',
				updatedAt: 1699458029,
				weight: 0
			}
		],
		component: 'Layout',
		createdAt: 1698979506,
		icon: 'code-block',
		id: 7,
		keyword: 'Configure',
		path: '/configure',
		title: '配置中心',
		type: 'R',
		updatedAt: 1698979506,
		weight: 0,
		parentId: 0
	}
];
