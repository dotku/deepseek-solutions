import React from 'react';
import { CodeBlock } from '../../components/CodeBlock';

export default function CudaSetup() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">CUDA 环境配置</h2>
      
      <p className="text-gray-600 leading-relaxed">
        在开始使用 DeepSeek 之前，请确保您的系统满足以下基本要求：
      </p>

      <ul className="list-disc list-inside space-y-2 text-gray-600">
        <li>CUDA 11.7 或更高版本</li>
        <li>NVIDIA GPU 驱动程序 515.43.04 或更高版本</li>
        <li>Python 3.8 或更高版本</li>
      </ul>

      <CodeBlock
        language="bash"
        code={`# 检查 NVIDIA 驱动
nvidia-smi

# 安装 CUDA 工具包
wget https://developer.download.nvidia.com/compute/cuda/11.7.0/local_installers/cuda_11.7.0_515.43.04_linux.run
sudo sh cuda_11.7.0_515.43.04_linux.run`}
      />
    </div>
  );
}