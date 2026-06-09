import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Volume2, 
  VolumeX, 
  BookOpen, 
  Compass, 
  Shield, 
  Compass as VahanaIcon, 
  Activity, 
  MapPin, 
  Sparkles,
  Info
} from 'lucide-react';
import { Deity, Page } from '../types';
import { MandalaGraphic } from './MandalaGraphic';
import { playTempleBell } from '../utils/audio';

interface DeityBookModalProps {
  deity: Deity;
  onClose: () => void;
  soundEnabled: boolean;
  setSoundEnabled: (enabled: boolean) => void;
}

export const DeityBookModal: React.FC<DeityBookModalProps> = ({
  deity,
  onClose,
  soundEnabled,
  setSoundEnabled,
}) => {
  // Mobile uses simple flat pages; Desktop uses double spreads
  const [isMobile, setIsMobile] = useState(false);
  const [mobilePage, setMobilePage] = useState(1); // 1 to N+1
  const [desktopSpread, setDesktopSpread] = useState(0); // 0 to maxSpread

  // Define total mobile pages (Deity's pages + 1 Concluding Blessing Page)
  const totalMobilePages = deity.pages.length + 1;

  // Calculate total spreads on desktop
  // Spread 0: Left (Deity Info Dashboard), Right (Page 1 Cover)
  // Subsequent Spreads: Left (Page 2k), Right (Page 2k+1)
  const totalSpreads = Math.ceil((deity.pages.length) / 2) + (deity.pages.length % 2 === 0 ? 1 : 0);

  // Check window width for responsive sizing
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Play opening bell chime
  useEffect(() => {
    if (soundEnabled) {
      playTempleBell();
    }
  }, [deity.id]);

  const handleNextSpread = () => {
    if (soundEnabled) playTempleBell();
    setDesktopSpread((prev) => Math.min(prev + 1, totalSpreads - 1));
  };

  const handlePrevSpread = () => {
    if (soundEnabled) playTempleBell();
    setDesktopSpread((prev) => Math.max(prev - 0, prev - 1));
  };

  const handleNextMobilePage = () => {
    if (soundEnabled) playTempleBell();
    setMobilePage((prev) => Math.min(prev + 1, totalMobilePages));
  };

  const handlePrevMobilePage = () => {
    if (soundEnabled) playTempleBell();
    setMobilePage((prev) => Math.max(prev - 1, 1));
  };

  const jumpToMobilePage = (pageNumber: number) => {
    if (soundEnabled) playTempleBell();
    setMobilePage(pageNumber);
  };

  const jumpToDesktopSpread = (spreadIndex: number) => {
    if (soundEnabled) playTempleBell();
    setDesktopSpread(spreadIndex);
  };

  // Dedicated decorative ornaments
  const renderSacredBorderCorners = () => (
    <div className="absolute inset-0 pointer-events-none p-3 select-none">
      {/* Top Left */}
      <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37]" />
      <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-[#D4AF37]/50" />
      <div className="absolute top-4 left-4 w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />

      {/* Top Right */}
      <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[#D4AF37]" />
      <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-[#D4AF37]/50" />
      <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />

      {/* Bottom Left */}
      <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-[#D4AF37]" />
      <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-[#D4AF37]/50" />
      <div className="absolute bottom-4 left-4 w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />

      {/* Bottom Right */}
      <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37]" />
      <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-[#D4AF37]/50" />
      <div className="absolute bottom-4 right-4 w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
    </div>
  );

  // Mangalam closing page contents
  const renderConcludingBlessingsPage = () => (
    <div className="flex flex-col h-full justify-between p-3 md:p-6 text-center select-none font-serif">
      <div className="border-b border-[#D4AF37]/20 pb-4">
        <span className="text-[#a16224] text-xs font-display tracking-widest block font-bold mb-1">MANGALAM & SHANTI</span>
        <h3 className="text-xl md:text-2xl font-display font-black text-[#5c3e1e] leading-tight">स्वस्ति वाचन</h3>
      </div>

      <div className="my-auto py-2 space-y-6">
        {/* Divine Ohm Motif */}
        <div className="w-16 h-16 mx-auto rounded-full border border-[#D4AF37]/40 flex items-center justify-center bg-[#D4AF37]/5">
          <span className="text-2xl font-display font-black text-[#85581c] text-glow-gold">ॐ</span>
        </div>

        <div className="space-y-3 px-3">
          <p className="text-sm md:text-base font-bold italic text-amber-950 leading-relaxed max-w-md mx-auto">
            "ॐ द्यौः शान्तिरन्तरिक्षं शान्तिः पृथिवी शान्तिरापः शान्तिरोषधयः शान्तिः। वनस्पतयः शान्तिर्विश्वे देवाः शान्तिर्ब्रह्म शान्तिः सर्वं शान्तिः शान्तिरेव शान्तिः सा मा शान्तिरेधि॥"
          </p>
          <p className="text-xs text-[#6e5330] leading-normal max-w-sm mx-auto justify-center text-center">
            May peace radiate there in the whole sky and cosmic space. May peace flow on earth, in the waters, in vegetation, and throughout global systems. May there be absolute harmony everywhere.
          </p>
        </div>

        <div className="pt-2 border-t border-[#D4AF37]/10 max-w-xs mx-auto">
          <p className="text-[#85581c] font-display text-xs tracking-wider">
            इति शुभम् — "Let there be auspiciousness for all"
          </p>
        </div>
      </div>

      <div className="pt-4 border-t border-[#D4AF37]/15">
        <span className="text-[10px] text-stone-500 font-sans uppercase">Sacred Manuscript Concluded</span>
      </div>
    </div>
  );

  // Left dashboard for Spread 0 on desktop
  const renderDeityStatsDashboard = () => (
    <div className="flex flex-col h-full justify-between p-4 md:p-6 text-[#2c1f0c] font-serif">
      <div className="border-b border-[#D4AF37]/20 pb-3">
        <span className="text-[#a16224] text-xs font-display tracking-widest block font-bold uppercase mb-1">Celestial Ledger</span>
        <h3 className="text-2xl font-display font-black text-[#5c3e1e]">{deity.name}</h3>
        <p className="text-xs italic text-[#78582d] leading-normal mt-1">{deity.tagline}</p>
      </div>

      {/* Deity Core Attributes Table */}
      <div className="my-auto py-4 space-y-3 text-sm">
        <div className="flex justify-between items-center bg-[#eaddc4]/40 px-3 py-1.5 rounded-md border-l-2 border-[#D4AF37]">
          <span className="flex items-center gap-1.5 font-sans font-semibold text-stone-600 text-[11px] uppercase tracking-wider">
            <MapPin size={13} className="text-[#966b26]" /> Cosmic Realm
          </span>
          <span className="font-bold text-[#5c3e1e] text-right">{deity.residence}</span>
        </div>

        <div className="flex justify-between items-center bg-[#eaddc4]/40 px-3 py-1.5 rounded-md border-l-2 border-[#D4AF37]">
          <span className="flex items-center gap-1.5 font-sans font-semibold text-stone-600 text-[11px] uppercase tracking-wider">
            <Compass size={13} className="text-[#966b26]" /> Vahana (Mount)
          </span>
          <span className="font-bold text-[#5c3e1e] text-right">{deity.mount}</span>
        </div>

        <div className="flex justify-between items-center bg-[#eaddc4]/40 px-3 py-1.5 rounded-md border-l-2 border-[#D4AF37]">
          <span className="flex items-center gap-1.5 font-sans font-semibold text-stone-600 text-[11px] uppercase tracking-wider">
            <Activity size={13} className="text-[#966b26]" /> Cosmic Agency
          </span>
          <span className="font-bold text-[#5c3e1e] text-right">{deity.element}</span>
        </div>

        <div className="bg-[#eaddc4]/30 p-2.5 rounded-md border border-[#D4AF37]/20 space-y-1">
          <span className="flex items-center gap-1 font-sans font-semibold text-stone-600 text-[10px] uppercase tracking-wider">
            <Shield size={12} className="text-[#966b26]" /> Celestial Armaments / Instruments
          </span>
          <div className="flex flex-wrap gap-1 mt-1">
            {deity.weapons.map((w, idx) => (
              <span key={idx} className="bg-[#f2ead5] border border-[#d4af37]/20 text-[#6e5330] px-2 py-0.5 rounded text-[10px] font-sans font-semibold">
                {w}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-2 border-t border-[#D4AF37]/15">
        <p className="text-[10px] text-stone-500 font-sans uppercase leading-tight">
          Template: {deity.template} • Record RefID: {deity.id}-V83
        </p>
      </div>
    </div>
  );

  // Master renderer for individual pages
  const renderBookPageContent = (page: Page) => {
    const isCover = page.type === 'cover';

    if (isCover) {
      return (
        <div className="flex flex-col h-full justify-between p-3 md:p-6 text-center select-none font-serif">
          {/* Sanskrit Header Mantra Band */}
          <div className="border-b-2 border-double border-[#D4AF37]/30 pb-3">
            <h4 className="text-glow-gold text-[#bd9324] font-display text-sm md:text-base font-black tracking-widest">{deity.sanskritName}</h4>
            <p className="text-[10px] text-stone-500 tracking-wider font-sans uppercase">{deity.category} sacred record</p>
          </div>

          <div className="my-auto py-4 space-y-5">
            {/* Massive Rotating Mandala Background Behind Sanctum Title */}
            <div className="relative w-28 h-28 md:w-36 md:h-36 mx-auto flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center opacity-40">
                <MandalaGraphic deityId={deity.id} size={150} animate={true} />
              </div>
              <div className="z-10 text-center">
                <span className="text-3xl md:text-4xl text-[#825c21] font-display font-extrabold block selection:bg-amber-100">ॐ</span>
                <span className="text-[10px] uppercase font-sans font-bold tracking-widest text-[#a16224]">{deity.title}</span>
              </div>
            </div>

            {/* Sacred Devotion Box */}
            <div className="bg-[#f0e7d5] border-y border-[#D4AF37]/30 py-3 px-2">
              <p className="text-[#a16224] font-display text-[10px] uppercase font-semibold tracking-widest mb-1">Maha Mantra</p>
              <h2 className="text-lg md:text-[21px] font-display font-black text-rose-950 leading-tight tracking-wide">{deity.mantra}</h2>
              <p className="text-[10px] md:text-xs text-stone-600 font-sans font-medium italic mt-1.5 max-w-md mx-auto">{deity.mantraTranslation}</p>
            </div>

            <p className="text-xs md:text-sm text-[#42311c] font-medium leading-relaxed max-w-sm mx-auto px-1 justify-center text-center">
              {deity.overview}
            </p>
          </div>

          <div className="pt-2 border-t border-[#D4AF37]/15">
            <span className="text-[10px] text-rose-800 font-display font-bold tracking-widest">CHAPTER I — BEGINNING OF THE TRANSMISSION</span>
          </div>
        </div>
      );
    }

    // Standard leaf
    return (
      <div className="flex flex-col h-full justify-between p-3 md:p-6 font-serif">
        {/* Header decoration */}
        <div className="flex justify-between items-center border-b border-[#D4AF37]/25 pb-2">
          <span className="text-[10px] text-[#916b39] font-sans font-semibold uppercase tracking-wider">{page.subtitle || 'SACRED ENCYCLOPEDIA'}</span>
          <span className="text-xs font-display font-black text-amber-900">ॐ</span>
        </div>

        {/* Narrative / Explanations split with Beautiful Drop-Cap */}
        <div className="my-auto py-2 custom-scrollbar overflow-y-auto max-h-[50vh] md:max-h-[55vh] pr-1 scroll-smooth">
          <h4 className="text-base md:text-lg font-display font-black text-[#5e4121] border-b border-[#D4AF37]/10 pb-1.5 mb-3 leading-snug">
            {page.title}
          </h4>

          {page.content.map((pText, pIdx) => {
            const isFirstParagraph = pIdx === 0;
            // Extract first letter for dropping
            const firstLetter = pText.charAt(0);
            const remainingText = pText.slice(1);

            return (
              <p key={pIdx} className="text-xs md:text-[13.5px] text-[#3c2f1e] leading-relaxed text-justify mb-3 font-serif">
                {isFirstParagraph ? (
                  <>
                    <span className="float-left text-4xl md:text-5xl font-display font-black text-[#a16224] mr-2 mt-0.5 border border-[#a16224]/30 px-1.5 py-0.5 bg-[#fcf9f2] rounded-sm line-clamp-1 selection:bg-amber-100 select-none">
                      {firstLetter}
                    </span>
                    {remainingText}
                  </>
                ) : (
                  pText
                )}
              </p>
            );
          })}

          {/* Miniature Dynamic Schematic Overlay relative to page context */}
          {page.visualElement && (
            <div className="mt-4 bg-[#f1ebd6] p-2.5 rounded border border-[#d4af37]/25 flex items-center gap-3">
              <div className="w-10 h-10 shrink-0 border border-[#D4AF37]/45 rounded-full flex items-center justify-center bg-[#fbf9f1]/80">
                <MandalaGraphic deityId={deity.id} size={30} animate={false} />
              </div>
              <div className="text-[11px] leading-tight text-[#5c462b]">
                <strong className="font-sans font-semibold uppercase block tracking-wider text-[9px] text-[#a16224]">Scripture illustration</strong>
                <span className="italic text-stone-600">{page.visualElement.details || `${deity.name} ${page.title} symbolic geometry.`}</span>
              </div>
            </div>
          )}
        </div>

        {/* Bottom page label */}
        <div className="pt-2 border-t border-[#D4AF37]/15 flex justify-between items-center">
          <span className="text-[10px] text-stone-500 font-sans tracking-wide uppercase">Manuscript Leaf {page.pageNumber}</span>
          <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
        </div>
      </div>
    );
  };

  // Build desktop spreads
  // Spread 0: Left Dashboard, Right Cover (Page 1)
  // Spread s: Left Page 2s, Right Page 2s+1
  const renderDesktopSpread = (s: number) => {
    let leftContent: React.ReactNode;
    let rightContent: React.ReactNode;

    if (s === 0) {
      leftContent = renderDeityStatsDashboard();
      rightContent = renderBookPageContent(deity.pages[0]);
    } else {
      const leftPageIdx = s * 2 - 1;
      const rightPageIdx = s * 2;

      leftContent = leftPageIdx < deity.pages.length 
        ? renderBookPageContent(deity.pages[leftPageIdx]) 
        : renderConcludingBlessingsPage();

      rightContent = rightPageIdx < deity.pages.length 
        ? renderBookPageContent(deity.pages[rightPageIdx]) 
        : renderConcludingBlessingsPage();
    }

    return (
      <div className="flex flex-1 flex-col md:flex-row relative">
        {/* Left Side Page */}
        <div className="w-full md:w-1/2 manuscript-paper-texture border-b md:border-b-0 md:border-r border-amber-955/25 h-full relative overflow-hidden">
          {renderSacredBorderCorners()}
          <div className="h-full p-4 md:p-8 flex flex-col justify-between">
            {leftContent}
          </div>
        </div>

        {/* Dynamic central dividing book bind fold and spine shadow */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 bg-gradient-to-r from-black/0 via-black/15 to-black/0 hidden md:flex items-center justify-center pointer-events-none select-none z-10">
          <div className="w-[1px] h-[95%] bg-amber-900/10" />
        </div>

        {/* Right Side Page */}
        <div className="w-full md:w-1/2 manuscript-paper-texture h-full relative overflow-hidden">
          {renderSacredBorderCorners()}
          <div className="h-full p-4 md:p-8 flex flex-col justify-between">
            {rightContent}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-3 md:p-6 overflow-y-auto">
      {/* Modal Card Backdrop enclosing physical book with crisp 4px corners */}
      <div className="bg-[#1A1B1E] border-2 border-[#D4AF37]/50 rounded-[4px] w-full max-w-6xl shadow-2xl overflow-hidden flex flex-col h-auto md:h-[90vh] max-h-[96vh] relative">
        
        {/* Top Control Rail (Floating Gilded Bar) with Immersive slate bg */}
        <div className="flex justify-between items-center px-4 py-3 bg-[#0C0D10] border-b border-[#D4AF37]/30 text-stone-300 z-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/45 text-[#D4AF37]">
              <BookOpen size={16} />
            </div>
            <div>
              <h2 className="text-xs md:text-sm font-display font-bold text-glow-gold text-[#D4AF37] tracking-wider uppercase">
                {deity.name} • Codex
              </h2>
              <span className="text-[9px] text-stone-500 font-sans uppercase block -mt-0.5">
                {deity.category} Realm Account
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Direct leaf index bar for quick jumping (Desktop Only) */}
            {!isMobile && (
              <div className="hidden lg:flex items-center bg-black/40 px-3 py-1 rounded-full border border-[#D4AF37]/15 text-xs text-stone-400 gap-1.5 mr-4 selection:bg-amber-100">
                <span className="text-[10px] text-stone-500 mr-1 uppercase font-semibold">Leaf Index:</span>
                <button 
                  onClick={() => jumpToDesktopSpread(0)} 
                  className={`px-1.5 py-0.5 rounded transition ${desktopSpread === 0 ? 'bg-[#D4AF37] text-black font-semibold' : 'hover:text-white'}`}
                >
                  Cover
                </button>
                {Array.from({ length: totalSpreads - 1 }).map((_, idx) => {
                  const sIdx = idx + 1;
                  return (
                    <button
                      key={sIdx}
                      onClick={() => jumpToDesktopSpread(sIdx)}
                      className={`px-1.5 py-0.5 rounded transition ${desktopSpread === sIdx ? 'bg-[#D4AF37] text-black font-semibold' : 'hover:text-white'}`}
                    >
                      {sIdx}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Audio Indicator */}
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              title={soundEnabled ? "Mute Bell" : "Enable Bell"}
              className="p-1.5 hover:bg-[#D4AF37]/10 text-[#D4AF37] hover:text-[#fbf9f1] rounded-lg transition"
            >
              {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
            </button>

            {/* Close Cross */}
            <button
              onClick={onClose}
              className="p-1.5 bg-red-950/40 border border-red-800/40 text-red-400 hover:bg-red-900/60 hover:text-white rounded-lg transition"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Physical Scroll/Book core frame body */}
        <div className="flex-1 bg-gradient-to-b from-[#1A1B1E] to-[#0C0D10] p-2 md:p-6 flex items-center justify-center relative overflow-hidden select-text">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={isMobile ? `mob-${mobilePage}` : `desk-${desktopSpread}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.23, ease: 'easeInOut' }}
              className="w-full h-full flex flex-col justify-between"
            >
              {isMobile ? (
                /* Mobile: Sequenced Single Page Leaf with 4px corners */
                <div className="flex-1 manuscript-paper-texture rounded-[4px] border border-amber-900/15 p-4 md:p-6 relative select-text overflow-hidden shadow-lg h-full flex flex-col">
                  {renderSacredBorderCorners()}
                  {mobilePage === totalMobilePages 
                    ? renderConcludingBlessingsPage() 
                    : renderBookPageContent(deity.pages[mobilePage - 1])}
                </div>
              ) : (
                /* Desktop: Two-Page Spread Layout representing open book ledger */
                renderDesktopSpread(desktopSpread)
              )}
            </motion.div>
          </AnimatePresence>

          {/* Floating Navigation Paddles with touch support */}
          {/* Left Arrow */}
          {((isMobile && mobilePage > 1) || (!isMobile && desktopSpread > 0)) && (
            <button
              onClick={isMobile ? handlePrevMobilePage : handlePrevSpread}
              className="absolute left-2 md:left-6 p-2 md:p-3 bg-[#D4AF37] hover:bg-[#bd9b2e] active:scale-95 text-[#0d0d0c] rounded-full shadow-lg border border-yellow-200/50 hover:shadow-[#D4AF37]/35 cursor-pointer z-30 transition animate-float"
              style={{ top: '50%', transform: 'translateY(-50%)' }}
            >
              <ChevronLeft size={20} className="stroke-[3]" />
            </button>
          )}

          {/* Right Arrow */}
          {((isMobile && mobilePage < totalMobilePages) || (!isMobile && desktopSpread < totalSpreads - 1)) && (
            <button
              onClick={isMobile ? handleNextMobilePage : handleNextSpread}
              className="absolute right-2 md:right-6 p-2 md:p-3 bg-[#D4AF37] hover:bg-[#bd9b2e] active:scale-95 text-[#0d0d0c] rounded-full shadow-lg border border-yellow-200/50 hover:shadow-[#D4AF37]/35 cursor-pointer z-30 transition animate-float"
              style={{ top: '50%', transform: 'translateY(-50%)' }}
            >
              <ChevronRight size={20} className="stroke-[3]" />
            </button>
          )}
        </div>

        {/* Footer Navigation & Page Counter Bar */}
        <div className="flex justify-between items-center px-6 py-2.5 bg-[#0C0D10] border-t border-[#D4AF37]/20 text-stone-500 text-xs">
          <div>
            <span className="font-sans font-semibold uppercase text-[9px] tracking-widest text-[#a16224]">
              {deity.category} Section
            </span>
          </div>

          <div className="font-mono text-stone-400">
            {isMobile ? (
              <span className="text-[11px]">
                Leaf <strong className="text-[#D4AF37]">{mobilePage}</strong> of {totalMobilePages}
              </span>
            ) : (
              <span className="text-[11px]">
                Spread <strong className="text-[#D4AF37]">{desktopSpread + 1}</strong> of {totalSpreads} (Pages {desktopSpread * 2} - {desktopSpread * 2 + 1})
              </span>
            )}
          </div>

          <div className="hidden sm:block">
            <span className="italic text-stone-500 font-serif">
              "कृण्वन्तो विश्वमार्यम्" — Noblesse all creation
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
