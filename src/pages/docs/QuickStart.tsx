import React from 'react';
import { CodeBlock } from '../../components/CodeBlock';

export default function QuickStart() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">快速开始</h2>
      
      <p className="text-gray-600 leading-relaxed">
        DeepSeek 是一个强大的 AI 模型系列，提供从轻量级到超大规模的多种版本。本文档将指导您完成从环境配置到模型部署的完整流程。
      </p>

      <CodeBlock
        language="bash"
        code={`# 检查系统要求
nvidia-smi
python --version`}
      />
    </div>
  );
}