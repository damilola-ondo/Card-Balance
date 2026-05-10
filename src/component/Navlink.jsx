import React from 'react'
const NAV_LINKS = ["About Us", "Menu", "Reviews", "Blog", "Contact"];

function Navlink() {
  return (
    <div>
        {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? "nav-glass shadow-sm" : ""}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="font-bold text-lg text-gray-900">Bites</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <a key={link} href="#" className="text-sm text-gray-600 hover:text-orange-500 transition-colors font-medium">
                {link}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-orange-50 rounded-full transition-colors">
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-orange-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
            <button className="btn-primary text-white px-5 py-2 rounded-full text-sm font-semibold hidden md:block">
              Reserve Table
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navlink