import React from 'react';
import { CodeBlock } from '../../components/CodeBlock';

export default function ApiIntegration() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">API 集成示例</h2>
      
      <p className="text-gray-600 leading-relaxed">
        DeepSeek 提供了简单易用的 REST API 接口，支持多种编程语言的集成：
      </p>

      <CodeBlock
        language="bash"
        code={`curl -X POST http://localhost:11434/api/generate \\
  -H 'Content-Type: application/json' \\
  -d '{"model": "deepseek-coder:7b","prompt": "// 编写一个简单的排序函数","stream": false}'`}
      />

      <CodeBlock
        language="python"
        code={`import requests

response = requests.post(
    "http://localhost:11434/api/generate",
    json={
        "model": "deepseek-coder:7b",
        "prompt": "// Write a function to sort an array",
        "stream": False
    }
)

print(response.json())`}
      />

      <CodeBlock
        language="javascript"
        code={`const response = await fetch('http://localhost:11434/api/generate', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    model: 'deepseek-coder:7b',
    prompt: '// Write a function to sort an array',
    stream: false
  })
});

const data = await response.json();
console.log(data);`}
      />
    </div>
  );
}