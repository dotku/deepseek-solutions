export default function SystemDownloads() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-gray-900">系统镜像下载</h2>

        <div className="prose prose-blue max-w-none">
          <p className="text-gray-600 text-lg leading-relaxed">
            我们提供了预配置的系统镜像，已针对 DeepSeek 进行了优化：
          </p>

          <div className="mt-8 space-y-6">
            {/* Kylin System */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                银河麒麟桌面版 SP1 2403
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-blue-700">文件名：</span>
                  <span className="text-gray-700">
                    kylink-desktop-sp1-2403.vmwarevm
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-blue-700">下载链接：</span>
                  <a
                    href="https://pan.baidu.com/s/1fxk5RJjQxICbHwEnpE5DLw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 underline"
                  >
                    百度网盘链接
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-blue-700">提取码：</span>
                  <code className="bg-blue-100 px-2 py-1 rounded text-blue-700">
                    x8yc
                  </code>
                </div>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold mb-2">系统说明</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">•</span>
                      <span>VMware 虚拟机格式，支持直接导入使用</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">•</span>
                      <span>预装 CUDA 和 GPU 驱动</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">•</span>
                      <span>针对 DeepSeek 模型进行了性能优化</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Ubuntu System */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                Ubuntu 24.04 LTS
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-blue-700">文件名：</span>
                  <span className="text-gray-700">ubuntu24.vbox</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-blue-700">下载链接：</span>
                  <a
                    href="https://pan.baidu.com/s/1gnwGFSa7-gh9YoRYU1GQMA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 underline"
                  >
                    百度网盘链接
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-blue-700">提取码：</span>
                  <code className="bg-blue-100 px-2 py-1 rounded text-blue-700">
                    8dwx
                  </code>
                </div>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold mb-2">系统说明</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">•</span>
                      <span>VirtualBox 虚拟机格式，支持直接导入使用</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">•</span>
                      <span>预装 CUDA 和 GPU 驱动</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">•</span>
                      <span>针对 DeepSeek 模型进行了性能优化</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
