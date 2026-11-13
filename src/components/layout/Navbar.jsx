
/**
 * src/components/layout/Navbar.jsx
 * SEO-friendly responsive navbar
 * Desktop Mega Menu + Mobile Drawer
 */

import React, { useEffect, useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

// ============================================================
// DATA MENU — satu sumber data untuk Desktop dan Mobile
// ============================================================

const MENU_LAYANAN = [
  {
    title: 'Kantor & Ruang Kerja',
    items: [
      { label: 'Virtual Office', href: '/virtual-office' },
      { label: 'Ruang Meeting', href: '/Room-meet' },
      { label: 'Studio Podcast', href: '/Podcast-studio' },
      { label: 'Coworking Space', href: '/coworking-space' },
      { label: 'Art Furniture', href: '/art-furniture' },
    ],
  },
  {
    title: 'Layanan Bisnis',
    items: [
      { label: 'Pendirian PT', href: '/pendirian-pt' },
      { label: 'Pendirian CV', href: '/pendirian-cv' },
      { label: 'Pendirian Firma', href: '/pendirian-firma' },
      { label: 'HaKI', href: '/pendaftaran-haki' },
      { label: 'Pajak & Akuntansi', href: '/pajak-akuntansi' },
      { label: 'Call Answering Service', href: '/call-answering' },
    ],
  },
  {
    title: 'Foreign Services',
    items: [
      { label: 'Pendirian PMA', href: '/pendirian-pma' },
      { label: 'International Setup', href: '/internasional-business' },
      { label: 'Visa Bisnis', href: '/visa-bisnis' },
      { label: 'Visa Investor / KITAS', href: '/kitas-investor' },
      { label: 'Visa Turis', href: '/visa-turis' },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // State menu mobile
  const [open, setOpen] = useState(false);
  const [mobileLayananOpen, setMobileLayananOpen] = useState(false);

  // ============================================================
  // DETEKSI SCROLL
  // ============================================================

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    // Cek posisi scroll ketika komponen pertama kali dimuat
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // ============================================================
  // MENCEGAH BODY SCROLL SAAT MOBILE DRAWER TERBUKA
  // ============================================================

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (open) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  // ============================================================
  // MENUTUP MENU MOBILE
  // ============================================================

  const closeMobileMenu = () => {
    setOpen(false);
    setMobileLayananOpen(false);
  };

  // ============================================================
  // RENDER
  // ============================================================

  return (
    <>
      {/* ========================================================
          HEADER
      ======================================================== */}

      <header
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-md shadow-md text-gray-800'
            : 'bg-transparent text-gray-700'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between relative">

          {/* LOGO */}

          <a
            href="/"
            className="text-lg font-semibold tracking-tight"
            aria-label="Duduk Manis - Beranda"
          >
            Duduk <span className="font-bold text-blue-600">Manis</span>
          </a>

          {/* ====================================================
              DESKTOP NAVIGATION
          ==================================================== */}

          <nav
            className="hidden md:flex items-center gap-6"
            aria-label="Navigasi utama"
          >

            {/* CARI LOKASI */}

            <a
              href="/find-location"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Cari Lokasi
            </a>

            {/* PROMO */}

            <a
              href="/promo"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Promo
            </a>

            {/* MEGA MENU LAYANAN */}

            <div className="relative group py-4">

              <button
                type="button"
                className="text-sm font-medium flex items-center gap-1 hover:text-blue-600 transition-colors"
                aria-haspopup="true"
              >
                Layanan

                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
              </button>

              {/* DROPDOWN */}

              <div
                className="
                  absolute left-1/2 -translate-x-1/2 top-full
                  w-[720px]
                  hidden
                  group-hover:block
                  group-focus-within:block
                  z-50
                "
              >

                {/* HOVER BRIDGE */}

                <div className="absolute -top-6 left-0 w-full h-8 bg-transparent" />

                {/* MEGA MENU CONTENT */}

                <div className="bg-white rounded-lg shadow-xl p-6 border border-gray-100 text-gray-800 relative mt-2">

                  <div className="grid grid-cols-3 gap-6 text-sm">

                    {MENU_LAYANAN.map((group) => (
                      <div key={group.title}>

                        <h3 className="font-bold text-blue-600 mb-3">
                          {group.title}
                        </h3>

                        <ul className="space-y-2 text-gray-600">

                          {group.items.map((item) => (
                            <li key={item.href}>

                              <a
                                href={item.href}
                                className="block hover:text-blue-600 transition-colors"
                              >
                                {item.label}
                              </a>

                            </li>
                          ))}

                        </ul>

                      </div>
                    ))}

                  </div>

                </div>
              </div>
            </div>

            {/* INTERNATIONAL BUSINESS */}

            <a
              href="/internasional-business"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              International Business Setup
            </a>

            {/* TENTANG KAMI */}

            <a
              href="/tentang-kami"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Tentang Kami
            </a>

          </nav>

          {/* ====================================================
              DESKTOP ACTIONS
          ==================================================== */}

          <div className="hidden md:flex items-center gap-4">

            <a
              href="/hubungi-kami"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors shadow-sm"
            >
              Hubungi Kami
            </a>

          </div>

          {/* ====================================================
              MOBILE HAMBURGER
          ==================================================== */}

          <button
            type="button"
            className="md:hidden p-2 text-current z-50"
            onClick={() => setOpen(true)}
            aria-label="Buka menu navigasi"
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            <Menu className="w-6 h-6" />
          </button>

        </div>
      </header>

      {/* ========================================================
          MOBILE BACKDROP
      ======================================================== */}

      <div
        className={`
          fixed inset-0 bg-black/50 backdrop-blur-sm z-50
          transition-opacity duration-300 md:hidden
          ${
            open
              ? 'opacity-100 visible'
              : 'opacity-0 invisible pointer-events-none'
          }
        `}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      {/* ========================================================
          MOBILE DRAWER
      ======================================================== */}

      <div
        id="mobile-navigation"
        className={`
          fixed top-0 right-0 h-full w-[280px]
          bg-white shadow-2xl z-50
          transform transition-transform duration-300 ease-out
          md:hidden overflow-y-auto
          ${
            open
              ? 'translate-x-0'
              : 'translate-x-full pointer-events-none'
          }
        `}
        aria-label="Navigasi mobile"
        aria-hidden={!open}
      >

        {/* DRAWER HEADER */}

        <div className="p-4 flex justify-between items-center border-b border-gray-100">

          <a
            href="/"
            className="text-lg font-semibold tracking-tight text-gray-800"
            onClick={closeMobileMenu}
          >
            Duduk <span className="font-bold text-blue-600">Manis</span>
          </a>

          <button
            type="button"
            onClick={closeMobileMenu}
            className="p-2 text-gray-500 hover:text-red-500 rounded-full hover:bg-gray-50 transition-colors"
            aria-label="Tutup menu navigasi"
          >
            <X className="w-6 h-6" />
          </button>

        </div>

        {/* MOBILE MENU LIST */}

        <div className="p-6 text-gray-800">

          <nav aria-label="Navigasi mobile utama">

            <ul className="space-y-2">

              {/* CARI LOKASI */}

              <li>
                <a
                  href="/find-location"
                  className="block py-3 font-medium hover:text-blue-600 border-b border-gray-50"
                  onClick={closeMobileMenu}
                >
                  Cari Lokasi
                </a>
              </li>

              {/* PROMO */}

              <li>
                <a
                  href="/promo"
                  className="block py-3 font-medium hover:text-blue-600 border-b border-gray-50"
                  onClick={closeMobileMenu}
                >
                  Promo
                </a>
              </li>

              {/* ACCORDION LAYANAN */}

              <li>

                <button
                  type="button"
                  onClick={() => setMobileLayananOpen(!mobileLayananOpen)}
                  className="w-full flex items-center justify-between py-3 font-medium hover:text-blue-600 border-b border-gray-50"
                  aria-expanded={mobileLayananOpen}
                  aria-controls="mobile-service-menu"
                >
                  Layanan

                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      mobileLayananOpen
                        ? 'rotate-180 text-blue-600'
                        : ''
                    }`}
                  />
                </button>

                {/* MOBILE SERVICE LINKS */}

                <div
                  id="mobile-service-menu"
                  className={`
                    overflow-hidden transition-all duration-300 ease-in-out
                    ${
                      mobileLayananOpen
                        ? 'max-h-[1000px] opacity-100'
                        : 'max-h-0 opacity-0'
                    }
                  `}
                  aria-hidden={!mobileLayananOpen}
                >

                  <ul className="pl-4 py-2 space-y-3 text-sm text-gray-600 border-l-2 border-blue-100 ml-2 mt-2">

                    {MENU_LAYANAN.map((group) => (
                      <React.Fragment key={group.title}>

                        {/* CATEGORY */}

                        <li className="font-semibold text-blue-600 pt-2">
                          {group.title}
                        </li>

                        {/* CATEGORY LINKS */}

                        {group.items.map((item) => (
                          <li key={item.href}>

                            <a
                              href={item.href}
                              className="block hover:text-blue-600"
                              onClick={closeMobileMenu}
                            >
                              {item.label}
                            </a>

                          </li>
                        ))}

                      </React.Fragment>
                    ))}

                  </ul>

                </div>

              </li>

              {/* INTERNATIONAL BUSINESS */}

              <li>
                <a
                  href="/internasional-business"
                  className="block py-3 font-medium hover:text-blue-600 border-b border-gray-50"
                  onClick={closeMobileMenu}
                >
                  International Business Setup
                </a>
              </li>

              {/* TENTANG KAMI */}

              <li>
                <a
                  href="/tentang-kami"
                  className="block py-3 font-medium hover:text-blue-600 border-b border-gray-50"
                  onClick={closeMobileMenu}
                >
                  Tentang Kami
                </a>
              </li>

            </ul>

          </nav>

          {/* MOBILE CONTACT ACTION */}

          <div className="mt-8 space-y-4">

            <a
              href="/hubungi-kami"
              className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full text-sm font-medium transition-colors"
              onClick={closeMobileMenu}
            >
              Hubungi Kami
            </a>

          </div>

        </div>

      </div>
    </>
  );
}
