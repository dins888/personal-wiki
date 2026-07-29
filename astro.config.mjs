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
          label: '关于',
          link: '/about/',
        },
      ],
      lastUpdated: true,
      pagefind: {
        ranking: {
          // 标题匹配权重拉高：百科类站点最常见的搜索就是词条名本身，确保精确词条排第一
          metaWeights: { title: 10 },
          // 词频与饱和度：让反复提及该词的专属词条页胜过偶尔提及的长页面
          termFrequency: 0.5,
          termSaturation: 1.5,
          pageLength: 0.3,
        },
      },
    }),
  ],
});
