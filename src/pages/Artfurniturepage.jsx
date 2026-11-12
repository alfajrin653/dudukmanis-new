import React, { useState, useMemo, useEffect } from 'react';
import { Search, Armchair, Sofa, Utensils, Archive, Layers, Phone, MapPin, Mail, AtSign, X, ArrowRight, Users, Building2, Hotel, Home, Ruler, Hammer, Globe, Package } from 'lucide-react';

// ==========================================
// 1. DATA PRODUK
// ==========================================
// Pasang gambar di folder /public/images/art-furniture/<slug>.jpg
// atau ganti fungsi img() di bawah sesuai lokasi gambar di project-mu.
// Bagian ini bisa dipisah ke file data sendiri, misal: ../data/ArtFurniture.js
const img = (slug) => `/img/art-furniture/${slug}.jpg`;

const WA_NUMBER = '6282260100964';

const p = (id, title, category, materials, dimensions, customize, price = null) => ({
  id,
  title,
  category,
  materials,
  dimensions, // array of { label, value }
  customize, // array of string
  image: img(id),
  pricing: price ? { price, period: 'per set' } : null,
});

const D = (value, label = 'Ukuran') => ({ label, value });
const FIN = 'Teak Finishes';

export const furnitureProducts = [
  // ---------- CHAIR ----------
  p('cane-chair-rattan', 'Cane Chair Rattan', 'Chair', 'Teak Wood, Cushion and Rattan', [D('51 L x 59 D x 91 H cm')], [FIN, 'Size']),
  p('armchair-woven-1', 'Armchair Woven', 'Chair', 'Teak Wood, Cushion and Rope', [D('62 L x 62 D x 82 H cm')], [FIN, 'Size']),
  p('armchair-woven-2', 'Armchair Woven Slim', 'Chair', 'Teak Wood, Cushion and Rope', [D('55 L x 56 D x 75 H cm')], [FIN, 'Size']),
  p('armchair-rattan', 'Armchair Rattan', 'Chair', 'Teak Wood and Rattan', [D('57 L x 55 D x 78 H cm')], [FIN, 'Size']),
  p('chair-teak', 'Chair Teak', 'Chair', 'Teak Wood', [D('60 L x 55 D x 76 H cm')], [FIN, 'Size']),
  p('armchair-teak-1', 'Armchair Teak', 'Chair', 'Teak Wood', [D('56 L x 56 D x 81 H cm')], [FIN, 'Size']),
  p('teak-chair', 'Teak Chair', 'Chair', 'Teak Wood', [D('49 L x 56 D x 80 H cm')], [FIN, 'Size']),
  p('armchair-teak-2', 'Armchair Teak Sculpted', 'Chair', 'Teak Wood', [D('57 L x 54 D x 78 H cm')], [FIN, 'Size']),
  p('armchair-cushion-1', 'Armchair Cushion I', 'Chair', 'Teak Wood and Cushion', [D('58 L x 50 D x 81 H cm')], [FIN, 'Fabric']),
  p('armchair-cushion-2', 'Armchair Cushion II', 'Chair', 'Teak Wood and Cushion', [D('63 L x 63 D x 86 H cm')], [FIN, 'Fabric']),
  p('armchair-cushion-3', 'Armchair Cushion III', 'Chair', 'Teak Wood and Cushion', [D('60 L x 44 D x 68 H cm')], [FIN, 'Fabric']),
  p('armchair-cushion-4', 'Armchair Cushion IV', 'Chair', 'Teak Wood and Cushion', [D('58 L x 50 D x 84 H cm')], [FIN, 'Fabric']),

  // ---------- ARMCHAIR & LOUNGE ----------
  p('sofly-lounge-sofa', 'Sofly Lounge Sofa', 'Lounge', 'Teak Walnut and Boucle Cushion', [D('87 L x 80 D x 68 H cm')], [FIN, 'Cushion', 'Fabric']),
  p('bouncle-armchair', 'Bouncle Armchair', 'Lounge', 'Natural Teak and Boucle Cushion', [D('70 L x 80 D x 80 H cm')], [FIN, 'Cushion', 'Fabric']),
  p('o-lounge-chair', "O'Lounge Chair", 'Lounge', 'Dark Walnut Teak and Polyrope', [D('91 L x 81 D x 80 H cm')], [FIN, 'Woven Rope']),
  p('cask-lounge-set', 'Cask Lounge Set', 'Lounge', 'Natural Teak and Cushion', [D('220 L x 91 D x 77 H cm', '3 Seater'), D('180 L x 91 D x 77 H cm', '2 Seater'), D('91 L x 91 D x 77 H cm', '1 Seater')], [FIN, 'Cushion', 'Fabric', 'Pillow']),

  // ---------- SOFA ----------
  p('el-outdoor-sofa', 'El Outdoor Sofa', 'Sofa', 'Natural Teak and Outdoor Cushion', [D('330 W x 400 D x 73 H cm', 'Sofa Overall'), D('100 W x 100 D x 22 H cm', 'Coffee Table')], [FIN, 'Fabric Color']),
  p('fluted-sectional', 'Fluted Sectional', 'Sofa', 'Teak and Outdoor Cushion', [D('410 W x 180 D x 70 H cm', 'Sofa'), D('140 W x 70 D x 40 H cm', 'Table')], [FIN, 'Size', 'Fabric Color'], 'USD 1,310'),
  p('byon-l-sectional', 'Byon L Sectional', 'Sofa', 'Natural Teak & Mocha Cushion', [D('280 W x 262 D x 64 H cm')], [FIN, 'Size', 'Cushion', 'Fabric']),
  p('woven-sofa-set', 'Woven Sofa Set', 'Sofa', 'Teak, Woven Rope & Outdoor Cushion', [D('150 W x 78 D x 65 H cm', '2 Seater'), D('78 W x 78 D x 65 H cm', '1 Seater'), D('Diameter 80 x 40 H cm', 'Coffee Table')], [FIN, 'Size', 'Fabric Color', 'Rope Color']),
  p('lowa-sofa', 'Lowa Sofa', 'Sofa', 'Teak Wood and Cushion', [D('180 L x 97 D x 66 H cm')], [FIN, 'Cushion', 'Fabric']),
  p('gero-sofa', 'Gero Sofa', 'Sofa', 'Teak, Outdoor Cushion & Synthetic Wicker', [D('250 W x 95 D x 90 H cm')], [FIN, 'Size', 'Synthetic Wicker Color', 'Fabric Color']),
  p('nativa-sofa', 'Nativa Sofa', 'Sofa', 'Teak Wood and Boucle Cushion', [D('260 L x 107 D x 73 H cm')], [FIN, 'Cushion', 'Fabric']),
  p('terota-sofa', 'Terota Sofa', 'Sofa', 'Natural Teak, Cushion and Rattan', [D('274 L x 81 D x 61 H cm')], [FIN, 'Cushion', 'Fabric']),
  p('malioboro-sofa', 'Malioboro Sofa', 'Sofa', 'Walnut Teak & Rattan', [D('203 L x 86 D x 61 H cm')], [FIN, 'Cushion', 'Fabric']),

  // ---------- TABLE ----------
  p('tapered-table', 'Tapered Table', 'Table', 'Walnut Teak', [D('213 L x 91 D x 75 H cm')], [FIN, 'Size']),
  p('miky-table', 'Miky Table', 'Table', 'Chocolate Teak', [D('250 L x 100 D x 75 H cm')], [FIN, 'Size']),
  p('sulivian-table', 'Sulivian Table', 'Table', 'Charcoal Teak', [D('200 L x 100 D x 80 H cm')], [FIN, 'Size']),
  p('met-console', 'Met Console', 'Table', 'Chocolate Teak', [D('274 L x 51 D x 79 H cm')], [FIN, 'Size']),
  p('heim-console', 'Heim Console', 'Table', 'Teak', [D('150 L x 35 D x 80 H cm')], [FIN, 'Size']),

  // ---------- DINING SET ----------
  p('outdoor-dining-set-200', 'Outdoor Dining Set (Bench)', 'Dining Set', 'Teak and Outdoor Cushion', [D('200 L x 100 D x 75 H cm', 'Table'), D('53 L x 55 D x 83 H cm', 'Chair'), D('130 L x 38 D x 45 H cm', 'Bench')], [FIN, 'Size', 'Fabric Color']),
  p('rectangle-pedestal', 'Rectangle Pedestal', 'Dining Set', 'Teak and Rattan', [D('160 L x 70 D x 75 H cm', 'Table'), D('53 L x 55 D x 83 H cm', 'Chair')], [FIN, 'Size']),
  p('double-pedestal-salur', 'Double Pedestal Salur', 'Dining Set', 'Solid Teak & Cushion', [D('180 L x 80 D x 75 H cm', 'Table'), D('53 L x 60 D x 80 H cm', 'Chair')], [FIN, 'Size', 'Fabric Color']),
  p('barabere-dining-set', 'Barabere Dining Set', 'Dining Set', 'Teak & Fabric', [D('230 W x 110 D x 76 H cm', 'Table'), D('63 W x 71 D x 109 H cm', 'Arm Chair'), D('55 W x 71 D x 104 H cm', 'Side Chair')], [FIN, 'Size', 'Fabric Color']),
  p('outdoor-dining-set-parasol', 'Outdoor Dining Set (Parasol)', 'Dining Set', 'Teak, Fabric Parasol & Aluminum', [D('230 W x 100 D x 75 H cm', 'Table'), D('57 W x 55 D x 83 H cm', 'Chair')], [FIN, 'Size', 'Fabric Parasol Color']),
  p('outdoor-dining-set-300', 'Outdoor Dining Set (Large)', 'Dining Set', 'Teak & Outdoor Cushion', [D('300 W x 90 D x 75 H cm', 'Table'), D('50 L x 55 D x 80 H cm', 'Chair')], [FIN, 'Size', 'Fabric Color']),

  // ---------- CABINET & BENCH ----------
  p('storage-cabinet', 'Storage Cabinet', 'Cabinet', 'Black Walnut Teak', [D('104 L x 48 D x 109 H cm')], [FIN, 'Size']),
  p('kira-buffet', 'Kira Buffet', 'Cabinet', 'Walnut Teak', [D('240 L x 53 D x 80 H cm')], [FIN, 'Size']),
  p('wardrobe-rattan', 'Wardrobe Rattan', 'Cabinet', 'Chocolate Teak & Rattan', [D('118 L x 58 D x 210 H cm')], [FIN, 'Size', 'Rattan']),
  p('wardrobe', 'Wardrobe', 'Cabinet', 'Teak Wood', [D('140 L x 50 D x 140 H cm')], [FIN, 'Size', 'Rattan']),
  p('housen-bench', 'Housen Bench', 'Bench', 'Walnut Teak', [D('182 L x 45 D x 40 H cm')], [FIN, 'Size']),
];

const categoryIcons = {
  Chair: Armchair,
  Lounge: Armchair,
  Sofa: Sofa,
  Table: Layers,
  'Dining Set': Utensils,
  Cabinet: Archive,
  Bench: Layers,
};

const categories = ['Semua', 'Chair', 'Lounge', 'Sofa', 'Table', 'Dining Set', 'Cabinet', 'Bench'];

// Services dari client
const services = [
  { title: 'Interior designers & architects', icon: Users },
  { title: 'Furniture company & showrooms', icon: Building2 },
  { title: 'Hospitality & commercial projects', icon: Hotel },
  { title: 'Homeowners looking for unique pieces', icon: Home },
];

// Layanan produksi
const offers = [
  { title: 'Custom Sizes & Finishes', desc: 'Berbagai pilihan finishing teak dengan ukuran fleksibel sesuai kebutuhan proyek Anda.', icon: Ruler },
  { title: 'Teak Grade Request', desc: 'Tersedia permintaan grade kayu jati A, B, dan C sesuai spesifikasi dan lingkup proyek.', icon: Hammer },
  { title: 'ODM / OEM Services', desc: 'Mendukung proyek Original Design Manufacturer (ODM) dan Original Equipment Manufacturer (OEM) dengan brand Anda.', icon: Globe },
  { title: 'Export Minimum Order', desc: 'Order kecil via LCL untuk trial/sampel. Order besar minimal 1x20 HC container.', icon: Package },
];

const waLink = (text) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

export default function ArtFurniturePage() {
  // ==========================================
  // 2. STATE FILTER
  // ==========================================
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [selected, setSelected] = useState(null);

  // ==========================================
  // 3. LOGIKA FILTERING
  // ==========================================
  const filteredData = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return furnitureProducts.filter((item) => {
      const matchSearch = item.title.toLowerCase().includes(q) || item.materials.toLowerCase().includes(q);
      const matchCategory = activeCategory === 'Semua' || item.category === activeCategory;
      return matchSearch && matchCategory;
    });
  }, [searchQuery, activeCategory]);

  // Kunci scroll saat modal terbuka + tutup dengan ESC
  useEffect(() => {
    if (!selected) return;
    const onKey = (e) => e.key === 'Escape' && setSelected(null);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [selected]);

  const hideBrokenImg = (e) => {
    e.currentTarget.style.visibility = 'hidden';
  };

  return (
    <div className='min-h-screen bg-slate-50 pt-24 pb-16'>
      {/* --- HEADER & SEARCH SECTION --- */}
      <section className='px-4 max-w-7xl mx-auto mb-12 text-center'>
        <span className='inline-block bg-blue-100 text-blue-700 text-sm font-bold px-4 py-1 rounded-full mb-4'>Custom Furniture Production</span>
        <h1 className='text-4xl md:text-5xl font-bold text-slate-900 mb-6'>Art Furniture Production</h1>
        <p className='text-lg text-slate-600 max-w-2xl mx-auto mb-10'>
          Furniture kayu jati berkualitas dari Jepara, Indonesia. Perpaduan keahlian pengrajin dan visi Anda, mulai dari kursi, sofa, meja makan, hingga kabinet custom untuk rumah, kantor, dan proyek hospitality.
        </p>

        <div className='max-w-3xl mx-auto relative flex items-center'>
          <Search className='absolute left-4 w-6 h-6 text-slate-400' />
          <input
            type='text'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder='Cari produk atau material... (Contoh: Rattan)'
            className='w-full pl-14 pr-4 py-4 rounded-2xl text-lg text-slate-700 shadow-md border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all'
          />
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section className='px-4 max-w-7xl mx-auto mb-12'>
        <div className='text-center mb-8'>
          <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-2'>Siapa yang Kami Layani</h2>
          <p className='text-slate-500'>Kami fokus pada furniture custom yang memadukan craftsmanship dengan visi klien.</p>
        </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          {services.map(({ title, icon: Icon }) => (
            <div key={title} className='bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex items-center gap-4'>
              <div className='w-12 h-12 shrink-0 bg-slate-50 text-blue-600 rounded-xl flex items-center justify-center'>
                <Icon className='w-5 h-5' />
              </div>
              <span className='font-bold text-slate-900'>{title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* --- WHAT WE OFFER SECTION --- */}
      <section className='px-4 max-w-7xl mx-auto mb-12'>
        <div className='bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200'>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Layanan Kami</h2>
          <div className='grid md:grid-cols-2 gap-6'>
            {offers.map(({ title, desc, icon: Icon }) => (
              <div key={title} className='flex gap-4'>
                <div className='w-12 h-12 shrink-0 bg-slate-50 text-blue-600 rounded-xl flex items-center justify-center'>
                  <Icon className='w-5 h-5' />
                </div>
                <div>
                  <h3 className='font-bold text-slate-900 mb-1'>{title}</h3>
                  <p className='text-sm text-slate-500'>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FILTER SECTION --- */}
      <section className='px-4 max-w-7xl mx-auto mb-10'>
        <div className='bg-white p-4 rounded-2xl shadow-sm border border-slate-200'>
          <div className='flex flex-wrap gap-2 items-center'>
            <span className='text-sm font-semibold text-slate-500 uppercase tracking-wider mr-2 w-full md:w-auto'>Kategori:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === cat ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* --- RESULTS GRID --- */}
      <section className='px-4 max-w-7xl mx-auto'>
        <div className='mb-6 text-slate-500 font-medium'>
          Menampilkan <span className='text-blue-600 font-bold'>{filteredData.length}</span> produk ditemukan
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredData.map((item) => {
            const Icon = categoryIcons[item.category] || Armchair;
            return (
              <div key={item.id} className='bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col'>
                <div className='h-56 w-full bg-slate-200 relative overflow-hidden'>
                  <img src={item.image} alt={item.title} onError={hideBrokenImg} className='w-full h-full object-contain p-4 bg-white group-hover:scale-105 transition-transform duration-500' />
                  <div className='absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-700'>{item.category}</div>
                </div>

                <div className='p-6 flex flex-col flex-grow'>
                  <div className='flex items-center gap-2 text-blue-600 text-sm font-bold mb-3'>
                    <Icon className='w-4 h-4' />
                    Teak Furniture
                  </div>

                  <h3 className='text-xl font-bold text-slate-900 mb-2'>{item.title}</h3>
                  <p className='text-slate-500 text-sm mb-6 flex-grow line-clamp-2'>{item.materials}</p>

                  <hr className='border-slate-100 mb-4' />

                  <div className='flex items-end justify-between mt-auto'>
                    <div>
                      <span className='text-xs text-slate-400 font-semibold uppercase tracking-wider block mb-1'>{item.pricing ? 'Mulai Dari' : 'Harga'}</span>
                      <span className='text-xl font-bold text-slate-900 block'>{item.pricing ? item.pricing.price : 'Hubungi Kami'}</span>
                      <span className='text-xs text-slate-500'>{item.pricing ? item.pricing.period : 'Custom sesuai kebutuhan'}</span>
                    </div>

                    <button
                      onClick={() => setSelected(item)}
                      aria-label={`Lihat detail ${item.title}`}
                      className='w-12 h-12 bg-slate-50 text-slate-900 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors'
                    >
                      <ArrowRight className='w-5 h-5 group-hover:-rotate-45 transition-transform' />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredData.length === 0 && (
          <div className='text-center py-24 bg-white rounded-2xl border border-slate-200 shadow-sm'>
            <Search className='w-12 h-12 text-slate-300 mx-auto mb-4' />
            <h3 className='text-xl font-bold text-slate-700 mb-2'>Produk Tidak Ditemukan</h3>
            <p className='text-slate-500'>Maaf, kami tidak menemukan produk yang sesuai dengan filter atau pencarian Anda. Coba gunakan kata kunci lain atau hapus filter.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('Semua');
              }}
              className='mt-6 px-6 py-2 bg-blue-100 text-blue-700 font-semibold rounded-full hover:bg-blue-200 transition'
            >
              Reset Semua Filter
            </button>
          </div>
        )}
      </section>

      {/* --- CONTACT SECTION --- */}
      <section className='px-4 max-w-7xl mx-auto mt-16'>
        <div className='bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 grid md:grid-cols-2 gap-8 items-center'>
          <div>
            <h2 className='text-2xl font-bold text-slate-900 mb-2'>Punya Desain Sendiri?</h2>
            <p className='text-slate-500 mb-6'>Diskusikan kebutuhan custom, sampel, atau pengiriman ekspor bersama tim kami.</p>
            <a
              href={waLink('Halo, saya tertarik dengan Art Furniture Production.')}
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition'
            >
              <Phone className='w-4 h-4' /> Hubungi via WhatsApp
            </a>
          </div>
          <ul className='space-y-4 text-sm text-slate-600'>
            <li className='flex gap-3'>
              <Phone className='w-5 h-5 text-blue-600 shrink-0' /> +62 822-6010-0964
            </li>
            <li className='flex gap-3'>
              <Mail className='w-5 h-5 text-blue-600 shrink-0' /> info@Dudukmanis.com
            </li>
           
          </ul>
        </div>
      </section>

      {/* --- DETAIL MODAL --- */}
      {selected && (
        <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm' onClick={() => setSelected(null)}>
          <div className='bg-white rounded-2xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative' onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelected(null)} aria-label='Tutup' className='absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-slate-700 hover:bg-slate-100 transition'>
              <X className='w-5 h-5' />
            </button>

            <div className='h-64 md:h-80 w-full bg-slate-200 overflow-hidden rounded-t-2xl'>
              <img src={selected.image} alt={selected.title} onError={hideBrokenImg} className='w-full h-full object-contain p-6 bg-white' />
            </div>

            <div className='p-6 md:p-8'>
              <div className='flex items-center gap-2 text-blue-600 text-sm font-bold mb-3'>{selected.category}</div>
              <h3 className='text-2xl font-bold text-slate-900 mb-6'>{selected.title}</h3>

              <div className='grid md:grid-cols-2 gap-6 mb-6'>
                <div>
                  <span className='text-xs text-slate-400 font-semibold uppercase tracking-wider block mb-2'>Dimensi</span>
                  <ul className='space-y-1 text-slate-700 text-sm'>
                    {selected.dimensions.map((d) => (
                      <li key={d.label}>
                        <span className='font-semibold'>{d.label}:</span> {d.value}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className='text-xs text-slate-400 font-semibold uppercase tracking-wider block mb-2'>Material</span>
                  <p className='text-slate-700 text-sm'>{selected.materials}</p>
                </div>
              </div>

              <div className='mb-8'>
                <span className='text-xs text-slate-400 font-semibold uppercase tracking-wider block mb-2'>Bisa Dikustomisasi</span>
                <div className='flex flex-wrap gap-2'>
                  {selected.customize.map((c) => (
                    <span key={c} className='px-3 py-1 rounded-full text-sm font-medium bg-slate-100 text-slate-600'>
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <hr className='border-slate-100 mb-6' />

              <div className='flex items-end justify-between gap-4 flex-wrap'>
                <div>
                  <span className='text-xs text-slate-400 font-semibold uppercase tracking-wider block mb-1'>{selected.pricing ? 'Mulai Dari' : 'Harga'}</span>
                  <span className='text-xl font-bold text-slate-900 block'>{selected.pricing ? selected.pricing.price : 'Hubungi Kami'}</span>
                </div>
                <a
                  href={waLink(`Halo, saya tertarik dengan produk ${selected.title}.`)}
                  target='_blank'
                  rel='noreferrer'
                  className='inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition'
                >
                  <Phone className='w-4 h-4' /> Tanya Produk Ini
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}