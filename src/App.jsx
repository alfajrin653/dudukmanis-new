
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import { HelmetProvider } from 'react-helmet-async';
import SEO from './seo/Seo';

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Main Pages
import HomePages from './pages/HomePages';
import VirtualOfficePage from './pages/VirtualOfficePage';
import RoomMeetPages from './pages/RoomMeetPages';
import PodcastStudio from './pages/PodcastStudio';
import CoworkingSpace from './pages/CoworkingSpace';

// Business Services
import PembuatanPT from './pages/PendirianPT';
import PembuatanCv from './pages/PembuatanCv';
import PendirianFirmaPages from './pages/PendirianFirmaPages';
import CallCenterPages from './pages/CallCenterPages';
import PembuatanHaki from './pages/PendaftaranHaki';
import PajakDanAkuntansi from './pages/PajakDanAkutansi';

// International Services
import PendirianPma from './pages/PendiriPma';
import VisaBusinessPages from './pages/VisaBusinessPages';
import KitasInvestor from './pages/KitasInvestor';
import VisaTuris from './pages/VisaTuris';
import InternationalSetup from './pages/InternationalSetup';

// Other Pages
import HubungiKami from './pages/HubungiKami';
import TentangKami from './pages/TentangKami';
import FindLocation from './pages/FindLocation';
import PromoPages from './pages/PromoPages';
import ArtFurniture from './pages/Artfurniturepage';

// Detail Pages
import VirtualOfficeDetail from './pages/VirtualOffice/VirtualOfficeDetail';
import RoomMeetDetail from './pages/VirtualOffice/RoomMeetDetail';
import CoworkingDetails from './pages/VirtualOffice/CoworkingDetails';
import OrderPage from './pages/VirtualOffice/OrderPage';


// ============================================================
// 404 PAGE
// ============================================================

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center text-sm max-md:px-4 py-20">

      <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
        404 Not Found
      </h1>

      <div className="h-px w-80 rounded bg-gradient-to-r from-gray-400 to-gray-800 my-5 md:my-7"></div>

      <p className="md:text-xl text-gray-400 max-w-lg text-center">
        The page you are looking for does not exist or has been moved.
      </p>

      <Link
        to="/"
        className="group flex items-center gap-1 bg-white hover:bg-gray-200 px-7 py-2.5 text-gray-800 rounded-full mt-10 font-medium active:scale-95 transition-all"
      >
        Back to Home

        <svg
          className="group-hover:translate-x-0.5 transition"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.583 11h12.833m0 0L11 4.584M17.416 11 11 17.417"
            stroke="#1E1E1E"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>

    </div>
  );
}


// ============================================================
// MAIN APP
// ============================================================

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div>

          {/* NAVBAR */}
          <Navbar />

          {/* MAIN CONTENT */}
          <main className="pt-16">

            <Routes>

              {/* ================= HOME ================= */}

              <Route
                path="/"
                element={
                  <>
                    <SEO page="home" />
                    <HomePages />
                  </>
                }
              />


              {/* ================= VIRTUAL OFFICE ================= */}

              <Route path="/virtual-office">

                <Route
                  index
                  element={
                    <>
                      <SEO page="virtualOffice" />
                      <VirtualOfficePage />
                    </>
                  }
                />

                <Route
                  path="detail/:id"
                  element={
                    <>
                      <SEO page="virtualOfficeDetail" />
                      <VirtualOfficeDetail />
                    </>
                  }
                />

              </Route>


              {/* ================= ROOM MEETING ================= */}

              <Route path="/Room-meet">

                <Route
                  index
                  element={
                    <>
                      <SEO page="roomMeet" />
                      <RoomMeetPages />
                    </>
                  }
                />

                <Route
                  path="detail/:id"
                  element={
                    <>
                      <SEO page="roomMeetDetail" />
                      <RoomMeetDetail />
                    </>
                  }
                />

              </Route>


              {/* ================= PODCAST STUDIO ================= */}

              <Route
                path="/Podcast-studio"
                element={
                  <>
                    <SEO page="podcastStudio" />
                    <PodcastStudio />
                  </>
                }
              />


              {/* ================= FIND LOCATION ================= */}

              <Route
                path="/find-location"
                element={
                  <>
                    <SEO page="findLocation" />
                    <FindLocation />
                  </>
                }
              />


              {/* ================= COWORKING SPACE ================= */}

              <Route path="/coworking-space">

                <Route
                  index
                  element={
                    <>
                      <SEO page="coworkingSpace" />
                      <CoworkingSpace />
                    </>
                  }
                />

                <Route
                  path="detail/:id"
                  element={
                    <>
                      <SEO page="coworkingDetail" />
                      <CoworkingDetails />
                    </>
                  }
                />

              </Route>


              {/* ================= ORDER ================= */}

              <Route
                path="/order-now"
                element={
                  <>
                    <SEO page="orderNow" noindex />
                    <OrderPage />
                  </>
                }
              />


              {/* ================= BUSINESS SERVICES ================= */}

              <Route
                path="/pendirian-pt"
                element={
                  <>
                    <SEO page="pendirianPT" />
                    <PembuatanPT />
                  </>
                }
              />

              <Route
                path="/pendirian-cv"
                element={
                  <>
                    <SEO page="pendirianCV" />
                    <PembuatanCv />
                  </>
                }
              />

              <Route
                path="/pendirian-firma"
                element={
                  <>
                    <SEO page="pendirianFirma" />
                    <PendirianFirmaPages />
                  </>
                }
              />

              <Route
                path="/pendaftaran-haki"
                element={
                  <>
                    <SEO page="haki" />
                    <PembuatanHaki />
                  </>
                }
              />

              <Route
                path="/call-answering"
                element={
                  <>
                    <SEO page="callAnswering" />
                    <CallCenterPages />
                  </>
                }
              />

              <Route
                path="/pajak-akuntansi"
                element={
                  <>
                    <SEO page="pajakAkuntansi" />
                    <PajakDanAkuntansi />
                  </>
                }
              />


              {/* ================= INTERNATIONAL SERVICES ================= */}

              <Route
                path="/pendirian-pma"
                element={
                  <>
                    <SEO page="pendirianPMA" />
                    <PendirianPma />
                  </>
                }
              />

              <Route
                path="/internasional-business"
                element={
                  <>
                    <SEO page="internationalSetup" />
                    <InternationalSetup />
                  </>
                }
              />

              <Route
                path="/visa-bisnis"
                element={
                  <>
                    <SEO page="visaBisnis" />
                    <VisaBusinessPages />
                  </>
                }
              />

              <Route
                path="/kitas-investor"
                element={
                  <>
                    <SEO page="kitasInvestor" />
                    <KitasInvestor />
                  </>
                }
              />

              <Route
                path="/visa-turis"
                element={
                  <>
                    <SEO page="visaTuris" />
                    <VisaTuris />
                  </>
                }
              />


              {/* ================= COMPANY PAGES ================= */}

              <Route
                path="/hubungi-kami"
                element={
                  <>
                    <SEO page="hubungiKami" />
                    <HubungiKami />
                  </>
                }
              />

              <Route
                path="/tentang-kami"
                element={
                  <>
                    <SEO page="tentangKami" />
                    <TentangKami />
                  </>
                }
              />

              <Route
                path="/promo"
                element={
                  <>
                    <SEO page="promo" />
                    <PromoPages />
                  </>
                }
              />

              <Route
                path="/art-furniture"
                element={
                  <>
                    <SEO page="artFurniture" />
                    <ArtFurniture />
                  </>
                }
              />


              {/* ================= 404 ================= */}

              <Route
                path="*"
                element={<NotFoundPage />}
              />

            </Routes>

          </main>

          {/* FOOTER */}
          <Footer />

        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}
