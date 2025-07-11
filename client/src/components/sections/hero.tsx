import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function Hero() {
  return (
    <section 
      className="relative py-16 md:py-24 overflow-hidden bg-cover bg-center bg-no-repeat min-h-[600px]"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.9), rgba(255,255,255,0.7)), url('https://images.unsplash.com/photo-1566577739112-5180d4bf9390?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-neutral-800">
              This is where<br />
              <span className="text-blue-600">recruiting happens</span>
            </h1>
            <p className="text-lg text-neutral-600 mb-8 max-w-xl leading-relaxed">
              NCAR fuels millions of recruiting connections every year, helping student-athletes get recruited and play the sport they love in college. Ready to find your fit?
            </p>
            <div className="mb-8 flex flex-col sm:flex-row gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium text-base transition-all duration-200 shadow-lg hover:shadow-xl border-0">
                Parents Start Here
              </Button>
              <Button className="bg-white hover:bg-gray-50 text-blue-600 px-8 py-3 rounded-md font-medium text-base transition-all duration-200 shadow-lg hover:shadow-xl border border-blue-200">
                Athletes Start Here
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-white/20">
              {/* Video thumbnail with play button */}
              <div className="relative aspect-video bg-gradient-to-br from-neutral-100 to-neutral-200">
                <img 
                  src="https://www.shutterstock.com/shutterstock/videos/3507599575/thumb/11.jpg?ip=x480"
                  alt="Baseball player at bat"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <button className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-brand-primary ml-1" />
                  </button>
                </div>
                
                {/* User badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-2 shadow-md">
                  <div className="w-6 h-6 rounded-full overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
                      alt="Cory Adams"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-xs">
                    <div className="font-semibold text-neutral-800">Cory Adams</div>
                    <div className="text-neutral-600">2027 • 2B, SS</div>
                  </div>
                </div>
                
                {/* Progress bar */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="w-full bg-white/30 rounded-full h-1">
                    <div className="bg-brand-primary h-1 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Live User Activity Ticker - Full Width */}
      <div className="mt-16 bg-white/10 backdrop-blur-md border-t border-b border-white/20 py-4 text-blue-600 overflow-hidden shadow-2xl">
        <div className="flex animate-scroll">
          <div className="flex items-center gap-16 px-8 whitespace-nowrap">
            <div className="flex items-center gap-3">
              <div className="bg-green-500 px-3 py-1 rounded-full text-sm font-bold text-white">LIVE</div>
              <span className="text-blue-600 text-sm">32 new profiles created today</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 px-3 py-1 rounded-full text-sm font-bold text-white">15</div>
              <span className="text-blue-600 text-sm">coaches actively browsing right now</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-orange-500 px-3 py-1 rounded-full text-sm font-bold text-white">7</div>
              <span className="text-blue-600 text-sm">athletes just updated their highlight videos</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-purple-600 px-3 py-1 rounded-full text-sm font-bold text-white">3</div>
              <span className="text-blue-600 text-sm">commitments announced this week</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-cyan-500 px-3 py-1 rounded-full text-sm font-bold text-white">24</div>
              <span className="text-blue-600 text-sm">new coach connections made today</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-red-500 px-3 py-1 rounded-full text-sm font-bold text-white">HOT</div>
              <span className="text-blue-600 text-sm">Basketball recruiting activity spiking</span>
            </div>
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex items-center gap-16 px-8 whitespace-nowrap">
            <div className="flex items-center gap-3">
              <div className="bg-green-500 px-3 py-1 rounded-full text-sm font-bold text-white">LIVE</div>
              <span className="text-blue-600 text-sm">32 new profiles created today</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 px-3 py-1 rounded-full text-sm font-bold text-white">15</div>
              <span className="text-blue-600 text-sm">coaches actively browsing right now</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-orange-500 px-3 py-1 rounded-full text-sm font-bold text-white">7</div>
              <span className="text-blue-600 text-sm">athletes just updated their highlight videos</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-purple-600 px-3 py-1 rounded-full text-sm font-bold text-white">3</div>
              <span className="text-blue-600 text-sm">commitments announced this week</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-cyan-500 px-3 py-1 rounded-full text-sm font-bold text-white">24</div>
              <span className="text-blue-600 text-sm">new coach connections made today</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-red-500 px-3 py-1 rounded-full text-sm font-bold text-white">HOT</div>
              <span className="text-blue-600 text-sm">Basketball recruiting activity spiking</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
