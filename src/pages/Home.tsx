import { useState } from 'react';
import { Wifi, CheckCircle2, ArrowRight, Activity, X, Wrench, Zap, Users, ShieldCheck, PhoneCall, MapPin, MessageSquare, Smartphone, Clock, Server, Globe, Cpu, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [showSpeedtest, setShowSpeedtest] = useState(false);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden py-20 lg:py-32">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-40 pointer-events-none">
          {/* Decorative background elements */}
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border-[40px] border-blue-100/50"></div>
          <div className="absolute top-1/2 -left-24 w-64 h-64 rounded-full border-[20px] border-orange-100/50"></div>
          <svg className="absolute top-10 right-1/4 w-32 h-32 text-blue-200/50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
            <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 tracking-tight mb-6">
              Fast & Reliable <span className="text-orange-600">Internet</span> For Your Home
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Experience seamless connectivity with Agustin Network. Whether you're streaming, gaming, or working from home, we have the perfect plan for you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#plans" className="inline-flex items-center justify-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-700 transition-colors shadow-lg shadow-orange-600/20">
                View Our Plans <ArrowRight className="w-5 h-5" />
              </a>
              <Link to="/terms" className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 border-2 border-blue-100 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 hover:border-blue-200 transition-colors shadow-sm">
                Service Agreement
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 tracking-tight mb-4">
              Business / Home Internet Plans
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
                Inquire Now
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
                Inquire Now
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
                Inquire Now
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

      {/* Device Plan Highlight Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border-[40px] border-orange-500/30"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 text-orange-400 font-semibold text-sm mb-6 border border-orange-500/30">
                <Smartphone className="w-4 h-4" /> New Mobile Service
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
                Internet That <span className="text-orange-500">Moves</span> With You
              </h2>
              <p className="text-xl text-blue-100 mb-8 font-light leading-relaxed">
                Not at home? No problem. Our new Device and Voucher Plans keep you connected across multiple hotspots from Umiray to Matawe. 
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-blue-50">
                  <CheckCircle2 className="w-6 h-6 text-orange-400 shrink-0" />
                  <span>Up to 15KM of coverage area</span>
                </li>
                <li className="flex items-center gap-3 text-blue-50">
                  <CheckCircle2 className="w-6 h-6 text-orange-400 shrink-0" />
                  <span>No monthly bills — pay only when needed</span>
                </li>
                <li className="flex items-center gap-3 text-blue-50">
                  <CheckCircle2 className="w-6 h-6 text-orange-400 shrink-0" />
                  <span>Plans starting at just ₱5</span>
                </li>
              </ul>
              <Link to="/device-plan" className="inline-flex items-center justify-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-500 transition-colors shadow-lg shadow-orange-600/20">
                Explore Device Plans <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
                    <div className="text-3xl font-black text-white mb-1">15<span className="text-orange-500 text-xl">KM</span></div>
                    <div className="text-sm text-blue-200">Network Coverage</div>
                  </div>
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
                    <div className="text-3xl font-black text-white mb-1">11+</div>
                    <div className="text-sm text-blue-200">Voucher Options</div>
                  </div>
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center col-span-2 flex items-center justify-center gap-4">
                    <MapPin className="w-6 h-6 text-orange-400" />
                    <span className="text-lg font-bold text-white">Umiray to Matawe</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Home Plan vs Device Plan Comparison */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 tracking-tight mb-6">
              Why Choose Device Plans
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
              See how our mobile Device Plan stacks up against traditional home internet.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Home Plan Card (Muted) */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm opacity-90">
              <h3 className="text-2xl font-bold text-slate-500 mb-2">Traditional Home Plan</h3>
              <p className="text-slate-400 mb-8 pb-6 border-b border-slate-100">Good for stationary household use.</p>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-slate-500">
                  <MapPin className="w-6 h-6 text-slate-300 shrink-0" />
                  <span><strong>Fixed Location:</strong> Only works inside your house.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-500">
                  <Users className="w-6 h-6 text-slate-300 shrink-0" />
                  <span><strong>Shared Speed:</strong> Bandwidth is divided among everyone at home.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-500">
                  <Clock className="w-6 h-6 text-slate-300 shrink-0" />
                  <span><strong>Monthly Bills:</strong> Fixed monthly payment regardless of usage.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-500">
                  <Wrench className="w-6 h-6 text-slate-300 shrink-0" />
                  <span><strong>Setup Time:</strong> Requires scheduling and physical installation.</span>
                </li>
              </ul>
            </div>

            {/* Device Plan Card (Highlighted) */}
            <div className="bg-blue-900 p-8 rounded-3xl border-2 border-orange-500 shadow-2xl shadow-blue-900/20 text-white relative transform md:-translate-y-4">
              <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-wider">
                Highly Recommended
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Device / Voucher Plan</h3>
              <p className="text-blue-200 mb-8 pb-6 border-b border-blue-800">The ultimate freedom and premium performance.</p>
              <ul className="space-y-5 mb-8">
                <li className="flex items-start gap-3 text-blue-50">
                  <MapPin className="w-6 h-6 text-orange-400 shrink-0" />
                  <span><strong>Connect Anywhere:</strong> Access internet across hundreds of hotspot locations from Umiray to Matawe.</span>
                </li>
                <li className="flex items-start gap-3 text-blue-50">
                  <Zap className="w-6 h-6 text-orange-400 shrink-0" />
                  <span><strong>Dedicated Premium Bandwidth:</strong> Your speed is 100% yours. No sharing, no slowdowns.</span>
                </li>
                <li className="flex items-start gap-3 text-blue-50">
                  <ShieldCheck className="w-6 h-6 text-orange-400 shrink-0" />
                  <span><strong>Total Flexibility:</strong> No monthly bills. Pay only for what you need, when you need it.</span>
                </li>
                <li className="flex items-start gap-3 text-blue-50">
                  <Activity className="w-6 h-6 text-orange-400 shrink-0" />
                  <span><strong>Instant Access:</strong> Zero installation. Just buy a voucher and connect instantly.</span>
                </li>
              </ul>
              <Link to="/device-plan" className="block text-center w-full py-4 rounded-xl bg-orange-500 text-white font-bold hover:bg-orange-600 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-orange-500/30">
                Get Your Device Plan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Advantage Section */}
      <section className="py-24 bg-blue-950 text-white relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border-[40px] border-blue-800/50"></div>
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-orange-500/20 blur-3xl rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
              The Agustin Network Advantage
            </h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto font-light">
              Proudly powering homes across Dingalan with unmatched reliability and dedicated service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-900/50 backdrop-blur-sm p-8 rounded-3xl border border-blue-800 hover:bg-blue-800/50 hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center mb-6 text-orange-400">
                <Wrench className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Zero Setup Costs</h3>
              <p className="text-blue-200 text-sm leading-relaxed">Keep your wallet happy. We handle the complete installation process absolutely free of charge.</p>
            </div>

            <div className="bg-blue-900/50 backdrop-blur-sm p-8 rounded-3xl border border-blue-800 hover:bg-blue-800/50 hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 text-blue-400">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Hassle-Free Activation</h3>
              <p className="text-blue-200 text-sm leading-relaxed">Skip the long waits. Our streamlined onboarding gets you online quickly and effortlessly.</p>
            </div>

            <div className="bg-blue-900/50 backdrop-blur-sm p-8 rounded-3xl border border-blue-800 hover:bg-blue-800/50 hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-6 text-emerald-400">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Community-First Support</h3>
              <p className="text-blue-200 text-sm leading-relaxed">We're your neighbors. Enjoy rapid, localized technical assistance from people who actually care.</p>
            </div>

            <div className="bg-blue-900/50 backdrop-blur-sm p-8 rounded-3xl border border-blue-800 hover:bg-blue-800/50 hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 text-purple-400">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">100% Transparent Pricing</h3>
              <p className="text-blue-200 text-sm leading-relaxed">What you see is what you pay. No surprise charges, no hidden fees, just straightforward billing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 tracking-tight mb-6">
              Let's Get You Connected
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
              Reach out today. Our dedicated local team is standing by to assist you with inquiries and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600 transform rotate-3">
                <PhoneCall className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Direct Hotline</h3>
              <p className="text-2xl font-black text-orange-600 mb-3 tracking-tight">0969 210 1682</p>
              <p className="text-slate-500 text-sm">Call or text us anytime for immediate technical assistance and sales inquiries.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-orange-600 transform -rotate-3">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Visit Our Office</h3>
              <p className="text-lg font-bold text-slate-700 mb-1">Sitio Malamig, Umiray</p>
              <p className="text-slate-600 font-medium mb-3">Dingalan, Aurora</p>
              <p className="text-slate-500 text-sm">Drop by for in-person support, payments, or just to say hello.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600 transform rotate-3">
                <MessageSquare className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Connect Online</h3>
              <a href="https://m.me/1601970210083675" target="_blank" rel="noopener noreferrer" className="inline-block text-lg font-bold text-blue-600 hover:text-orange-600 transition-colors mb-3">
                Message on Facebook
              </a>
              <p className="text-slate-500 text-sm">Join our growing online community for the latest news and updates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Speedtest Section */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 tracking-tight mb-6">
            Check Your Connection Speed
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Want to see how fast your current internet is? Run a quick speed test right here on our website.
          </p>
          
          {!showSpeedtest ? (
            <button 
              onClick={() => setShowSpeedtest(true)}
              className="inline-flex items-center justify-center gap-2 bg-blue-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-800 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-blue-900/20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <Activity className="w-5 h-5" />
              Run Speed Test
            </button>
          ) : (
            <div className="mt-8 bg-slate-50 p-4 md:p-8 rounded-3xl border border-slate-200 shadow-inner animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex justify-end mb-4">
                <button 
                  onClick={() => setShowSpeedtest(false)}
                  className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 font-bold transition-colors bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200"
                >
                  <X className="w-4 h-4" /> Close Speed Test
                </button>
              </div>
              <div className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-white border border-slate-100">
                <iframe 
                  width="100%" 
                  height="650px" 
                  frameBorder="0" 
                  src="https://openspeedtest.com/Get-widget.php"
                  allow="fullscreen"
                  className="w-full"
                ></iframe>
              </div>
              <p className="text-xs text-slate-400 mt-6">
                Speed test widget provided by OpenSpeedtest. (Note: Official Ookla Speedtest requires a registered custom embed code, so we've integrated this reliable HTML5 alternative for seamless on-site testing).
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
