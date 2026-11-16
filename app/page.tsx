
"use client";

import { useState } from "react";
import { salon } from "../data/salon";

const services = salon.services;

const photos = [
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=900",
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=900",
  "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=900",
];

const navigation = [
  { name: "Usluge", href: "#usluge" },
  { name: "Cenovnik", href: "#cenovnik" },
  { name: "Galerija", href: "#galerija" },
  { name: "Kontakt", href: "#kontakt" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Ako nema broja telefona, dugme vodi na kontakt sekciju.
  const phoneNumber = salon.phone.replace(/[^\d+]/g, "");
  const bookingLink = phoneNumber
    ? `tel:${phoneNumber}`
    : "#kontakt";

  return (
    <main className="min-h-screen bg-[#101010] text-white">

      {/* NAVIGACIJA */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#101010]/95 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">

          <a
            href="#pocetna"
            className="text-xl font-black tracking-widest text-[#d4af37]"
          >
            {salon.shortName}
          </a>

          <nav
            aria-label="Glavna navigacija"
            className="hidden items-center gap-8 text-sm md:flex"
          >
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="transition hover:text-[#d4af37]"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <a
            href={bookingLink}
            className="hidden rounded bg-[#d4af37] px-5 py-3 font-bold text-black transition hover:bg-[#e9c65c] md:block"
          >
            ZAKAŽI TERMIN
          </a>

          <button
            type="button"
            className="rounded p-2 text-2xl md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Zatvori meni" : "Otvori meni"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobilna navigacija"
            className="flex flex-col gap-5 border-t border-white/10 bg-[#181818] px-6 py-5 md:hidden"
          >
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#d4af37]"
              >
                {item.name}
              </a>
            ))}

            <a
              href={bookingLink}
              onClick={() => setMenuOpen(false)}
              className="rounded bg-[#d4af37] px-5 py-3 text-center font-bold text-black"
            >
              ZAKAŽI TERMIN
            </a>
          </nav>
        )}
      </header>

      {/* POCETNA SEKCIJA */}
      <section
        id="pocetna"
        className="relative flex min-h-[85vh] scroll-mt-20 items-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0,0,0,.94), rgba(0,0,0,.35)), url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1600')",
        }}
      >
        <div className="relative mx-auto w-full max-w-6xl animate-fade-up px-6 py-24">

          <p className="mb-5 text-sm tracking-[.3em] text-[#d4af37]">
            PREMIUM BARBER EXPERIENCE
          </p>

          <h1 className="max-w-3xl text-5xl font-black leading-tight md:text-7xl">
            {salon.tagline}
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-gray-300">
            {salon.description}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={bookingLink}
              className="rounded bg-[#d4af37] px-8 py-4 font-bold text-black transition hover:bg-[#e9c65c]"
            >
              ZAKAŽI TERMIN
            </a>

            <a
              href="#usluge"
              className="rounded border border-white/40 px-8 py-4 font-bold transition hover:border-[#d4af37] hover:text-[#d4af37]"
            >
              POGLEDAJ USLUGE
            </a>
          </div>
        </div>
      </section>

      {/* USLUGE */}
      <section
        id="usluge"
        className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24"
      >
        <div className="mb-14 text-center">
          <p className="text-sm tracking-widest text-[#d4af37]">
            ŠTA NUDIMO
          </p>
          <h2 className="mt-3 text-4xl font-black md:text-5xl">
            NAŠE USLUGE
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={service.name}
              className="rounded-lg border border-white/10 bg-[#1b1b1b] p-7 transition hover:border-[#d4af37]"
            >
              <span className="text-3xl text-[#d4af37]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-6 text-xl font-bold">
                {service.name}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CENOVNIK */}
      <section
        id="cenovnik"
        className="scroll-mt-20 bg-[#191919] px-6 py-24"
      >
        <div className="mx-auto max-w-4xl">

          <div className="mb-12 text-center">
            <p className="text-sm tracking-widest text-[#d4af37]">
              TRANSPARENTNE CENE
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              CENOVNIK
            </h2>
          </div>

          <div className="space-y-4">
            {services.map((service) => (
              <div
                key={service.name}
                className="flex items-center justify-between gap-4 border-b border-white/15 py-5"
              >
                <span className="font-semibold">
                  {service.name}
                </span>

                <span className="whitespace-nowrap font-bold text-[#d4af37]">
                  {service.price}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-gray-500">
            Prikazane cene su demonstracione.
          </p>
        </div>
      </section>

      {/* GALERIJA */}
      <section
        id="galerija"
        className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24"
      >
        <div className="mb-12 text-center">
          <p className="text-sm tracking-widest text-[#d4af37]">
            INSPIRACIJA
          </p>

          <h2 className="mt-3 text-4xl font-black md:text-5xl">
            GALERIJA
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {photos.map((photo, index) => (
            <div
              key={photo}
              className="aspect-[4/5] overflow-hidden rounded-lg bg-[#242424]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo}
                alt={`Ilustrativna fotografija frizerskog salona ${index + 1}`}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-gray-500">
          Fotografije su ilustrativne i služe za prikaz dizajna.
        </p>
      </section>

      {/* KONTAKT */}
      <section
        id="kontakt"
        className="scroll-mt-20 bg-[#191919] px-6 py-24"
      >
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">

          <div>
            <p className="text-sm tracking-widest text-[#d4af37]">
              PRONAĐI NAS
            </p>

            <h2 className="mb-8 mt-3 text-4xl font-black">
              KONTAKT
            </h2>

            <div className="space-y-5 text-gray-300">
              <p>📍 {salon.address} — demo lokacija</p>

              <p>
                📞{" "}
                {salon.phone ||
                  "Telefon se dodaje za stvarni salon"}
              </p>

              <p>
                🕒 {salon.workingHours} — primer radnog vremena
              </p>
            </div>

            {phoneNumber ? (
              <a
                href={bookingLink}
                className="mt-8 inline-block rounded bg-[#d4af37] px-7 py-4 font-bold text-black transition hover:bg-[#e9c65c]"
              >
                POZOVI I ZAKAŽI
              </a>
            ) : (
              <div className="mt-8 inline-block rounded border border-[#d4af37]/40 px-7 py-4 text-sm text-[#d4af37]">
                DEMONSTRACIONI SAJT — KONTAKT NIJE AKTIVAN
              </div>
            )}
          </div>

          <div className="flex min-h-72 items-center justify-center rounded-lg border border-white/10 bg-[#292929] p-8 text-center text-gray-400">
            Google mapa se dodaje kada klijent dostavi
            stvarnu adresu salona.
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#101010] px-6 py-8 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} {salon.name}
        </p>

        <p className="mt-3 text-xs text-gray-500">
          © {new Date().getFullYear()} Developed by{" "}
          <span className="font-semibold text-[#d4af37]">
            ivkovic.web
          </span>
          . All rights reserved.
        </p>

        <p className="mt-2 text-xs text-gray-600">
          Demonstracioni projekat — nije stvarni frizerski salon.
        </p>
      </footer>
    </main>
  );
}

