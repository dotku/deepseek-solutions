import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Server, Cpu, Database, Shield, BarChart3, Calculator, Scale, Layers, HardDrive, MessageCircle } from 'lucide-react';

function FeatureCard({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ModelCard({ 
  size, 
  memory, 
  gpu, 
  gpuCount,
  storage,
  useCase 
}: { 
  size: string, 
  memory: string, 
  gpu: string,
  gpuCount: string,
  storage: string,
  useCase: string 
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-blue-100">
      <h3 className="text-xl font-bold text-blue-600 mb-4">{size}</h3>
      <div className="space-y-3">
        <div className="flex items-start gap-2">
          <HardDrive className="h-5 w-5 text-blue-500 mt-1" />
          <span className="text-gray-600">内存需求: {memory}</span>
        </div>
        <div className="flex items-start gap-2">
          <Cpu className="h-5 w-5 text-blue-500 mt-1" />
          <span className="text-gray-600">推荐显卡: {gpu}</span>
        </div>
        <div className="flex items-start gap-2">
          <Server className="h-5 w-5 text-blue-500 mt-1" />
          <span className="text-gray-600">显卡数量: {gpuCount}</span>
        </div>
        <div className="flex items-start gap-2">
          <Database className="h-5 w-5 text-blue-500 mt-1" />
          <span className="text-gray-600">存储空间: {storage}</span>
        </div>
        <div className="flex items-start gap-2">
          <Layers className="h-5 w-5 text-blue-500 mt-1" />
          <span className="text-gray-600">适用场景: {useCase}</span>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children, className = "" }: { title: string, children: React.ReactNode, className?: string }) {
  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        {children}
      </div>
    </section>
  );
}

export default function App() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">DeepSeek 部署教程</h1>
            <p className="text-xl mb-8">从环境配置到模型优化的完整指南</p>
            <div className="flex justify-center gap-4">
              <button 
                onClick={() => navigate('/docs/quick-start')}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                开始学习
              </button>
              <button 
                onClick={() => navigate('/docs/quick-start')}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                技术文档
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
          <p className="text-gray-600 text-center">DeepSeek 提供多种规格的模型，从轻量级到超大规模，满足不同场景需求</p>
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
              a: "根据业务需求和硬件配置选择。基础版本适合一般任务，完整版本支持更复杂的场景。1.5B-7B适合个人开发，8B-14B适合企业应用，32B以上适合大规模系统。671B版本主要用于研究机构的前沿探索。"
            },
            {
              q: "支持哪些编程语言的接入？",
              a: "提供 Python、Node.js、Java 等主流语言的 SDK，支持 REST API 方式接入。"
            },
            {
              q: "如何确保数据安全？",
              a: "支持私有化部署，数据本地处理，可配置访问控制和加密传输。"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">{item.q}</h3>
              <p className="text-gray-600">{item.a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-blue-900 text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">需要专业部署支持？</h2>
          <p className="text-xl mb-8">我们的技术团队提供全程部署指导和优化服务</p>
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-lg mb-4">
              <MessageCircle className="h-6 w-6" />
              <span>销售咨询微信：xinmai002leo</span>
            </div>
            <div className="flex justify-center gap-4">
              <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                联系我们
              </button>
              <button 
                onClick={() => navigate('/docs/quick-start')}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                技术文档
              </button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}