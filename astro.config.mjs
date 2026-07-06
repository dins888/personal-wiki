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
          label: '📖 全部词条',
          link: '/entries/',
        },
        {
          label: '📚 AI 基础概念',
          items: [{ autogenerate: { directory: 'entries/ai-basics' } }],
        },
        {
          label: '🤖 大语言模型',
          items: [{ autogenerate: { directory: 'entries/llm' } }],
        },
        {
          label: '🎓 训练与优化',
          items: [{ autogenerate: { directory: 'entries/training' } }],
        },
        {
          label: '🔧 技术应用',
          items: [{ autogenerate: { directory: 'entries/tech' } }],
        },
        {
          label: '📋 关于',
          items: [{ slug: 'about' }],
        },
      ],
      lastUpdated: true,
    }),
  ],
});
