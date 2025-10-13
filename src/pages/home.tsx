'use client'

import { Hono } from 'hono'

export const Home = new Hono()

Home.get('/', (c) => {
  const title = 'UNOFFICIAL Pandora API'
  const description =
    'Unofficial metadata-only REST API for educational purposes. Access Pandora music metadata programmatically.'

  return c.html(
    <html>
      <head>
        <title>UNOFFICIAL Pandora API</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pandora-music-api.vercel.app" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://pandora-music-api.vercel.app" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script src="https://cdn.tailwindcss.com" />
        <style
          dangerouslySetInnerHTML={{
            __html: `
            * { 
              font-family: 'Inter', sans-serif; 
              box-sizing: border-box;
            } 
            
            body {
              background: linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #0f172a 100%);
              min-height: 100vh;
            }
            
            .glass-card {
              background: rgba(15, 23, 42, 0.6);
              backdrop-filter: blur(16px);
              -webkit-backdrop-filter: blur(16px);
              border: 1px solid rgba(148, 163, 184, 0.1);
              transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            }
            
            .glass-card:hover {
              background: rgba(15, 23, 42, 0.8);
              border: 1px solid rgba(59, 130, 246, 0.3);
              transform: translateY(-8px);
              box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(59, 130, 246, 0.1);
            }
            
            .stat-card {
              background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%);
              border: 1px solid rgba(59, 130, 246, 0.2);
              transition: all 0.3s ease;
            }
            
            .stat-card:hover {
              background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(147, 51, 234, 0.15) 100%);
              transform: scale(1.02);
              box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.2);
            }
            
            .text-gradient {
              background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            }
            
            .btn-primary {
              background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
              transition: all 0.3s ease;
              box-shadow: 0 4px 15px 0 rgba(59, 130, 246, 0.3);
            }
            
            .btn-primary:hover {
              transform: translateY(-2px);
              box-shadow: 0 8px 25px 0 rgba(59, 130, 246, 0.4);
            }
            
            .icon-blue { background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); }
            .icon-purple { background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%); }
            .icon-cyan { background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%); }
            .icon-emerald { background: linear-gradient(135deg, #10b981 0%, #059669 100%); }
            .icon-amber { background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); }
            .icon-indigo { background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%); }
            
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-10px); }
            }
            
            .float-animation { animation: float 6s ease-in-out infinite; }
            
            @keyframes fadeInUp {
              from { opacity: 0; transform: translateY(30px); }
              to { opacity: 1; transform: translateY(0); }
            }
            
            .animate-fade-in { animation: fadeInUp 0.8s ease-out forwards; }
            .delay-100 { animation-delay: 0.1s; }
            .delay-200 { animation-delay: 0.2s; }
            .delay-300 { animation-delay: 0.3s; }
            .delay-400 { animation-delay: 0.4s; }
            .delay-500 { animation-delay: 0.5s; }
            
            /* Enhanced mobile responsiveness */
            @media (max-width: 640px) {
              .glass-card:hover {
                transform: translateY(-4px);
              }
              
              .btn-primary:hover {
                transform: translateY(-1px);
              }
            }`
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
            :root {
              --bg: #0B0F14;
              --surface: #0F141B;
              --border: #1C2430;
              --fg: #E6E7E9;
              --accent: #D4AF37;
            }

            body { 
              background: var(--bg) !important; 
              color: var(--fg);
            }

            .glass-card {
              background: rgba(16, 20, 27, 0.72);
              backdrop-filter: blur(14px);
              -webkit-backdrop-filter: blur(14px);
              border: 1px solid var(--border);
              transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease, background .25s ease;
              box-shadow: 0 10px 30px rgba(0,0,0,0.35);
            }
            .glass-card:hover {
              background: rgba(16, 20, 27, 0.86);
              border-color: rgba(212,175,55,0.35);
              transform: translateY(-6px);
              box-shadow: 0 18px 45px rgba(0,0,0,0.5);
            }

            .stat-card {
              background: rgba(16, 20, 27, 0.64);
              border: 1px solid var(--border);
              transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
            }
            .stat-card:hover {
              transform: translateY(-2px);
              border-color: rgba(212,175,55,0.35);
              box-shadow: 0 12px 28px rgba(0,0,0,0.35);
            }

            .text-lux { color: var(--accent); }

            .btn-primary {
              background: var(--accent) !important;
              color: var(--bg) !important;
              border: 1px solid var(--accent);
              box-shadow: 0 8px 24px rgba(212,175,55,0.25);
              transition: transform .2s ease, box-shadow .2s ease;
            }
            .btn-primary:hover {
              transform: translateY(-2px);
              box-shadow: 0 12px 36px rgba(212,175,55,0.35);
            }

            .badge {
              background: rgba(212,175,55,0.08);
              border: 1px solid rgba(212,175,55,0.28);
              color: var(--accent);
            }

            .icon-accent {
              background: var(--accent);
              color: var(--bg);
            }

            footer { border-top-color: var(--border) !important; }
            `
          }}
        />
      </head>
      <body className="" style={{ color: 'var(--fg)' }}>
        <div className="min-h-screen">
          {/* Hero Section */}
          <div className="relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 text-center">
              {/* Logo */}
              <div className="flex justify-center mb-6 sm:mb-8 animate-fade-in">
                <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-purple-500 to-cyan-500 shadow-2xl float-animation">
                  <svg className="h-12 w-12 sm:h-16 sm:w-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                  </svg>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 animate-fade-in delay-100 text-balance">
                <div className="flex flex-col items-center gap-3 sm:gap-4">
                  <span className="badge px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base lg:text-lg font-medium uppercase tracking-wider">
                    UNOFFICIAL
                  </span>
                  <div>
                    <span className="text-lux">Pandora</span> API
                  </div>
                </div>
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-3 sm:mb-4 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-200 px-2">
                Unofficial metadata-only REST API for educational purposes
              </p>
              <p className="text-base sm:text-lg text-gray-400 mb-4 sm:mb-6 max-w-3xl mx-auto animate-fade-in delay-300 px-2">
                Access Pandora music metadata programmatically - track info, artist details, and album data
              </p>

              {/* Educational Disclaimer */}
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-3 sm:p-4 mb-6 sm:mb-8 max-w-4xl mx-auto animate-fade-in delay-300 mx-4">
                <p className="text-amber-200 text-xs sm:text-sm leading-relaxed">
                  ⚠️ <strong>Educational Use Only:</strong> This UNOFFICIAL API provides metadata only - no media
                  streaming or download links. Built for developer education and learning purposes with proper usage
                  guidelines.
                </p>
              </div>

              <div className="flex justify-center animate-fade-in delay-300">
                <a
                  href="/docs"
                  className="btn-primary px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg text-white no-underline inline-block"
                >
                  View API Docs
                </a>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 lg:mb-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
              <div className="stat-card rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-lux mb-1 sm:mb-2">25M+</div>
                <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">Tracks Available</div>
              </div>
              <div className="stat-card rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-lux mb-1 sm:mb-2">98.5%</div>
                <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">Uptime</div>
              </div>
              <div className="stat-card rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-lux mb-1 sm:mb-2">&lt; 200ms</div>
                <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">Avg Response</div>
              </div>
              <div className="stat-card rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-lux mb-1 sm:mb-2">Free</div>
                <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">To Use</div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 text-lux px-2">
              Metadata API for music developers
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {/* REST Endpoints */}
              <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 animate-fade-in group">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="p-2.5 sm:p-3 rounded-xl icon-accent flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">REST Endpoints</h3>
                </div>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  Access track metadata, artist information, album details, and search functionality - no media files or
                  streaming links.
                </p>
              </div>

              {/* Authentication */}
              <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 animate-fade-in delay-100 group">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="p-2.5 sm:p-3 rounded-xl icon-accent flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">API Authentication</h3>
                </div>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  Secure API access with API keys and token-based authentication for production applications.
                </p>
              </div>

              {/* JSON Responses */}
              <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 animate-fade-in delay-200 group">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="p-2.5 sm:p-3 rounded-xl icon-accent flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">JSON Responses</h3>
                </div>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  Clean, structured JSON responses with comprehensive metadata for tracks, artists, albums, and
                  playlists - information only.
                </p>
              </div>

              {/* Rate Limiting */}
              <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 animate-fade-in delay-300 group">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="p-2.5 sm:p-3 rounded-xl icon-accent flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">Rate Limiting</h3>
                </div>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  Fair usage policies with generous rate limits and clear headers for monitoring your API consumption.
                </p>
              </div>

              {/* API Testing */}
              <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 animate-fade-in delay-400 group">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="p-2.5 sm:p-3 rounded-xl icon-accent flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">API Playground</h3>
                </div>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  Interactive API explorer to test endpoints, view responses, and experiment with different parameters.
                </p>
              </div>

              {/* Developer Support */}
              <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 animate-fade-in delay-500 group">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="p-2.5 sm:p-3 rounded-xl icon-accent flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">Developer Resources</h3>
                </div>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  Basic documentation and code examples available. This is an educational project - use at your own
                  discretion.
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="border-t border-gray-800/50 py-8 sm:py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-6 sm:space-x-8">
                  <a href="/docs" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                    Documentation
                  </a>
                  <a href="/status" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                    API Status
                  </a>
                </div>
                <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-right">
                  © 2025 UNOFFICIAL Pandora API. Unofficial metadata API for educational and developer support
                  purposes.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
})
