'use client';

import { useState } from 'react';
import { Menu, X, Phone, Clock, ChevronRight, Zap } from 'lucide-react';

const WA_URL =
  'https://api.whatsapp.com/send?phone=923029222607&text=Salam%20MotoZone%2C%20I%20want%20to%20inquire%20about%20a%20Suzuki%20Motorcycle%20or%20Service.';

const links = [
  { label: 'Lineup',   href: '#bikes'    },
  { label: 'Services', href: '#services' },
  { label: 'Why Us',   href: '#why-us'   },
  { label: 'Branches', href: '#branches' },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">

      {/* ── Ultra-thin info topbar ── */}
      <div className="bg-[#E30613] px-4 py-1.5">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <span className="flex items-center gap-1.5 text-[11px] font-medium text-white/90 tracking-wider uppercase">
            <Clock className="w-3 h-3 shrink-0" strokeWidth={1.75} />
            Open Daily &nbsp;·&nbsp; 10:00 AM – 9:30 PM
          </span>
          <a
            href="tel:+923029222607"
            className="flex items-center gap-1.5 text-[11px] font-medium text-white/90 tracking-wider uppercase hover:text-white transition-colors duration-300"
          >
            <Phone className="w-3 h-3 shrink-0" strokeWidth={1.75} />
            +92 302 922 2607
          </a>
        </div>
      </div>

      {/* ── Main bar ── */}
      <div className="bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 bg-[#E30613] rounded-md flex items-center justify-center shadow-md shadow-red-950/50 group-hover:shadow-red-800/60 transition-shadow duration-300">
              <Zap className="w-3.5 h-3.5 text-white" fill="white" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[17px] font-black tracking-tighter text-[#f4f4f5]">
                MOTO<span className="text-[#E30613]">ZONE</span>
              </span>
              <span className="text-[8.5px] uppercase tracking-[0.22em] text-zinc-600 font-medium mt-0.5">
                Pak Suzuki · 3S Dealer
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="relative text-[13px] font-medium text-zinc-400 hover:text-[#f4f4f5] transition-colors duration-300 group"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#E30613] group-hover:w-full transition-all duration-300" />
              </a>
            ))}

            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-[#E30613] hover:bg-red-700 text-white text-[13px] font-bold px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-md shadow-red-950/40 hover:shadow-red-900/60"
            >
              Inquire Now
              <ChevronRight className="w-3 h-3" />
            </a>
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/80 text-zinc-400 hover:border-[#E30613]/50 hover:text-[#E30613] transition-all duration-300"
          >
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* ── Mobile drawer — CSS max-height slide-in ── */}
      <div
        className={`md:hidden bg-[#09090b] border-b border-zinc-800 overflow-hidden transition-all duration-500 ease-in-out ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-3 pb-6 flex flex-col gap-0.5">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between text-[15px] font-medium text-zinc-300 hover:text-white py-3 px-3 rounded-xl hover:bg-zinc-900 transition-all duration-200 group"
            >
              {l.label}
              <ChevronRight className="w-3.5 h-3.5 text-zinc-700 group-hover:text-[#E30613] transition-colors duration-200" />
            </a>
          ))}
          <div className="h-px bg-zinc-800/80 my-3" />
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 bg-[#E30613] hover:bg-red-700 text-white text-[15px] font-bold py-3 px-4 rounded-xl transition-all duration-300"
          >
            Inquire Now via WhatsApp
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
