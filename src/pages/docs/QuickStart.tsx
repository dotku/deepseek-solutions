import { CodeBlock } from '../../components/CodeBlock';

export default function QuickStart() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-gray-900">快速开始</h2>
        
        <div className="prose prose-blue max-w-none">
          <p className="text-gray-600 text-lg leading-relaxed">
            DeepSeek 是一个强大的 AI 模型系列，提供从轻量级到超大规模的多种版本。本文档将指导您完成从环境配置到模型部署的完整流程。
          </p>

          <div className="mt-8">
            <CodeBlock
              language="bash"
              code={`# 检查系统要求
nvidia-smi
python --version`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}