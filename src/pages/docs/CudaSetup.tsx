import { CodeBlock } from '../../components/CodeBlock';

export default function CudaSetup() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-gray-900">CUDA 环境配置</h2>
        
        <div className="prose prose-blue max-w-none">
          <p className="text-gray-600 text-lg leading-relaxed">
            在开始使用 DeepSeek 之前，请确保您的系统满足以下基本要求：
          </p>

          <ul className="mt-4 space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>CUDA 11.7 或更高版本</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>NVIDIA GPU 驱动程序 515.43.04 或更高版本</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Python 3.8 或更高版本</span>
            </li>
          </ul>

          <div className="mt-8">
            <CodeBlock
              language="bash"
              code={`# 检查 NVIDIA 驱动
nvidia-smi

# 安装 CUDA 工具包
wget https://developer.download.nvidia.com/compute/cuda/11.7.0/local_installers/cuda_11.7.0_515.43.04_linux.run
sudo sh cuda_11.7.0_515.43.04_linux.run`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}