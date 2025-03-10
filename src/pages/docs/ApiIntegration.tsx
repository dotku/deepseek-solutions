import { CodeBlock } from '../../components/CodeBlock';

export default function ApiIntegration() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-gray-900">API 集成示例</h2>
        
        <div className="prose prose-blue max-w-none">
          <p className="text-gray-600 text-lg leading-relaxed">
            DeepSeek 提供了简单易用的 REST API 接口，支持多种编程语言的集成：
          </p>

          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">cURL 请求示例</h3>
              <CodeBlock
                language="bash"
                code={`curl -X POST http://localhost:11434/api/generate \\
  -H 'Content-Type: application/json' \\
  -d '{"model": "deepseek-coder:7b","prompt": "// 编写一个简单的排序函数","stream": false}'`}
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Python 集成示例</h3>
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
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">JavaScript 集成示例</h3>
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
          </div>
        </div>
      </div>
    </div>
  );
}