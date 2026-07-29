// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://dins888.github.io',
  base: '/personal-wiki',
  // 旧链接重定向（2026-07-29 分类重构：tech 拆分、training/algorithm 移至 cs-basics）
  redirects: {
    '/entries/tech/': '/personal-wiki/entries/',
    '/entries/tech/agent/': '/personal-wiki/entries/ai-apps/agent/',
    '/entries/tech/agentic/': '/personal-wiki/entries/ai-apps/agentic/',
    '/entries/tech/cherry-studio/': '/personal-wiki/entries/ai-apps/cherry-studio/',
    '/entries/tech/cliproxyapi/': '/personal-wiki/entries/ai-apps/cliproxyapi/',
    '/entries/tech/coze/': '/personal-wiki/entries/ai-apps/coze/',
    '/entries/tech/hermes/': '/personal-wiki/entries/ai-apps/hermes/',
    '/entries/tech/honcho/': '/personal-wiki/entries/ai-apps/honcho/',
    '/entries/tech/openspec/': '/personal-wiki/entries/ai-apps/openspec/',
    '/entries/tech/rag/': '/personal-wiki/entries/ai-apps/rag/',
    '/entries/tech/speckit/': '/personal-wiki/entries/ai-apps/speckit/',
    '/entries/tech/conways-law/': '/personal-wiki/entries/cs-basics/conways-law/',
    '/entries/tech/dag/': '/personal-wiki/entries/cs-basics/dag/',
    '/entries/tech/radix-tree/': '/personal-wiki/entries/cs-basics/radix-tree/',
    '/entries/tech/svg/': '/personal-wiki/entries/cs-basics/svg/',
    '/entries/tech/api/': '/personal-wiki/entries/dev-tools/api/',
    '/entries/tech/batch/': '/personal-wiki/entries/dev-tools/batch/',
    '/entries/tech/cli/': '/personal-wiki/entries/dev-tools/cli/',
    '/entries/tech/continuous-integration/': '/personal-wiki/entries/dev-tools/continuous-integration/',
    '/entries/tech/git/': '/personal-wiki/entries/dev-tools/git/',
    '/entries/tech/graphql/': '/personal-wiki/entries/dev-tools/graphql/',
    '/entries/tech/ide/': '/personal-wiki/entries/dev-tools/ide/',
    '/entries/tech/postman/': '/personal-wiki/entries/dev-tools/postman/',
    '/entries/tech/prompt-engineering/': '/personal-wiki/entries/dev-tools/prompt-engineering/',
    '/entries/tech/pull-request/': '/personal-wiki/entries/dev-tools/pull-request/',
    '/entries/tech/python31/': '/personal-wiki/entries/dev-tools/python31/',
    '/entries/tech/visual-studio-code/': '/personal-wiki/entries/dev-tools/visual-studio-code/',
    '/entries/tech/attu/': '/personal-wiki/entries/infra/attu/',
    '/entries/tech/docker/': '/personal-wiki/entries/infra/docker/',
    '/entries/tech/docker-desktop/': '/personal-wiki/entries/infra/docker-desktop/',
    '/entries/tech/elasticsearch/': '/personal-wiki/entries/infra/elasticsearch/',
    '/entries/tech/kubernetes/': '/personal-wiki/entries/infra/kubernetes/',
    '/entries/tech/linux/': '/personal-wiki/entries/infra/linux/',
    '/entries/tech/mongodb-compass/': '/personal-wiki/entries/infra/mongodb-compass/',
    '/entries/tech/neo4j-desktop/': '/personal-wiki/entries/infra/neo4j-desktop/',
    '/entries/tech/nginx/': '/personal-wiki/entries/infra/nginx/',
    '/entries/tech/redis/': '/personal-wiki/entries/infra/redis/',
    '/entries/tech/chain-of-thought/': '/personal-wiki/entries/llm/chain-of-thought/',
    '/entries/tech/cc-switch/': '/personal-wiki/entries/tools/cc-switch/',
    '/entries/tech/discord/': '/personal-wiki/entries/tools/discord/',
    '/entries/tech/legion-zone/': '/personal-wiki/entries/tools/legion-zone/',
    '/entries/tech/rss-app/': '/personal-wiki/entries/tools/rss-app/',
    '/entries/tech/utools/': '/personal-wiki/entries/tools/utools/',
    '/entries/tech/v2ex/': '/personal-wiki/entries/tools/v2ex/',
    '/entries/tech/wiztree/': '/personal-wiki/entries/tools/wiztree/',
    '/entries/training/algorithm/': '/personal-wiki/entries/cs-basics/algorithm/',
  },
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
          label: '✨ AI 应用与智能体',
          items: [{ autogenerate: { directory: 'entries/ai-apps' } }],
        },
        {
          label: '🧮 计算机科学基础',
          items: [{ autogenerate: { directory: 'entries/cs-basics' } }],
        },
        {
          label: '💻 开发工具与工程实践',
          items: [{ autogenerate: { directory: 'entries/dev-tools' } }],
        },
        {
          label: '🗄️ 基础设施与运维',
          items: [{ autogenerate: { directory: 'entries/infra' } }],
        },
        {
          label: '🛠️ 效率工具与软件',
          items: [{ autogenerate: { directory: 'entries/tools' } }],
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
