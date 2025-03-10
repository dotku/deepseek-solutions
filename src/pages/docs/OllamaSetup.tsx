import { CodeBlock } from '../../components/CodeBlock';

export default function OllamaSetup() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-gray-900">Ollama 安装配置</h2>
        
        <div className="prose prose-blue max-w-none">
          <p className="text-gray-600 text-lg leading-relaxed">
            Ollama 是一个简化模型部署流程的工具，它能帮助您更轻松地管理和使用 DeepSeek 模型。
          </p>

          <div className="mt-8">
            <CodeBlock
              language="bash"
              code={`# 安装 Ollama
curl -fsSL https://ollama.com/install.sh | sh

# 验证安装
ollama --version`}
            />
          </div>

          <p className="text-gray-600 text-lg leading-relaxed mt-6">
            安装完成后，您可以使用 Ollama 来下载和管理不同版本的 DeepSeek 模型。
          </p>
        </div>
      </div>
    </div>
  );
}