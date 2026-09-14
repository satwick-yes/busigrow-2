import re

files = {
    'online': r'c:\Users\satwi\Music\New folder\busigrow 6.0\brillance-saa-s-landing-page\app\online\page.tsx',
    'offline': r'c:\Users\satwi\Music\New folder\busigrow 6.0\brillance-saa-s-landing-page\app\offline\page.tsx'
}

for page, filepath in files.items():
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if page == 'online':
        new_card = """<div
                  key={card.id}
                  className="bg-white border border-gray-100 rounded-xl p-3 md:p-6 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-purple-300 transition-all duration-300 group"
                >
                  <div>
                    <div className="flex items-start gap-3 md:gap-4 mb-0 md:mb-6">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300 shrink-0">
                        <Icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.75} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="text-base md:text-xl font-bold text-gray-900 truncate">
                            {card.title}
                          </h3>
                          <span className="text-[9px] md:text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 shrink-0 ml-2">
                            {card.highlight}
                          </span>
                        </div>
                        <div className="text-[11px] md:text-xs text-purple-600 font-medium truncate">
                          {card.tagline}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 font-light leading-relaxed mt-4 mb-6 hidden md:block">
                      {card.shortDesc}
                    </p>
                  </div>

                  <div className="flex flex-row md:flex-col gap-2 pt-4 md:pt-4 border-t border-gray-100 mt-4 md:mt-0">
                    <button
                      onClick={() => setSelectedBreakdownService(card)}
                      className="flex-1 py-2 md:py-2.5 px-2 md:px-4 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-lg text-[11px] md:text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      Breakdown
                    </button>
                    <button
                      onClick={() => selectServiceAndScroll(card.title)}
                      className="flex-1 py-2 md:py-3 px-2 md:px-4 bg-gray-900 hover:bg-purple-600 text-white rounded-lg text-[11px] md:text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      Intake
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>"""
                
        content = re.sub(r'<div\s+key=\{card\.id\}\s+className="bg-white border border-gray-.*?</button>\s*</div>\s*</div>', new_card, content, flags=re.DOTALL)
        
    elif page == 'offline':
        new_card = """<div
                  key={card.id}
                  className="bg-white border border-gray-100 rounded-xl p-3 md:p-6 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-purple-300 transition-all duration-300 group"
                >
                  <div>
                    <div className="flex items-start gap-3 md:gap-4 mb-0 md:mb-6">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300 shrink-0">
                        <Icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.75} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="text-base md:text-xl font-bold text-gray-900 truncate">
                            {card.title}
                          </h3>
                          <span className="text-[9px] md:text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 shrink-0 ml-2">
                            {card.highlight}
                          </span>
                        </div>
                        <div className="text-[11px] md:text-xs text-purple-600 font-medium truncate">
                          {card.tagline}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 font-light leading-relaxed mt-4 mb-6 hidden md:block">
                      {card.desc}
                    </p>
                  </div>

                  <div className="flex flex-row md:flex-col gap-2 pt-4 md:pt-4 border-t border-gray-100 mt-4 md:mt-0">
                    <button
                      onClick={() => setSelectedBreakdownService(card)}
                      className="flex-1 py-2 md:py-2.5 px-2 md:px-4 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-lg text-[11px] md:text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      Breakdown
                    </button>
                    <a
                      href={quoteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 md:py-3 px-2 md:px-4 bg-gray-900 text-white rounded-lg text-[11px] md:text-xs font-semibold hover:bg-purple-600 transition-colors flex items-center justify-center gap-1.5 group/btn"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366] group-hover/btn:text-white transition-colors" />
                      Quote
                    </a>
                  </div>
                </div>"""
                
        content = re.sub(r'<div\s+key=\{card\.id\}\s+className="bg-white border border-gray-.*?</button>\s*</a>\s*</div>\s*</div>', new_card, content, flags=re.DOTALL)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print('Done restructuring cards for mobile')
