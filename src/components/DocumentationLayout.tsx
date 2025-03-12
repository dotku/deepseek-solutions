import { Link, Outlet, useLocation } from "react-router-dom";
import { ChevronLeft, FileText, Menu, X, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const documentationSections = [
  { path: "quick-start", title: "快速开始" },
  { path: "cuda-setup", title: "CUDA 环境配置" },
  { path: "ollama-setup", title: "Ollama 安装配置" },
  { path: "model-installation", title: "模型下载与安装" },
  { path: "system-optimization", title: "系统优化配置" },
  { path: "api-integration", title: "API 集成示例" },
  { path: "performance-monitoring", title: "性能监控" },
  { path: "system-downloads", title: "系统镜像实例下载" },
  { path: "sales-support", title: "销售支持" },
];

export default function DocumentationLayout() {
  const location = useLocation();
  const currentPath = location.pathname.split("/").pop();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    // 设置当前章节标题
    const section = documentationSections.find(
      (s) => s.path === currentPath
    );
    setCurrentSection(section?.title || "快速开始");
    // 关闭移动导航
    setIsNavOpen(false);
  }, [currentPath]);

  const NavigationContent = () => (
    <nav className="space-y-1">
      {documentationSections.map((section) => (
        <Link
          key={section.path}
          to={`/docs/${section.path}`}
          className={`flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
            currentPath === section.path ||
            ((currentPath === "docs" || currentPath === "") &&
              section.path === "quick-start")
              ? "bg-blue-50 text-blue-600 font-medium"
              : "text-gray-600 hover:bg-gray-100"
          }`}
          onClick={() => setIsNavOpen(false)}
        >
          <span>{section.title}</span>
          <ChevronRight className={`h-4 w-4 ${
            currentPath === section.path ||
            ((currentPath === "docs" || currentPath === "") &&
              section.path === "quick-start")
              ? "text-blue-600"
              : "text-gray-400"
          }`} />
        </Link>
      ))}
    </nav>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="hidden sm:inline">返回首页</span>
              <span className="sm:hidden">返回</span>
            </Link>
            <div className="md:hidden flex items-center gap-3">
              <span className="font-medium text-gray-600">{currentSection}</span>
              <button
                onClick={() => setIsNavOpen(true)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Menu className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        {/* Documentation Header */}
        <div className="px-4 py-6 sm:py-8 border-b bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3">
              <FileText className="h-6 sm:h-8 w-6 sm:w-8 text-blue-600" />
              <h1 className="text-2xl sm:text-3xl font-bold">技术文档</h1>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Desktop Sidebar Navigation */}
            <div className="hidden md:block w-64 flex-shrink-0">
              <div className="sticky top-24">
                <NavigationContent />
              </div>
            </div>

            {/* Mobile Navigation Drawer */}
            {isNavOpen && (
              <div className="fixed inset-0 z-50 md:hidden">
                <div className="absolute inset-0 bg-gray-800/50" onClick={() => setIsNavOpen(false)} />
                <div className="absolute inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl">
                  <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-lg font-semibold">文档目录</h2>
                    <button
                      onClick={() => setIsNavOpen(false)}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <X className="h-5 w-5 text-gray-600" />
                    </button>
                  </div>
                  <div className="p-4 overflow-y-auto max-h-[calc(100vh-5rem)]">
                    <NavigationContent />
                  </div>
                </div>
              </div>
            )}

            {/* Content Area */}
            <div className="flex-1 min-w-0 overflow-hidden">
              <div className="bg-white rounded-xl shadow-lg p-4 md:p-8">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
