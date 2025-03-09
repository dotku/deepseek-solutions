import React from 'react';
import { CodeBlock } from '../../components/CodeBlock';

export default function ModelInstallation() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">模型下载与安装</h2>
      
      <p className="text-gray-600 leading-relaxed">
        DeepSeek 提供多个版本的模型，您可以根据需求选择合适的版本：
      </p>

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
  );
}