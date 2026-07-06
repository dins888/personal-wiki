// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: '个人百科知识库',
      defaultLocale: 'root',
      locales: {
        root: {
          label: '中文',
          lang: 'zh-CN',
        },
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/' },
      ],
      sidebar: [
        {
          label: '📖 百科词条',
          autogenerate: { directory: 'entries' },
        },
        {
          label: '📂 分类索引',
          items: [
            { label: '技术', slug: 'categories/tech' },
            { label: '商业', slug: 'categories/business' },
            { label: '科学', slug: 'categories/science' },
            { label: '生活', slug: 'categories/life' },
          ],
        },
        {
          label: '📋 关于',
          items: [
            { label: '项目说明', slug: 'about' },
          ],
        },
      ],
      lastUpdated: true,
    }),
  ],
});
