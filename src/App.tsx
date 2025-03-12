import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Server,
  Cpu,
  Database,
  Shield,
  BarChart3,
  Calculator,
  Scale,
  Layers,
  HardDrive,
  MessageCircle,
  X,
} from "lucide-react";

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="h-10 sm:h-12 w-10 sm:w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
        <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm sm:text-base text-gray-600">{description}</p>
    </div>
  );
}

function ModelCard({
  size,
  memory,
  gpu,
  gpuCount,
  storage,
  useCase,
}: {
  size: string;
  memory: string;
  gpu: string;
  gpuCount: string;
  storage: string;
  useCase: string;
}) {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-blue-100">
      <h3 className="text-lg sm:text-xl font-bold text-blue-600 mb-4">{size}</h3>
      <div className="space-y-2 sm:space-y-3">
        <div className="flex items-start gap-2">
          <HardDrive className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 mt-1" />
          <span className="text-sm sm:text-base text-gray-600">内存需求: {memory}</span>
        </div>
        <div className="flex items-start gap-2">
          <Cpu className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 mt-1" />
          <span className="text-sm sm:text-base text-gray-600">推荐显卡: {gpu}</span>
        </div>
        <div className="flex items-start gap-2">
          <Server className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 mt-1" />
          <span className="text-sm sm:text-base text-gray-600">显卡数量: {gpuCount}</span>
        </div>
        <div className="flex items-start gap-2">
          <Database className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 mt-1" />
          <span className="text-sm sm:text-base text-gray-600">存储空间: {storage}</span>
        </div>
        <div className="flex items-start gap-2">
          <Layers className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 mt-1" />
          <span className="text-sm sm:text-base text-gray-600">适用场景: {useCase}</span>
        </div>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-8 sm:py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">{title}</h2>
        {children}
      </div>
    </section>
  );
}

export default function App() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { href: "https://deepseek.sienovo.cn", text: "解决方案" },
    { href: "https://sienovo.cn/#products", text: "产品中心" },
    { href: "https://sienovo.cn/#cases", text: "客户案例" },
    { href: "https://sienovo.cn/#news", text: "新闻中心" },
    { href: "https://sienovo.cn/#about", text: "关于我们" },
    { href: "https://sienovo.cn/#contact", text: "联系我们" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Navigation */}
      <header className="bg-blue-800 fixed w-full top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a
                href="https://sienovo.cn"
                className="text-xl sm:text-2xl font-bold text-white hover:text-blue-200 transition-colors"
              >
                信迈智科 Sienovo
              </a>
            </div>
            <nav className="hidden md:flex space-x-8">
              {menuItems.slice(0, -1).map((item) => (
                <a
                  key={item.text}
                  href={item.href}
                  className="text-white hover:text-blue-200 font-medium"
                >
                  {item.text}
                </a>
              ))}
            </nav>
            <div className="flex items-center">
              <a
                href="https://sienovo.cn/#contact"
                className="hidden md:block text-white hover:text-blue-200 font-medium"
              >
                联系我们
              </a>
              <button 
                className="md:hidden text-white hover:text-blue-200"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-blue-900/95 z-50 md:hidden">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4">
              <a
                href="https://sienovo.cn"
                className="text-xl font-bold text-white"
              >
                信迈智科 Sienovo
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white p-2"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-col p-4 space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.text}
                  href={item.href}
                  className="text-white hover:text-blue-200 font-medium text-lg py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.text}
                </a>
              ))}
            </nav>
            <div className="mt-auto p-4">
              <div className="text-white text-sm">
                <p>联系我们：</p>
                <p className="mt-2">电话：+86-755-86950699</p>
                <p className="mt-1">邮箱：sales@sienovo.cn</p>
                <p className="mt-1">地址：深圳市宝安区72区新安街道宝石路29号蓝坤集团A栋4层</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white pt-16">
        <div className="container mx-auto px-4 py-12 sm:py-24">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6">
              智能大模型解决方案
            </h1>
            <h2 className="text-lg sm:text-2xl font-medium mb-6 sm:mb-8 text-blue-100">
              为企业提供安全、稳定、高性能的 AI 应用部署方案
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 sm:mt-12">
              <button
                onClick={() => navigate("/contact")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold transition-colors text-base sm:text-lg w-full sm:w-auto"
              >
                立即咨询
              </button>
              <button
                onClick={() => navigate("/docs")}
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold transition-colors text-base sm:text-lg w-full sm:w-auto"
              >
                了解更多
              </button>
            </div>
          </div>
        </div>
        {/* WeChat Contact Banner */}
        <div className="bg-blue-700 py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-2 text-white">
              <MessageCircle className="h-5 w-5" />
              <span className="font-medium">销售咨询微信：xinmai002leo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Model Comparison */}
      <Section title="模型版本对比" className="bg-white">
        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-gray-600 text-center">
            DeepSeek 提供多种规格的模型，从轻量级到超大规模，满足不同场景需求
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ModelCard
            size="DeepSeek 1.5B"
            memory="4GB"
            gpu="NVIDIA GTX 1650、RTX 3050"
            gpuCount="1"
            storage="50GB"
            useCase="代码补全、基础文本生成"
          />
          <ModelCard
            size="DeepSeek 7B"
            memory="16GB"
            gpu="NVIDIA RTX 3060、RTX 4060"
            gpuCount="1"
            storage="100GB"
            useCase="中等复杂度编程、文档生成"
          />
          <ModelCard
            size="DeepSeek 8B"
            memory="16GB"
            gpu="NVIDIA RTX 3060 Ti、RTX 3070"
            gpuCount="1"
            storage="100GB"
            useCase="代码分析、技术文档撰写"
          />
          <ModelCard
            size="DeepSeek 14B"
            memory="28GB"
            gpu="NVIDIA RTX 3080、RTX 3090"
            gpuCount="1"
            storage="200GB"
            useCase="复杂代码生成、多语言编程"
          />
          <ModelCard
            size="DeepSeek 32B"
            memory="64GB"
            gpu="NVIDIA RTX 4090、A100 40GB"
            gpuCount="1-2"
            storage="500GB"
            useCase="深度代码理解、系统设计"
          />
          <ModelCard
            size="DeepSeek 70B"
            memory="140GB"
            gpu="NVIDIA A100 80GB"
            gpuCount="2-4"
            storage="1TB"
            useCase="企业级应用、大规模系统开发"
          />
          <ModelCard
            size="DeepSeek 671B"
            memory="1.3TB"
            gpu="NVIDIA A100 80GB"
            gpuCount="8+"
            storage="2TB"
            useCase="超大规模AI系统、前沿研究"
          />
        </div>
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">选择建议</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <Scale className="h-5 w-5 text-blue-600 mt-1" />
                <span>个人开发者：建议使用 1.5B-7B 版本，满足日常开发需求</span>
              </li>
              <li className="flex items-start gap-2">
                <Scale className="h-5 w-5 text-blue-600 mt-1" />
                <span>中小企业：推荐 8B-14B 版本，平衡性能和资源消耗</span>
              </li>
              <li className="flex items-start gap-2">
                <Scale className="h-5 w-5 text-blue-600 mt-1" />
                <span>大型企业：可考虑 32B-70B 版本，处理复杂业务场景</span>
              </li>
              <li className="flex items-start gap-2">
                <Scale className="h-5 w-5 text-blue-600 mt-1" />
                <span>研究机构：671B 版本适用于前沿AI研究和超大规模计算</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Prerequisites */}
      <Section title="环境要求">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={Cpu}
            title="GPU 配置"
            description="NVIDIA RTX 3070 或更高，CUDA 11.7+"
          />
          <FeatureCard
            icon={Server}
            title="内存要求"
            description="16GB RAM 以上，推荐 32GB 以上用于大模型"
          />
          <FeatureCard
            icon={Database}
            title="存储空间"
            description="最少 100GB SSD，建议 500GB 以上用于多个模型"
          />
        </div>
      </Section>

      {/* Use Cases */}
      <Section title="应用场景" className="bg-gray-100">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={Calculator}
            title="财务数据处理"
            description="自动化处理财务报表、发票识别、数据提取，支持多种格式转换"
          />
          <FeatureCard
            icon={BarChart3}
            title="智能分析预测"
            description="基于历史数据进行财务趋势分析、风险评估、市场预测"
          />
          <FeatureCard
            icon={Shield}
            title="合规审计"
            description="自动化合规检查、异常交易识别、反洗钱风险监控"
          />
        </div>
      </Section>

      {/* FAQ Section */}
      <Section title="常见问题">
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              q: "如何选择合适的模型版本？",
              a: "根据业务需求和硬件配置选择。基础版本适合一般任务，完整版本支持更复杂的场景。1.5B-7B适合个人开发，8B-14B适合企业应用，32B以上适合大规模系统。671B版本主要用于研究机构的前沿探索。",
            },
            {
              q: "支持哪些编程语言的接入？",
              a: "提供 Python、Node.js、Java 等主流语言的 SDK，支持 REST API 方式接入。",
            },
            {
              q: "如何确保数据安全？",
              a: "支持私有化部署，数据本地处理，可配置访问控制和加密传输。",
            },
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">{item.q}</h3>
              <p className="text-gray-600">{item.a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section title="联系我们" className="bg-blue-900 text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">需要专业部署支持？</h2>
          <p className="text-xl mb-8">
            我们的技术团队提供全程部署指导和优化服务
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-2 text-lg">
                <MessageCircle className="h-6 w-6" />
                <span>销售咨询微信：xinmai002leo</span>
              </div>
              <div className="flex justify-center gap-4">
                <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  联系我们
                </button>
                <button
                  onClick={() => navigate("/docs/quick-start")}
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  技术文档
                </button>
              </div>
            </div>
            <div className="w-48 bg-white p-3 rounded-lg">
              <img
                src={`${import.meta.env.BASE_URL}/images/contact-qr.png`}
                alt="技术支持二维码"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
