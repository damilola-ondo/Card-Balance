const MENU_ITEMS = ["Store", "iPad", "iPhone", "Watch", "Vision", "Airpods"];

export default function MenuDrawer({ isOpen, onClose }) {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-[#e8e8e8] z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ fontFamily: "-apple-system, 'SF Pro Display', BlinkMacSystemFont, sans-serif" }}
      >
        {/* Close button */}
        <div className="flex justify-end p-6">
          <button
            onClick={onClose}
            className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm hover:bg-gray-100 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1d1d1f" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        {/* Spacer */}
        <div className="h-48" />

        {/* Menu items */}
        <div className="px-6">
          {MENU_ITEMS.map((item, i) => (
            <div key={i}>
              <button
                className="w-full text-center py-5 text-[18px] text-[#1d1d1f] font-light hover:text-[#0071e3] transition-colors"
                onClick={onClose}
              >
                {item}
              </button>
              {i < MENU_ITEMS.length - 1 && (
                <hr className="border-[#c7c7cc]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}