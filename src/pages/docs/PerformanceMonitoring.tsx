import React from 'react';
import { CodeBlock } from '../../components/CodeBlock';

export default function PerformanceMonitoring() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">性能监控</h2>
      
      <p className="text-gray-600 leading-relaxed">
        为了确保服务的稳定运行，建议设置适当的性能监控：
      </p>

      <CodeBlock
        language="bash"
        code={`# 安装监控工具
pip install gpustat

# 实时监控 GPU 使用
watch -n 1 gpustat -cpu`}
      />

      <p className="text-gray-600 leading-relaxed">
        通过监控工具，您可以实时查看系统资源使用情况，及时发现并解决潜在问题。
      </p>
    </div>
  );
}