import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Menu, X, Facebook } from 'lucide-react';

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-orange-200 selection:text-orange-900 flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Area */}
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo.svg" alt="Agustin Network Logo" className="w-12 h-12 object-contain drop-shadow-sm" />
              <div>
                <h1 className="text-xl font-bold text-blue-900 leading-tight tracking-tight">
                  AGUSTIN NETWORK
                </h1>
                <p className="text-xs font-semibold text-orange-600 tracking-wider uppercase">
                  And Data Solution
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-sm font-semibold text-slate-600 hover:text-orange-600 transition-colors">
                Home
              </Link>
              <Link to="/home-plan" className="text-sm font-semibold text-slate-600 hover:text-orange-600 transition-colors">
                Home Plan
              </Link>
              <Link to="/device-plan" className="text-sm font-semibold text-slate-600 hover:text-orange-600 transition-colors">
                Device Plan
              </Link>
              <Link to="/terms" className="text-sm font-semibold text-slate-600 hover:text-orange-600 transition-colors">
                Service Agreement
              </Link>
            </nav>

            {/* Desktop Contact Info */}
            <div className="hidden lg:flex items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-orange-500" />
                <span>Umiray, Dingalan, Aurora</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-500" />
                <span>+639692101682</span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-slate-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm md:hidden" onClick={() => setIsMobileMenuOpen(false)}>
          <div 
            className="absolute right-0 top-20 bottom-0 w-3/4 max-w-sm bg-white shadow-2xl overflow-y-auto border-l border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Menu</h3>
              <nav className="space-y-1">
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all duration-200"
                >
                  Home
                </Link>
                <Link
                  to="/home-plan"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all duration-200"
                >
                  Home Plan
                </Link>
                <Link
                  to="/device-plan"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all duration-200"
                >
                  Device Plan
                </Link>
                <Link
                  to="/terms"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all duration-200"
                >
                  Service Agreement
                </Link>
              </nav>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1">
        <Outlet />
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/logo.svg" alt="Agustin Network Logo" className="w-10 h-10 object-contain drop-shadow-sm" />
                <div>
                  <h2 className="text-lg font-bold text-white tracking-tight">AGUSTIN NETWORK</h2>
                  <p className="text-xs font-semibold text-orange-500 tracking-wider uppercase">And Data Solution</p>
                </div>
              </div>
              <p className="text-sm max-w-sm">
                Built on trust and bringing seamless connectivity to the people who need it most, we don’t just provide internet—we deliver speed, stability, and a connection you can rely on,
              </p>
            </div>
            
            <div className="space-y-3 md:text-right">
              <div className="flex items-center md:justify-end gap-3 text-sm">
                <MapPin className="w-4 h-4 text-slate-500" />
                <span>Sitio Malamig, Umiray, Dingalan, Aurora</span>
              </div>
              <div className="flex items-center md:justify-end gap-3 text-sm">
                <Phone className="w-4 h-4 text-slate-500" />
                <span>+639692101682</span>
              </div>
              <div className="flex items-center md:justify-end gap-3 text-sm">
                <Mail className="w-4 h-4 text-slate-500" />
                <a href="mailto:agustinnetworkanddatasolution@gmail.com" className="hover:text-white transition-colors">
                  agustinnetworkanddatasolution@gmail.com
                </a>
              </div>
              <div className="flex items-center md:justify-end gap-3 text-sm">
                <Facebook className="w-4 h-4 text-slate-500" />
                <a href="https://www.facebook.com/AgustinICTOfficial" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  AgustinICTOfficial
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-800 text-sm text-center flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} Agustin Network. All rights reserved.</p>
            <Link to="/terms" className="hover:text-white transition-colors">Customer Service Agreement</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
