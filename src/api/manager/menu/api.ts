import menuTree from '@/config/defaultMenu';

// ListMenuByCurRole 获取菜单信息列表
export async function ListMenuByCurRole() {
	return { data: { list: menuTree } };
}

export default null;
