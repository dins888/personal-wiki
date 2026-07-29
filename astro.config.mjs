// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://dins888.github.io',
  base: '/personal-wiki',
  // 旧链接重定向（2026-07-29 分类重构：tech 拆分、training/algorithm 移至 cs-basics）
  redirects: {
    '/entries/tech/': '/entries/',
    '/entries/tech/agent/': '/entries/ai-apps/agent/',
    '/entries/tech/agentic/': '/entries/ai-apps/agentic/',
    '/entries/tech/cherry-studio/': '/entries/ai-apps/cherry-studio/',
    '/entries/tech/cliproxyapi/': '/entries/ai-apps/cliproxyapi/',
    '/entries/tech/coze/': '/entries/ai-apps/coze/',
    '/entries/tech/hermes/': '/entries/ai-apps/hermes/',
    '/entries/tech/honcho/': '/entries/ai-apps/honcho/',
    '/entries/tech/openspec/': '/entries/ai-apps/openspec/',
    '/entries/tech/rag/': '/entries/ai-apps/rag/',
    '/entries/tech/speckit/': '/entries/ai-apps/speckit/',
    '/entries/tech/conways-law/': '/entries/cs-basics/conways-law/',
    '/entries/tech/dag/': '/entries/cs-basics/dag/',
    '/entries/tech/radix-tree/': '/entries/cs-basics/radix-tree/',
    '/entries/tech/svg/': '/entries/cs-basics/svg/',
    '/entries/tech/api/': '/entries/dev-tools/api/',
    '/entries/tech/batch/': '/entries/dev-tools/batch/',
    '/entries/tech/cli/': '/entries/dev-tools/cli/',
    '/entries/tech/continuous-integration/': '/entries/dev-tools/continuous-integration/',
    '/entries/tech/git/': '/entries/dev-tools/git/',
    '/entries/tech/graphql/': '/entries/dev-tools/graphql/',
    '/entries/tech/ide/': '/entries/dev-tools/ide/',
    '/entries/tech/postman/': '/entries/dev-tools/postman/',
    '/entries/tech/prompt-engineering/': '/entries/dev-tools/prompt-engineering/',
    '/entries/tech/pull-request/': '/entries/dev-tools/pull-request/',
    '/entries/tech/python31/': '/entries/dev-tools/python31/',
    '/entries/tech/visual-studio-code/': '/entries/dev-tools/visual-studio-code/',
    '/entries/tech/attu/': '/entries/infra/attu/',
    '/entries/tech/docker/': '/entries/infra/docker/',
    '/entries/tech/docker-desktop/': '/entries/infra/docker-desktop/',
    '/entries/tech/elasticsearch/': '/entries/infra/elasticsearch/',
    '/entries/tech/kubernetes/': '/entries/infra/kubernetes/',
    '/entries/tech/linux/': '/entries/infra/linux/',
    '/entries/tech/mongodb-compass/': '/entries/infra/mongodb-compass/',
    '/entries/tech/neo4j-desktop/': '/entries/infra/neo4j-desktop/',
    '/entries/tech/nginx/': '/entries/infra/nginx/',
    '/entries/tech/redis/': '/entries/infra/redis/',
    '/entries/tech/chain-of-thought/': '/entries/llm/chain-of-thought/',
    '/entries/tech/cc-switch/': '/entries/tools/cc-switch/',
    '/entries/tech/discord/': '/entries/tools/discord/',
    '/entries/tech/legion-zone/': '/entries/tools/legion-zone/',
    '/entries/tech/rss-app/': '/entries/tools/rss-app/',
    '/entries/tech/utools/': '/entries/tools/utools/',
    '/entries/tech/v2ex/': '/entries/tools/v2ex/',
    '/entries/tech/wiztree/': '/entries/tools/wiztree/',
    '/entries/training/algorithm/': '/entries/cs-basics/algorithm/',
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
