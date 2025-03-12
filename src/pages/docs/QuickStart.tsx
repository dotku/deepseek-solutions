import { CodeBlock } from '../../components/CodeBlock';

export default function QuickStart() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">快速开始</h2>
      
      <div className="prose prose-blue max-w-none">
        <p className="text-base sm:text-lg text-gray-600 break-words">
          DeepSeek 是一个强大的 AI 模型系列，提供从轻量级到超大规模的多种版本。本文档将指导您完成从环境配置到模型部署的完整流程。
        </p>

        <div className="mt-6">
          <CodeBlock
            language="bash"
            code={`# 检查系统要求
nvidia-smi
python --version`}
          />
        </div>
      </div>
    </div>
  );
}