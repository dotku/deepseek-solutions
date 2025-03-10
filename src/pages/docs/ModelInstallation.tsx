import { CodeBlock } from '../../components/CodeBlock';

export default function ModelInstallation() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-gray-900">模型下载与安装</h2>
        
        <div className="prose prose-blue max-w-none">
          <p className="text-gray-600 text-lg leading-relaxed">
            DeepSeek 提供多个版本的模型，您可以根据需求选择合适的版本：
          </p>

          <div className="mt-8">
            <CodeBlock
              language="bash"
              code={`# 下载基础模型（以 7B 为例）
ollama pull deepseek-coder:7b-base

# 下载完整版本
ollama pull deepseek-coder:7b-full

# 下载其他规格（根据需求选择）
ollama pull deepseek-coder:1.5b
ollama pull deepseek-coder:14b
ollama pull deepseek-coder:32b`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}