'use client';

import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const WA_URL =
  'https://api.whatsapp.com/send?phone=923029222607&text=Salam%20MotoZone%2C%20I%20want%20to%20inquire%20about%20a%20Suzuki%20Motorcycle%20or%20Service.';

const links = [
  { label: 'Bikes',    href: '#bikes'    },
  { label: 'Services', href: '#services' },
  { label: 'Why Us',   href: '#why-us'   },
  { label: 'Branches', href: '#branches' },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white border-b border-slate-100 sticky top-0 z-50 shadow-sm">
      {/* ── Topbar ── */}
      <div className="bg-red-600 text-white text-sm py-2 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <span className="flex items-center gap-1.5 font-medium">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
            Open Daily: 10:00 AM – 9:30 PM
          </span>
          <a
            href={`tel:+923029222607`}
            className="flex items-center gap-1.5 font-semibold hover:underline"
          >
            <Phone className="w-4 h-4" />
            +92 302 922 2607
          </a>
        </div>
      </div>

      {/* ── Main nav bar ── */}
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-none">
          <span className="text-2xl font-extrabold tracking-tight text-slate-900">
            Moto<span className="text-red-600">Zone</span>
          </span>
          <span className="text-xs text-slate-500 mt-0.5">Pak Suzuki Authorized 3S Dealer</span>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="hover:text-red-600 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-red-700 transition-colors"
          >
            Inquire Now
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 py-5 flex flex-col gap-1 shadow-lg">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-slate-700 hover:text-red-600 text-base font-medium py-2.5 px-3 rounded-lg hover:bg-red-50 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-3 bg-red-600 hover:bg-red-700 text-white text-base font-bold py-3 px-4 rounded-xl text-center transition-colors"
          >
            Inquire Now via WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
