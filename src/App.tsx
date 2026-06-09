import React, { useState } from 'react';
import { 
  Search, 
  BookOpen, 
  MapPin, 
  Compass, 
  Shield, 
  Info, 
  Flame, 
  Moon, 
  Sun, 
  Sparkles, 
  RotateCcw,
  Volume2,
  VolumeX,
  Wind
} from 'lucide-react';
import { DEITIES } from './data/deities';
import { Deity } from './types';
import { MandalaGraphic } from './components/MandalaGraphic';
import { DeityBookModal } from './components/DeityBookModal';
import { playTempleBell } from './utils/audio';

export default function App() {
  const [selectedDeity, setSelectedDeity] = useState<Deity | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [soundEnabled, setSoundEnabled] = useState(true);

  const handleOpenBook = (deity: Deity) => {
    if (soundEnabled) {
      playTempleBell();
    }
    setSelectedDeity(deity);
  };

  const handleToggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    if (nextState) {
      playTempleBell();
    }
  };

  // Filter Deities based on Category and Search queries
  const filteredDeities = DEITIES.filter((deity) => {
    const matchesCategory = selectedCategory === 'All' || deity.category === selectedCategory;
    const cleanQuery = searchQuery.toLowerCase().trim();
    
    if (!cleanQuery) return matchesCategory;

    const matchesSearch = 
      deity.name.toLowerCase().includes(cleanQuery) ||
      deity.title.toLowerCase().includes(cleanQuery) ||
      deity.tagline.toLowerCase().includes(cleanQuery) ||
      deity.mantra.toLowerCase().includes(cleanQuery) ||
      deity.element.toLowerCase().includes(cleanQuery) ||
      deity.residence.toLowerCase().includes(cleanQuery) ||
      deity.weapons.some(w => w.toLowerCase().includes(cleanQuery)) ||
      deity.pages.some(p => p.title.toLowerCase().includes(cleanQuery) || p.content.some(c => c.toLowerCase().includes(cleanQuery)));

    return matchesCategory && matchesSearch;
  });

  const categories = ['All', 'Trideva', 'Adi Shakti', 'Vedic Pantheons', 'Vedic Elements'];

  return (
    <div className="min-h-screen bg-[#0C0D10] custom-scrollbar text-stone-200 relative overflow-x-hidden selection:bg-[#D4AF37]/35 selection:text-white">
      
      {/* Decorative Ornaments from the Immersive UI Design */}
      <div className="absolute bottom-40 right-10 w-[240px] h-[240px] opacity-10 border-[10px] border-[#D4AF37] rounded-full pointer-events-none select-none z-0 animate-spin-slow" />
      <div className="absolute top-1/4 left-[-100px] w-[350px] h-[350px] opacity-[0.03] border-[6px] border-[#D4AF37] rounded-full pointer-events-none select-none z-0" />
      <div className="absolute top-1/2 right-[-150px] w-[450px] h-[450px] opacity-[0.02] border-[12px] border-[#D4AF37] rounded-full pointer-events-none select-none z-0 animate-spin-slow" />

      {/* Absolute background stars & celestial glow overlays */}
      <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-[#1a1712]/15 via-transparent to-transparent pointer-events-none select-none z-0" />
      <div className="absolute top-44 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[#D4AF37]/2 blur-[120px] pointer-events-none select-none z-0" />

      {/* Primary Container */}
      <div className="max-w-7xl mx-auto px-4 py-6 md:py-12 relative z-10">
        
        {/* Divine Global Header Bar styled following the Immersive UI guidelines */}
        <header className="flex flex-col md:flex-row justify-between items-stretch md:items-end border-b border-[#D4AF37]/30 pb-6 mb-8 md:mb-12 gap-6 relative z-10">
          <div className="flex items-start gap-4">
            {/* Spinning Golden Dharma Chakra Logo */}
            <div 
              onClick={() => soundEnabled && playTempleBell()} 
              title="Click to Chime Chamber Bell"
              className="w-14 h-14 rounded-full border-2 border-double border-[#D4AF37]/60 flex items-center justify-center bg-black/40 glow-gold cursor-pointer transform hover:scale-105 transition shrink-0 mt-1"
            >
              <div className="animate-spin-slow text-[#D4AF37] text-xl font-bold font-serif">ॐ</div>
            </div>
            
            <div>
              <p className="text-[#D4AF37] font-serif italic text-xs md:text-sm tracking-wide">
                Sanatan Dharma Digital Archives
              </p>
              <h1 className="font-serif text-2xl md:text-4xl lg:text-5xl tracking-normal text-white font-medium mt-1">
                Puranic Deity <span className="text-[#D4AF37]">Encyclopedia</span>
              </h1>
              <div className="flex flex-wrap items-center gap-2 mt-2">
                <span className="text-[10px] md:text-xs font-sans text-stone-400 uppercase tracking-widest block font-medium">
                  Hindu Sacred Manuscript Codex
                </span>
                <span className="text-[9px] font-sans font-bold uppercase tracking-widest px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-[#D4AF37]">
                  Devanagari Ed.
                </span>
              </div>
            </div>
          </div>

          {/* Living Vedic Astro-Calendar and Audio Controls */}
          <div className="flex flex-col md:items-end gap-3 justify-center text-left md:text-right">
            <div className="text-stone-400 space-y-0.5 hidden md:block">
              <p className="text-[11px] uppercase tracking-wider text-stone-500 font-bold">VERSION 4.2.0 • BHARAT VARSHA</p>
            </div>

            <div className="flex flex-wrap items-center gap-3 md:justify-end">
              {/* Global Chime Switcher */}
              <button
                onClick={handleToggleSound}
                className={`p-2.5 rounded-xl border transition cursor-pointer ${soundEnabled ? 'bg-amber-500/10 border-[#D4AF37]/45 text-[#D4AF37]' : 'bg-stone-900 border-stone-800 text-stone-600'} hover:scale-105`}
                title={soundEnabled ? "Mute bell transitions" : "Unmute bell transitions"}
              >
                {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
              </button>
            </div>
          </div>
        </header>

        {/* Hero Editorial Sacred Banner Frame */}
        <section className="text-center max-w-3xl mx-auto mb-10 md:mb-16 select-none relative px-4">
          <div className="inline-block px-4 py-1 rounded-full border border-[#D4AF37]/15 bg-black/30 backdrop-blur-md text-xs text-[#D4AF37] font-display uppercase tracking-widest mb-4">
            एकं सत् विप्रा बहुधा वदन्ति
          </div>
          
          <h2 className="text-3xl md:text-5xl font-display font-black text-white leading-tight tracking-wide mb-3">
            Divine Manuscripts <br className="hidden md:block"/>
            <span className="text-gold-gradient text-glow-gold">of Hindu Deities</span>
          </h2>
          
          <p className="text-stone-400 font-serif text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Explore the avatars of Lord Vishnu, the nine forms of Mother Durga, the cosmic manifestations of Lord Shiva, and the elemental lords of early Vedic civilization through high-fidelity, interactive parchment codices.
          </p>

          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6" />
        </section>

        {/* Dashboard Panchayatana interactive mandala (Central interactive guide) */}
        <section className="bg-charcoal-card border-t-2 border-t-[#D4AF37]/60 border-x border-b border-white/5 p-6 md:p-8 mb-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4AF37]/5 blur-2xl rounded-full" />
          
          <div className="space-y-4 max-w-lg z-10">
            <span className="flex items-center gap-1.5 font-sans font-bold text-[#D4AF37] text-xs uppercase tracking-widest">
              <Sparkles size={14} className="animate-pulse" /> Panchayatana Mandala
            </span>
            <h3 className="text-xl md:text-2xl font-display font-black text-glow-gold text-white">
              Sanskrit Pothi Interactive Ledger
            </h3>
            <p className="text-xs md:text-sm text-stone-400 leading-relaxed font-serif text-justify">
              The application uses digital paper manuscript spreads to document Sanatan archives. Hover or select any deity below to consult their specific book. Every page turn triggers a calibrated brass tuning resonance mimicking a sub-bass temple clapper. Search via mantra, residence, or primary attributes like weapons below to isolate entries.
            </p>

            <div className="flex flex-wrap gap-2 text-xs font-mono pt-1">
              <span className="bg-black/40 border border-white/5 text-stone-400 px-2.5 py-1 rounded-[4px]">
                ⚡ Real-time Web Audio API
              </span>
              <span className="bg-black/40 border border-white/5 text-stone-400 px-2.5 py-1 rounded-[4px]">
                📜 Pothi Leaf Transitions
              </span>
              <span className="bg-black/40 border border-white/5 text-stone-400 px-2.5 py-1 rounded-[4px]">
                🍁 Total 38 Comprehensive Pages
              </span>
            </div>
          </div>

          {/* Majestic spinning central cosmic calendar wheel */}
          <div className="relative shrink-0 flex items-center justify-center p-4 border border-[#d4af37]/15 rounded-full bg-black/40 overflow-hidden w-64 h-64 shadow-inner">
            <div className="absolute inset-0 flex items-center justify-center opacity-70">
              <MandalaGraphic deityId="vishnu" size={240} animate={true} />
            </div>
            <div className="z-10 text-center bg-[#16191f]/90 border border-[#D4AF37]/35 rounded-full p-4 w-32 h-32 flex flex-col justify-center items-center shadow-lg">
              <span className="text-gold-500 font-display font-black text-sm block">SATYA</span>
              <span className="text-[10px] uppercase font-sans text-stone-500 tracking-wider">Eternal Order</span>
              <span className="text-xs font-serif font-bold text-amber-100 italic mt-1 font-sans">"Dharmo Rakshati"</span>
            </div>
          </div>
        </section>

        {/* Search, Discovery Filter Tool Rail */}
        <section className="bg-[#1A1B1E]/95 border border-white/5 rounded-[4px] p-4 md:p-6 mb-8 md:mb-12 sticky top-2 shadow-2xl backdrop-blur-lg z-30">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full lg:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-500" size={16} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search via names, avatars, weapons, mantras, or history text..."
                className="w-full bg-black/50 border border-white/5 focus:border-[#D4AF37]/60 text-stone-200 placeholder-stone-600 rounded-[4px] py-2.5 pl-11 pr-4 text-xs font-sans select-text outline-none transition focus:ring-1 focus:ring-[#D4AF37]/30"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-500 hover:text-stone-300 text-xs font-bold"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Filter Pills (Vedic & Classical Realms) */}
            <div className="flex flex-wrap gap-1.5 items-center w-full lg:w-auto overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
              <span className="text-[10px] text-stone-500 font-sans uppercase font-bold mr-2 hidden md:block">Realms:</span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-[4px] text-[11px] font-sans font-bold tracking-widest border transition uppercase cursor-pointer ${
                    selectedCategory === cat 
                      ? 'bg-[#D4AF37] border-[#D4AF37] text-[#0C0D10] font-black shadow-md shadow-[#D4AF37]/15' 
                      : 'bg-[#1A1B1E]/60 border-white/5 text-stone-400 hover:text-stone-100 hover:border-[#D4AF37]/50 hover:bg-[#2A2C31]'
                  }`}
                >
                  {cat || 'All'}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Deity Cards Grid representing the core pantheon */}
        <section className="relative z-10">
          <div className="flex justify-between items-center mb-6 pl-1 border-l-2 border-[#D4AF37]">
            <h3 className="font-display font-extrabold text-sm md:text-base text-glow-gold text-[#D4AF37] uppercase tracking-widest">
              Divine Pantheon Array ({filteredDeities.length} records found)
            </h3>
            {searchQuery && (
              <button 
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="flex items-center gap-1.5 text-xs text-[#D4AF37] hover:text-white"
              >
                <RotateCcw size={12} /> Reset filters
              </button>
            )}
          </div>

          {filteredDeities.length === 0 ? (
            /* Search Fallback card */
            <div className="bg-[#111317] border border-stone-800 rounded-2xl p-12 text-center max-w-md mx-auto shadow-xl">
              <Info className="mx-auto text-amber-500/80 mb-3" size={32} />
              <h4 className="font-display text-white font-bold mb-2">No Sacred Scrolls Found</h4>
              <p className="text-stone-500 font-serif text-xs leading-normal">
                No records could be parsed correlating to your input. Be mindful that you can search for exact weapons like "Chakra", avatars like "Matsya", or page structures like "Skandamata".
              </p>
            </div>
          ) : (
            /* Massive Grid of Cards */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDeities.map((deity) => {
                return (
                  <div
                    key={deity.id}
                    className="group bg-[#1A1B1E] border border-white/5 hover:border-[#D4AF37]/80 rounded-[4px] transition duration-200 shadow-xl flex flex-col justify-between relative overflow-hidden"
                  >
                    {/* Gilded Top Accent bar mimicking .deity-card::before */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#D4AF37] opacity-60 group-hover:opacity-100 transition duration-200 z-10" />

                    {/* Upper decorative heading banner holding spinning mandala and sanskrit titles */}
                    <div className="p-5 border-b border-white/5 bg-[#1C1D21] relative flex justify-between items-center overflow-hidden">
                      {/* Quiet Background vector representation */}
                      <div className="absolute right-0 top-0 translate-x-4 -translate-y-4 opacity-10 group-hover:opacity-20 transition duration-300">
                        <MandalaGraphic deityId={deity.id} size={150} animate={false} />
                      </div>

                      <div className="space-y-1 relative z-10">
                        <span className="text-[9px] text-[#D4AF37] font-sans tracking-widest uppercase font-black px-1.5 py-0.5 rounded bg-[#D4AF37]/5 border border-[#D4AF37]/20">
                          {deity.category}
                        </span>
                        <h4 className="font-display font-black text-lg md:text-xl text-white group-hover:text-glow-gold tracking-wide pt-1">
                          {deity.name}
                        </h4>
                      </div>

                      <div className="text-right shrink-0 relative z-10">
                        <span className="text-glow-gold text-[#D4AF37] font-display text-md md:text-lg font-black block">
                          {deity.sanskritName}
                        </span>
                        <span className="text-[9px] text-stone-500 font-sans uppercase">
                          {deity.pages.length} manuscript leaves
                        </span>
                      </div>
                    </div>

                    {/* Middle Info Block: Core characteristics ledger */}
                    <div className="p-5 flex-1 space-y-4 relative z-10">
                      {/* Tagline */}
                      <p className="text-xs font-serif text-stone-400 italic leading-relaxed">
                        "{deity.tagline}"
                      </p>

                      {/* Attributes list */}
                      <div className="space-y-2 text-[11.5px] font-serif border-y border-white/5 py-3.5">
                        <div className="flex items-center justify-between text-stone-400">
                          <span className="flex items-center gap-1.5 text-stone-500 font-sans font-medium text-[10px] uppercase tracking-wider">
                            <MapPin size={12} className="text-[#D4AF37]/70" /> Realm:
                          </span>
                          <span className="font-semibold text-stone-300">{deity.residence}</span>
                        </div>

                        <div className="flex items-center justify-between text-stone-400">
                          <span className="flex items-center gap-1.5 text-stone-500 font-sans font-medium text-[10px] uppercase tracking-wider">
                            <Compass size={12} className="text-[#D4AF37]/70" /> Mount (Vahana):
                          </span>
                          <span className="font-semibold text-stone-300">{deity.mount}</span>
                        </div>

                        <div className="flex items-center justify-between text-stone-400">
                          <span className="flex items-center gap-1.5 text-stone-500 font-sans font-medium text-[10px] uppercase tracking-wider">
                            <Flame size={12} className="text-[#D4AF37]/70" /> Element:
                          </span>
                          <span className="font-semibold text-stone-300">{deity.element}</span>
                        </div>
                      </div>

                      {/* Prime Weapons Badge Row */}
                      <div>
                        <span className="text-[9px] text-stone-500 font-sans uppercase block mb-1.5 font-bold tracking-widest">Wielded Instruments:</span>
                        <div className="flex flex-wrap gap-1">
                          {deity.weapons.map((w, idx) => (
                            <span key={idx} className="bg-[#2A2C31]/50 border border-white/5 text-stone-400 hover:text-[#D4AF37] px-2 py-0.5 rounded-[3px] text-[10px] font-sans transition">
                              {w}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Book Opening Interactive Action trigger styled after open-book-btn in Immersive UI */}
                    <div className="p-5 pt-0 relative z-10">
                      <button
                        onClick={() => handleOpenBook(deity)}
                        className="w-full text-center py-2.5 px-4 rounded-[4px] border border-[#D4AF37] text-[#D4AF37] font-display hover:text-[#0C0D10] hover:bg-[#D4AF37] text-xs font-medium uppercase tracking-[0.15em] transition duration-200 outline-none flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                      >
                        <BookOpen size={13} className="stroke-[2]" />
                        <span>[ Open Deity Book ]</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

      </div>

      {/* Global Sacred Manuscript Digital Book Overlay Modal */}
      {selectedDeity && (
        <DeityBookModal
          deity={selectedDeity}
          onClose={() => setSelectedDeity(null)}
          soundEnabled={soundEnabled}
          setSoundEnabled={setSoundEnabled}
        />
      )}

      {/* Ground Footer with Traditional Vedic Dedications */}
      <footer className="mt-16 border-t border-[#D4AF37]/15 py-8 text-center bg-[#050608] text-stone-500 text-xs">
        <div className="max-w-7xl mx-auto px-4 space-y-3">
          <div className="flex justify-center items-center gap-1.5 text-[#D4AF37]/80">
            <span className="text-base font-bold font-display">ॐ</span>
            <span className="text-[10px] tracking-widest uppercase font-sans font-bold">
              Sarve Bhavantu Sukhinah • May All Living Beings Be Joyous
            </span>
            <span className="text-base font-bold font-display">ॐ</span>
          </div>
          <p className="font-serif italic text-stone-500 text-[11px] max-w-md mx-auto">
            "सर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके । शरण्ये त्र्यम्बके गौरि नारायणि नमोऽस्तु ते ॥"
          </p>
          <div className="pt-2 text-[10px] font-sans uppercase tracking-widest text-[#a16224] flex justify-center items-center gap-2">
            <span>© 2026 Hindu Deity Encyclopedia Ed.</span>
            <span>•</span>
            <span>All text records fully populated</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
