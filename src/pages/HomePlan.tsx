import { Wifi, CheckCircle2, ArrowRight, Home as HomeIcon, Shield, Headset, Zap, Server, Globe, Cpu, TrendingUp } from 'lucide-react';

export default function HomePlan() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 overflow-hidden py-20 lg:py-32 text-white">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border-[40px] border-blue-400/30"></div>
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-orange-500/20 blur-3xl rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 text-blue-200 font-semibold text-sm mb-6 border border-blue-400/30">
              <HomeIcon className="w-4 h-4" /> Unlimited Home Fiber
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              Powering Your Family's <span className="text-orange-500">Digital Life</span>
            </h1>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed font-light">
              Experience ultra-fast, reliable, and truly unlimited internet designed for streaming, gaming, and working from home.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#pricing" className="inline-flex items-center justify-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-500 transition-colors shadow-lg shadow-orange-600/20">
                View Pricing <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 tracking-tight mb-4">
              Why Choose Our Home Plan?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Built for households that demand stability, speed, and zero interruptions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Truly Unlimited Data</h3>
              <p className="text-slate-600">No data caps, no throttling. Stream, download, and browse as much as you want without worrying about limits.</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-orange-600">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Reliable Connection</h3>
              <p className="text-slate-600">Built on robust infrastructure to ensure your connection stays stable even during peak hours or bad weather.</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-emerald-600">
                <Headset className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Local 24/7 Support</h3>
              <p className="text-slate-600">We're right here in your community. Get fast, responsive technical support from people who actually care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 tracking-tight mb-4">
              Monthly Home Internet Plans
            </h2>
            <p className="text-2xl text-slate-600 font-light">
              Starting at <strong className="font-bold text-slate-800">P999</strong> per month, subject to Fair Use Policy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Plan 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-2 bg-blue-400 group-hover:bg-orange-500 transition-colors"></div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">Plan P999</h3>
              <div className="text-2xl font-semibold text-orange-600 mb-6 pb-6 border-b border-slate-100">
                25Mbps <span className="text-lg text-slate-500 font-normal">/ month</span>
              </div>
              <ul className="space-y-4 mb-6">
                <li className="flex items-center gap-3 text-slate-600">
                  <Wifi className="w-6 h-6 text-slate-400" />
                  <span className="text-lg">Up to 5 devices</span>
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <span className="text-lg">Unlimited Data</span>
                </li>
              </ul>
              <div className="mb-8 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Best For</p>
                <p className="text-sm text-slate-700 font-medium">Small families, basic browsing, social media, and casual HD streaming.</p>
              </div>
              <a href="https://m.me/1601970210083675" target="_blank" rel="noopener noreferrer" className="block text-center w-full py-4 rounded-xl bg-blue-50 text-blue-700 font-bold hover:bg-orange-600 hover:text-white active:bg-orange-700 active:scale-[0.98] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                Apply Now
              </a>
            </div>

            {/* Plan 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl shadow-blue-900/10 border-2 border-blue-500 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group transform md:-translate-y-4">
              <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                Most Popular
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">Plan P1199</h3>
              <div className="text-2xl font-semibold text-orange-600 mb-6 pb-6 border-b border-slate-100">
                35Mbps <span className="text-lg text-slate-500 font-normal">/ month</span>
              </div>
              <ul className="space-y-4 mb-6">
                <li className="flex items-center gap-3 text-slate-600">
                  <Wifi className="w-6 h-6 text-slate-400" />
                  <span className="text-lg">Up to 7 devices</span>
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <span className="text-lg">Unlimited Data</span>
                </li>
              </ul>
              <div className="mb-8 p-4 bg-blue-50 rounded-xl border border-blue-100">
                <p className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">Best For</p>
                <p className="text-sm text-blue-900 font-medium">Online classes, standard work from home, multiple HD streams, and casual gaming.</p>
              </div>
              <a href="https://m.me/1601970210083675" target="_blank" rel="noopener noreferrer" className="block text-center w-full py-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-orange-500 hover:shadow-orange-500/50 active:bg-orange-600 active:scale-[0.98] active:shadow-none transition-all duration-300 shadow-lg shadow-blue-600/30 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                Apply Now
              </a>
            </div>

            {/* Plan 3 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-2 bg-blue-400 group-hover:bg-orange-500 transition-colors"></div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">Plan P1499</h3>
              <div className="text-2xl font-semibold text-orange-600 mb-6 pb-6 border-b border-slate-100">
                65 Mbps <span className="text-lg text-slate-500 font-normal">/ month</span>
              </div>
              <ul className="space-y-4 mb-6">
                <li className="flex items-center gap-3 text-slate-600">
                  <Wifi className="w-6 h-6 text-slate-400" />
                  <span className="text-lg">Up to 10 devices</span>
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <span className="text-lg">Unlimited Data</span>
                </li>
              </ul>
              <div className="mb-8 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Best For</p>
                <p className="text-sm text-slate-700 font-medium">Heavy users, 4K streaming, competitive gaming, multiple WFH setups, and small businesses.</p>
              </div>
              <a href="https://m.me/1601970210083675" target="_blank" rel="noopener noreferrer" className="block text-center w-full py-4 rounded-xl bg-blue-50 text-blue-700 font-bold hover:bg-orange-600 hover:text-white active:bg-orange-700 active:scale-[0.98] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                Apply Now
              </a>
            </div>
          </div>

          {/* Disclaimer Banner */}
          <div className="bg-slate-100/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 text-center max-w-4xl mx-auto">
            <p className="text-slate-600 text-lg">
              The Provider reserves the right to manage bandwidth allocation to maintain network stability.
            </p>
          </div>

          {/* The Premium Difference Section */}
          <div className="mt-20 bg-blue-950 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h3 className="text-3xl md:text-4xl font-extrabold mb-4">The Agustin Network Difference: Built for Reliability</h3>
                <p className="text-blue-200 text-lg">
                  When choosing an internet plan, stability is just as important as speed. A <strong className="text-white">dedicated 35 Mbps / P1,199 connection often provides a smoother, more reliable experience than a shared 100 Mbps / P1,199 line offered by other competitors.</strong> Here’s what makes our service a great investment for your home—because bigger numbers don’t always mean faster or better performance.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center shrink-0">
                    <Server className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Dedicated Enterprise Backbone</h4>
                    <p className="text-blue-200 text-sm leading-relaxed">While others may use shared residential lines where speeds can drop during busy hours, we provide a dedicated enterprise backbone. This means your bandwidth is reserved just for you, 24/7.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center shrink-0">
                    <Globe className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Singapore-Optimized Routing</h4>
                    <p className="text-blue-200 text-sm leading-relaxed">We use Singapore-based Enterprise ISP infrastructure to deliver a premium-quality, reliable internet experience. This ensures ultra-low latency (ping) for smooth gaming (MLBB, Valorant) and crystal-clear, lag-free video calls—giving you a faster, more stable connection you can rely on anytime.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center shrink-0">
                    <Cpu className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Carrier-Grade Equipment</h4>
                    <p className="text-blue-200 text-sm leading-relaxed">We invest in premium, enterprise-grade hardware built to handle heavy, continuous usage. This provides a highly stable connection without the need for frequent router restarts.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center shrink-0">
                    <TrendingUp className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Consistent Peak-Hour Speeds</h4>
                    <p className="text-blue-200 text-sm leading-relaxed">Internet traffic often peaks in the evening, causing slowdowns on standard networks. Because our infrastructure is carefully managed, your speeds remain consistent and reliable, even during the busiest hours of the day.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
