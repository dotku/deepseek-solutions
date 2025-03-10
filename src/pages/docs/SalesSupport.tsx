export default function SalesSupport() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-gray-900">销售支持</h2>

        <div className="prose prose-blue max-w-none">
          <div className="mt-8 space-y-6">
            {/* Business Introduction */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">信迅智科技术服务</h3>
              <p className="text-lg opacity-90 mb-6">
                专注于工业级人工智能解决方案，为企业提供安全、稳定、高性能的 AI
                应用部署方案。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">专业服务</h4>
                  <ul className="space-y-1 opacity-90">
                    <li>• 定制化解决方案</li>
                    <li>• 技术支持与咨询</li>
                    <li>• 系统集成服务</li>
                  </ul>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">产品优势</h4>
                  <ul className="space-y-1 opacity-90">
                    <li>• 高性能硬件支持</li>
                    <li>• 企业级安全保障</li>
                    <li>• 全方位技术支持</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* QR Code Section */}
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">
                    在线咨询
                  </h3>
                  <div className="w-48 h-48 bg-white p-3 rounded-lg shadow-md mb-4">
                    <img
                      src="/images/contact-qr.png"
                      alt="联系我们的微信二维码"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-gray-600 text-sm">
                    扫一扫上面的二维码，获取专业咨询服务。
                  </p>
                </div>
              </div>

              {/* Contact Details */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  联系方式
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="font-medium text-blue-700 w-16">
                      邮箱：
                    </span>
                    <span>
                      <a
                        href="mailto:sales@sienovo.cn"
                        className="text-blue-600 hover:text-blue-700"
                      >
                        sales@sienovo.cn
                      </a>
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-medium text-blue-700 w-16">
                      电话：
                    </span>
                    <span>
                      <a
                        href="tel:+86-755-86950699"
                        className="text-blue-600 hover:text-blue-700"
                      >
                        +86-755-86950699
                      </a>
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-medium text-blue-700 w-16">
                      地址：
                    </span>
                    <span className="text-gray-600">
                      深圳市宝安区 <br />
                      72区新安街道宝石路29号 <br />
                      蓝坤集团A栋4层
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
