import { Wifi, Smartphone, Zap, Clock, CheckCircle2, ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DevicePlan() {
  const plans = [
    { name: 'Plan P5', duration: '1 Hour', speed: 'Up to 25mbps', price: '₱5' },
    { name: 'Plan P10', duration: '3 Hours', speed: 'Up to 25mbps', price: '₱10' },
    { name: 'Plan P15', duration: '6 Hours', speed: 'Up to 25mbps', price: '₱15' },
    { name: 'Plan P20', duration: '12 Hours', speed: 'Up to 25mbps', price: '₱20' },
    { name: 'Plan P30', duration: '1 Day', speed: 'Up to 25mbps', price: '₱30' },
    { name: 'Plan P149', duration: '7 Days', speed: 'Up to 35mbps', price: '₱149' },
    { name: 'Plan P249', duration: '15 Days', speed: 'Up to 35mbps', price: '₱249' },
    { name: 'Plan P300', duration: '1 Month (TV)', speed: 'Up to 15mbps', price: '₱300' },
    { name: 'Plan P399', duration: '30 Days', speed: 'Up to 10mbps', price: '₱399' },
    { name: 'Plan P449', duration: '30 Days', speed: 'Up to 50mbps', price: '₱449' },
    { name: 'Plan P499', duration: '30 Days', speed: 'Up to 150mbps', price: '₱499' },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-950 to-slate-900 overflow-hidden py-20 lg:py-32 text-white">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border-[40px] border-orange-500/30"></div>
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-500/20 blur-3xl rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 text-orange-400 font-semibold text-sm mb-6 border border-orange-500/30">
              <Wifi className="w-4 h-4" /> New Service Offering
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              Internet That <span className="text-orange-500">Moves</span> With You
            </h1>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed font-light">
              Stay connected anywhere from Umiray to Matawe with our Device and Voucher Plans.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#pricing" className="inline-flex items-center justify-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-500 transition-colors shadow-lg shadow-orange-600/20">
                Buy Voucher <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#how-it-works" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-colors">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 tracking-tight mb-4">
              How It Works
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Getting online is as easy as 1-2-3. No installations, no waiting.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-slate-100 z-0"></div>

            <div className="relative z-10 bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 text-center">
              <div className="w-20 h-20 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-sm">
                <Wifi className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Step 1</h3>
              <p className="text-slate-600 font-medium">Connect to any Agustin Hotspot in our coverage area.</p>
            </div>

            <div className="relative z-10 bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 text-center">
              <div className="w-20 h-20 mx-auto bg-orange-50 rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-sm">
                <Smartphone className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Step 2</h3>
              <p className="text-slate-600 font-medium">Enter your voucher code or use your registered device.</p>
            </div>

            <div className="relative z-10 bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 text-center">
              <div className="w-20 h-20 mx-auto bg-emerald-50 rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-sm">
                <Zap className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Step 3</h3>
              <p className="text-slate-600 font-medium">Enjoy fast, seamless internet across all coverage areas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="py-20 bg-blue-50 border-y border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-6">
                <MapPin className="w-4 h-4" /> Extensive Coverage
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 tracking-tight mb-6">
                Umiray to Matawe
              </h2>
              <p className="text-xl text-slate-600 mb-6 font-light">
                Enjoy up to <strong className="font-bold text-slate-800">15KM of coverage</strong>. Our Device Plan is built on a "One network, multiple access points" philosophy.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                Whether you're moving between barangays, commuting, or just hanging out at different spots, your connection stays with you.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="w-6 h-6 text-orange-500" />
                  Seamless roaming between access points
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="w-6 h-6 text-orange-500" />
                  No need to log in repeatedly
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="bg-white p-2 rounded-3xl shadow-2xl border border-slate-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/5 z-10 pointer-events-none rounded-3xl"></div>
                {/* Embedded Map Representation */}
                <div className="aspect-video bg-slate-100 rounded-2xl relative overflow-hidden flex items-center justify-center">
                  <iframe 
                    className="absolute inset-0 w-full h-full opacity-70" 
                    frameBorder="0" 
                    scrolling="no" 
                    marginHeight={0} 
                    marginWidth={0} 
                    src="https://maps.google.com/maps?q=Umiray,+Dingalan,+Aurora&t=&z=12&ie=UTF8&iwloc=&output=embed"
                    title="Coverage Map"
                  ></iframe>
                  <div className="absolute inset-0 bg-blue-900/10 z-10"></div>
                  
                  <div className="relative z-20 w-full px-4 sm:px-8 flex justify-between items-center">
                    <div className="text-center max-w-[120px]">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg shadow-blue-600/40 animate-pulse">
                        <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <span className="font-bold text-slate-800 bg-white/90 px-2 sm:px-3 py-1 rounded-xl backdrop-blur-sm shadow-sm text-[10px] sm:text-xs block leading-tight">
                        Umiray
                      </span>
                    </div>
                    <div className="flex-1 h-1 bg-gradient-to-r from-blue-600 via-orange-500 to-blue-600 mx-2 sm:mx-4 rounded-full relative">
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap shadow-md">
                        15KM Coverage Area
                      </div>
                    </div>
                    <div className="text-center max-w-[120px]">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg shadow-blue-600/40 animate-pulse" style={{ animationDelay: '1s' }}>
                        <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <span className="font-bold text-slate-800 bg-white/90 px-2 sm:px-3 py-1 rounded-xl backdrop-blur-sm shadow-sm text-[10px] sm:text-xs block leading-tight">
                        Amutan Bridge (Matawe)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison & Why Choose */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 tracking-tight mb-4">
              Which Plan is Right for You?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We offer different solutions depending on how and where you use the internet.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
            {/* Home Plan Card */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Home Fiber Plan</h3>
              <p className="text-slate-500 mb-6">Fixed connection, best for households.</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <span>Fixed to your home router</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <span>Monthly billing cycle</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <span>Ideal for smart TVs, desktop PCs, and family sharing</span>
                </li>
              </ul>
              <div className="mt-8 pt-6 border-t border-slate-200">
                <Link to="/#plans" className="text-blue-600 font-bold hover:text-blue-800 flex items-center gap-2">
                  View Home Plans <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Device Plan Card */}
            <div className="bg-blue-900 p-8 rounded-3xl border border-blue-800 text-white shadow-xl shadow-blue-900/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-wider">
                Mobile & Flexible
              </div>
              <h3 className="text-2xl font-bold mb-2">Device / Voucher Plan</h3>
              <p className="text-blue-200 mb-6">Mobile connection, best for on-the-go users.</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-blue-50">
                  <CheckCircle2 className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                  <span>Works across multiple hotspot locations</span>
                </li>
                <li className="flex items-start gap-3 text-blue-50">
                  <CheckCircle2 className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                  <span>No monthly bills — pay only when needed</span>
                </li>
                <li className="flex items-start gap-3 text-blue-50">
                  <CheckCircle2 className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                  <span>Ideal for students, commuters, and mobile users</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 tracking-tight mb-4">
              Voucher Pricing
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
              Affordable, flexible options for every need. Load once, connect everywhere.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {plans.map((plan, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md hover:border-blue-300 transition-all group flex flex-col h-full">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-slate-900">{plan.name}</h3>
                  <div className="text-2xl font-black text-orange-600 my-1">{plan.price}</div>
                </div>
                <div className="space-y-2 mb-6 flex-1">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span className="font-medium">{plan.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Zap className="w-4 h-4 text-orange-500" />
                    <span>{plan.speed}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a href="https://m.me/1601970210083675" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-blue-900 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-blue-800 active:scale-[0.98] transition-all duration-200 shadow-xl shadow-blue-900/20">
              Buy Voucher Now <ArrowRight className="w-6 h-6" />
            </a>
            <p className="mt-4 text-slate-500 text-sm">Contact us on Facebook to purchase your voucher code instantly.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
