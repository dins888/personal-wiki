// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://dins888.github.io',
  base: '/personal-wiki',
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
        { icon: 'github', label: 'GitHub', href: 'https://github.com/dins888/personal-wiki' },
      ],
      logo: {
        src: './src/assets/logo.jpg',
        alt: '个人百科知识库',
        replacesTitle: true,
      },
      sidebar: [
        {
          label: ' 全部词条',
          link: '/entries/',
        },
        {
          label: '📚 AI 基础概念',
          items: [
            { label: '🏠 分类首页', link: '/entries/ai-basics/' },
            { autogenerate: { directory: 'entries/ai-basics', collapsed: true } },
          ],
        },
        {
          label: '🤖 大语言模型',
          items: [
            { label: '🏠 分类首页', link: '/entries/llm/' },
            { autogenerate: { directory: 'entries/llm', collapsed: true } },
          ],
        },
        {
          label: '🎓 训练与优化',
          items: [
            { label: '🏠 分类首页', link: '/entries/training/' },
            { autogenerate: { directory: 'entries/training', collapsed: true } },
          ],
        },
        {
          label: '🔧 技术应用',
          items: [
            { label: '🏠 分类首页', link: '/entries/tech/' },
            { autogenerate: { directory: 'entries/tech', collapsed: true } },
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
