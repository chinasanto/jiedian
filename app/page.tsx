import Image from "next/image";

const highlights = [
  {
    title: "AI 量化研发",
    description:
      "围绕大模型协作、因子逻辑拆解与代码孵化，缩短量化研究从想法到原型的距离。",
  },
  {
    title: "研报转策略",
    description:
      "把 PDF 研报、研究纪要与知识笔记转换为结构化研究路径，并沉淀成可执行的量化逻辑。",
  },
  {
    title: "系统级交付",
    description:
      "从研究框架、回测验证到执行与监控，逐步搭出可持续迭代的量化工程链路。",
  },
];

const nextSteps = [
  "明确研究方向、交易场景与交付边界，整理成可执行的项目目标。",
  "基于 AI 协作快速完成原型、因子实验、策略逻辑和页面设计。",
  "沉淀为可部署的网站、研究资产或量化工具，并持续优化迭代。",
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <header className="masthead">
        <div className="brand-lockup">
          <div className="brand-mark">
            <Image
              src="/brand/logo-horizontal.png"
              alt="节点 Logo"
              fill
              sizes="144px"
              className="brand-mark-image"
              priority
            />
          </div>
          <div className="brand-text">
            <div className="brand-name-cn">节点</div>
            <div className="brand-name-en">QuantClaw</div>
          </div>
        </div>
        <a className="ghost-link" href="#wechat">
          微信联系
        </a>
      </header>

      <section className="hero-card hero-layout">
        <div className="hero-main">
          <div className="eyebrow">Quant Research Laboratory</div>
          <h1>节点</h1>
          <p className="hero-subtitle">QuantClaw</p>
          <p className="hero-copy">
            节点是一个聚焦 AI 量化研发与策略工程落地的实验室型站点。我们围绕大模型辅助编程、
            因子孵化、研报转策略与系统化交付，构建更高效的量化工作流。
          </p>
          <div className="hero-actions">
            <a className="primary-link" href="#focus">
              查看研究方向
            </a>
            <a className="secondary-link" href="#wechat">
              扫码联系
            </a>
          </div>
          <div className="hero-tags">
            <span>AI 量化研发</span>
            <span>因子工程</span>
            <span>研报转策略</span>
            <span>交易系统设计</span>
          </div>
        </div>

        <aside className="contact-card" id="wechat">
          <div className="card-kicker">Wechat Contact</div>
          <h2>扫码联系</h2>
          <p>
            如需交流合作、项目咨询或后续沟通，可以直接扫描下方二维码添加微信。
          </p>
          <div className="qr-frame">
            <Image
              src="/contact/wechat-qr.jpg"
              alt="节点微信二维码"
              width={1056}
              height={1441}
              className="qr-image"
              priority
            />
          </div>
          <div className="contact-caption">节点丨宇 · 湖南长沙</div>
        </aside>
      </section>

      <section className="content-grid" id="focus">
        {highlights.map((item) => (
          <article className="info-card" key={item.title}>
            <div className="card-kicker">Capability</div>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </article>
        ))}
      </section>

      <section className="steps-card" id="steps">
        <div className="section-label">Workflow</div>
        <h2>QuantClaw 的工作路径</h2>
        <div className="step-list">
          {nextSteps.map((step, index) => (
            <div className="step-item" key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <p>节点 · QuantClaw</p>
        <p>AI 量化研发 / 因子实验 / 策略系统设计</p>
      </footer>
    </main>
  );
}
