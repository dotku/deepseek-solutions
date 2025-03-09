import React from 'react';
import { CodeBlock } from '../../components/CodeBlock';

export default function OllamaSetup() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Ollama 安装配置</h2>
      
      <p className="text-gray-600 leading-relaxed">
        Ollama 是一个简化模型部署流程的工具，它能帮助您更轻松地管理和使用 DeepSeek 模型。
      </p>

      <CodeBlock
        language="bash"
        code={`# 安装 Ollama
curl -fsSL https://ollama.com/install.sh | sh

# 验证安装
ollama --version`}
      />

      <p className="text-gray-600 leading-relaxed">
        安装完成后，您可以使用 Ollama 来下载和管理不同版本的 DeepSeek 模型。
      </p>
    </div>
  );
}