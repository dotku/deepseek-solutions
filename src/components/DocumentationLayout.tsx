import { Link, Outlet, useLocation } from "react-router-dom";
import { ChevronLeft, FileText } from "lucide-react";

const documentationSections = [
  { path: "quick-start", title: "快速开始" },
  { path: "cuda-setup", title: "CUDA 环境配置" },
  { path: "ollama-setup", title: "Ollama 安装配置" },
  { path: "model-installation", title: "模型下载与安装" },
  { path: "system-optimization", title: "系统优化配置" },
  { path: "api-integration", title: "API 集成示例" },
  { path: "performance-monitoring", title: "性能监控" },
  { path: "system-downloads", title: "系统镜像实例下载" },
];

export default function DocumentationLayout() {
  const location = useLocation();
  const currentPath = location.pathname.split("/").pop();

  return (
    <div>
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Link
            to="/"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
          >
            <ChevronLeft className="h-5 w-5" />
            返回首页
          </Link>
        </div>
      </div>

      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto">
          {/* Documentation Header */}
          <div className="px-4 py-8 border-b bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-3">
                <FileText className="h-8 w-8 text-blue-600" />
                <h1 className="text-3xl font-bold">技术文档</h1>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex gap-8">
              {/* Fixed Sidebar Navigation */}
              <div className="w-64 flex-shrink-0">
                <div className="sticky top-24 overflow-y-auto">
                  <nav className="space-y-1">
                    {documentationSections.map((section) => (
                      <Link
                        key={section.path}
                        to={`/docs/${section.path}`}
                        className={`block px-4 py-2.5 rounded-lg transition-colors ${
                          currentPath === section.path
                            ? "bg-blue-50 text-blue-600 font-medium"
                            : "text-gray-600 hover:bg-gray-100"
                        }`}
                      >
                        {section.title}
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>

              {/* Content Area */}
              <div className="flex-1 min-w-0">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
