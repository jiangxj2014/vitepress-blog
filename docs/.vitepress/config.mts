import { defineConfig } from "vitepress";

// 导航菜单配置
const navMenus = [
  { text: "首页", link: "/" },
  {
    text: "开发学习",
    link: "/study/vue3/",
    // items: [
    //   { text: "Vue3", link: "/study/vue3/" },
    //   { text: "MarkDown", link: "/study/markdown/" },
    // ],
  },
  { text: "工具", link: "/tools/" },
];
// 侧边导航菜单配置
const sidebarMenus = {
  "/study/": [
    { text: "Vue3", link: "/study/vue3/" },
    { text: "MarkDown", link: "/study/markdown/" },
  ],
  "/tools/": [
    { text: "工具收藏", link: "/tools/" },
    { text: "Git 配置多个 SSH-Key", link: "/tools/multiple-ssh-keys" }
  ],
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "执笔写余生",
  description: "使用 VitePress 建立",
  head: [
    [
      'link',
      // 部署到根目录： '/favicon.ico'   子目录示例：'/vitepress-blog/favicon.ico'
      { rel: 'icon', href: '/favicon.ico' },
    ],
  ],
  base: '/', // 部署到根目录： '/'   子目录示例：'/vitepress-blog/'
  lastUpdated: true,

  themeConfig: {
    logo: '/favicon.ico',
    search: {
      provider: 'local',
    },
    docFooter: { prev: '上一页', next: '下一页' },
    lastUpdatedText: '上次更新',
    outlineTitle: '页面导航',
    returnToTopLabel: '返回顶部',

    // https://vitepress.dev/reference/default-theme-config
    nav: navMenus,
    sidebar: sidebarMenus,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/jiangxj2014/vitepress-blog' },
    ],
    editLink: {
      pattern: 'https://github.com/jiangxj2014/vitepress-blog/edit/master/docs/:path',
      text: '在 GitHub 中编辑此页'
    },    
  }
});
