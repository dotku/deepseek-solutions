import { CodeBlock } from '../../components/CodeBlock';

export default function SystemOptimization() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-gray-900">系统优化配置</h2>
        
        <div className="prose prose-blue max-w-none">
          <p className="text-gray-600 text-lg leading-relaxed">
            为了获得最佳性能，您需要对系统进行一些优化配置：
          </p>

          <div className="mt-8">
            <CodeBlock
              language="bash"
              code={`# 配置 GPU 内存限制
export CUDA_VISIBLE_DEVICES=0
export PYTORCH_CUDA_ALLOC_CONF=max_split_size_mb:512

# 优化系统缓存
echo 3 > /proc/sys/vm/drop_caches`}
            />
          </div>

          <p className="text-gray-600 text-lg leading-relaxed mt-6">
            这些配置将帮助您获得更好的模型性能和系统稳定性。
          </p>
        </div>
      </div>
    </div>
  );
}