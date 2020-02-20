/**
 * 系统菜单配置
 */

const fullMenus = [
  // {
  //   title: '列表应用',      //菜单项的名字
  //   key: 'tablelist',      //菜单项的键名（没有children时，要与“路由”中定义的name一致）
  //   icon: 'icon-grid-2',   //菜单项的图标
  //   children: [            //当前菜单项的子菜单项
  //     {
  //       title: '基础表格',  //子菜单项的名字
  //       key: 'TableBasic'  //子菜单项的键名（需要与“路由”中children定义的name一直）
  //     },
  //   ],
  //   count: 1               //可在菜单项中显示数量，如：提示1条未读消息
  // },
  {
    title: '系统设置',
    key: 'SysSetting',
    icon: 'icon-cog',
    children: [
      {
        title: '安全设置',
        key: 'SecuritySetting'
      },
      {
        title: '通知设置',
        key: 'NoticeSetting'
      }
    ]
  }
];

//获取菜单
const getMenus = function (menuIdList = []) {
  return getAuthMenu(fullMenus, menuIdList);
};

//获取有权限的菜单
let getAuthMenu = (menus, menuIdList) => {
  let configMenu = [];
  for (let menu of menus) {
    let m = Utils.copy(menu);
    if (menuIdList.indexOf(m.key) > -1) {
      configMenu.push(m);
    }
    if (menu.children && menu.children.length) {
      m.children = getAuthMenu(menu.children, menuIdList);
    }
  }
  return configMenu;
};

const getKeys = function (menus) {
  let keys = [];
  for (let menu of menus) {
    keys.push(menu.key);
    if (menu.children && menu.children.length) {
      keys.push(...getKeys(menu.children));
    }
  }
  return keys;
};

let fullMenuKeys = getKeys(fullMenus);

const isAuthPage = function (name) {
  let menus = G.get('SYS_MENUS') || [];
  if (fullMenuKeys.indexOf(name) > -1 && menus.indexOf(name) == -1) {
    return false;
  }
  return true;
};

export { getMenus, fullMenus, fullMenuKeys, isAuthPage };
