import Image from "next/image";
import {
  MapPin,
  Clock,
  Shield,
  Wrench,
  CheckCircle,
  ChevronRight,
  Award,
  Zap,
  Settings,
  MessageCircle,
  Phone,
  ArrowUpRight,
  Flame,
} from "lucide-react";
import NavBar       from "@/components/NavBar";
import Typewriter   from "@/components/Typewriter";
import ScrollReveal from "@/components/ScrollReveal";

// ─── Constants ────────────────────────────────────────────────────────────────

const WA_BASE = "https://api.whatsapp.com/send?phone=923029222607&text=";
const WA_GENERAL = `${WA_BASE}${encodeURIComponent(
  "Salam MotoZone, I want to inquire about a Suzuki Motorcycle or Service."
)}`;

// ─── Data ─────────────────────────────────────────────────────────────────────

const bikes = [
  {
    name: "Suzuki GD 110S",
    price: "Rs. 369,900",
    cc: "110cc",
    category: "Daily Commuter",
    premium: false,
    tag: "Best Value",
    specs: ["Euro II Engine", "4-Stroke OHC", "Electric Start", "Fuel Efficient"],
    desc: "The indestructible daily workhorse — Euro II certified, supremely fuel-efficient, and built to outlast the urban grind.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    wa: `${WA_BASE}${encodeURIComponent(
      "Salam MotoZone, I'm interested in the Suzuki GD 110S (Rs. 369,900). Please share availability and details."
    )}`,
  },
  {
    name: "Suzuki GS 150",
    price: "Rs. 399,900",
    cc: "150cc",
    category: "Heavy-Duty",
    premium: false,
    tag: "Top Seller",
    specs: ["150cc 4-Stroke", "OHC Engine", "Heavy-Duty Build", "Alloy Wheels"],
    desc: "Raw 150cc authority — engineered for Pakistan's roads, from tight city lanes to open highway stretches.",
    image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=800&q=80",
    wa: `${WA_BASE}${encodeURIComponent(
      "Salam MotoZone, I'm interested in the Suzuki GS 150 (Rs. 399,900). Please share availability and details."
    )}`,
  },
  {
    name: "Suzuki GSX 125",
    price: "Rs. 504,900",
    cc: "125cc",
    category: "Sports Aero",
    premium: true,
    tag: "Premium",
    specs: ["Full Aero Fairing", "Front Disc Brake", "Digital Console", "LED Lighting"],
    desc: "Full aerodynamic sports design fused with urban agility — disc brakes, digital dash, and aggressive LED presence.",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80",
    wa: `${WA_BASE}${encodeURIComponent(
      "Salam MotoZone, I'm interested in the Suzuki GSX 125 (Rs. 504,900). Please share availability and details."
    )}`,
  },
  {
    name: "Suzuki GR 150",
    price: "Rs. 552,900",
    cc: "150cc",
    category: "Sports Touring",
    premium: true,
    tag: "Legend",
    specs: ["Sports Touring DNA", "Digital Speedo", "Commanding Stance", "Disc Brake"],
    desc: "Pakistan's most iconic sports tourer — commanding presence, digital precision, and a 150cc engine that craves open roads.",
    image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&q=80",
    wa: `${WA_BASE}${encodeURIComponent(
      "Salam MotoZone, I'm interested in the Suzuki GR 150 (Rs. 552,900). Please share availability and details."
    )}`,
  },
];

const branches = [
  {
    name: "Shah Latif Town",
    subtitle: "Sector 16-A, Bhens Colony Road",
    address: "R-455, Sector 16-A, Bhens Colony Road, Bin Qasim, Karachi",
    phones: ["+92 302 922 2607", "+92 213 410 2484"],
    mapsUrl:
      "https://maps.google.com/?q=R-455,+Shah+Latif+Town,+Sector+16-A,+Bhens+Colony+Road,+Bin+Qasim+Karachi",
  },
  {
    name: "PIB Colony",
    subtitle: "Main Martin Road",
    address: "Main Martin Road, PIB Colony, Karachi",
    phones: ["+92 321 216 4020"],
    mapsUrl: "https://goo.gl/maps/24JQFtCCC5jRdh93A",
  },
];

const services = [
  {
    icon: <Settings className="w-5 h-5 text-[#E30613]" />,
    title: "Sales",
    num: "01",
    desc: "Authorized Suzuki vehicle sales with official pricing, transparent financing, and end-to-end documentation support.",
  },
  {
    icon: <Wrench className="w-5 h-5 text-[#E30613]" />,
    title: "Service",
    num: "02",
    desc: "Factory-certified mechanics deliver precision mechanical and electrical repairs, backed by a 10–15 day warranty.",
  },
  {
    icon: <Shield className="w-5 h-5 text-[#E30613]" />,
    title: "Spare Parts",
    num: "03",
    desc: "100% Genuine Suzuki OEM parts sourced exclusively from Pak Suzuki — zero counterfeits, absolute authenticity.",
  },
];

const stats = [
  { value: "3S",  label: "Certified Dealer",  sub: "Sales · Service · Spares"   },
  { value: "OEM", label: "Genuine Parts",      sub: "Factory-direct, every time" },
  { value: "2",   label: "Showrooms",          sub: "Shah Latif & PIB Colony"    },
  { value: "15d", label: "Service Warranty",   sub: "On all mechanical work"     },
];

const trustStrip = [
  { icon: <Award className="w-3.5 h-3.5" />,       text: "Pak Suzuki Certified 3S" },
  { icon: <CheckCircle className="w-3.5 h-3.5" />, text: "100% Genuine OEM Parts"  },
  { icon: <Zap className="w-3.5 h-3.5" />,         text: "Electrical & Mechanical" },
  { icon: <Flame className="w-3.5 h-3.5" />,       text: "10–15 Day Warranty"      },
];

// Stagger delays for the 4 bike cards
const CARD_DELAYS = ["delay-0", "delay-100", "delay-200", "delay-300"] as const;

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] overflow-x-hidden">
      <NavBar />

      {/* ══════════════════════════════════════════════════════
          § HERO
      ══════════════════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#09090b] pt-28">

        {/* Decorative depth: subtle grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(227,6,19,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(227,6,19,0.08) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Red radial ambient — top left */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-48 -left-48 w-[900px] h-[900px]"
          style={{
            background: "radial-gradient(ellipse at center, rgba(227,6,19,0.11) 0%, transparent 62%)",
          }}
        />

        {/* Faint bottom-right accent glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 right-0 w-[500px] h-[500px]"
          style={{
            background: "radial-gradient(ellipse at center, rgba(227,6,19,0.06) 0%, transparent 68%)",
          }}
        />

        {/* Glowing horizontal red rule (mid-page depth cue) */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-0 right-0 h-px opacity-[0.15]"
          style={{
            background:
              "linear-gradient(to right, transparent 0%, #E30613 25%, #E30613 75%, transparent 100%)",
          }}
        />

        {/* Left edge vertical accent */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-[2px]"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, #E30613 28%, #E30613 72%, transparent 100%)",
          }}
        />

        {/* ── Content ── */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-24">
          <div className="grid md:grid-cols-2 gap-14 items-center">

            {/* Left — refined editorial headline */}
            <div>
              {/* Authority chip */}
              <div className="inline-flex items-center gap-1.5 border border-[#E30613]/30 bg-[#E30613]/8 text-[#E30613] text-[10px] font-semibold uppercase tracking-[0.22em] px-3.5 py-1.5 rounded-full mb-8">
                <Zap className="w-2.5 h-2.5" fill="currentColor" />
                Pak Suzuki · Authorized 3S Dealership
              </div>

              {/* Main headline — refined weight, not poster-heavy */}
              <h1 className="mb-2 leading-[1.05]">
                <span className="block text-3xl sm:text-4xl font-light tracking-wide text-zinc-400 mb-1">
                  Karachi&apos;s Finest
                </span>
                <span
                  className="block text-5xl sm:text-6xl font-semibold tracking-tight text-[#f4f4f5]"
                >
                  Suzuki Partner.
                </span>
              </h1>

              {/* Typewriter subtitle */}
              <div className="flex items-center gap-0 mb-8 min-h-[2rem]">
                <span className="text-base sm:text-lg font-light text-zinc-500 mr-1.5">—</span>
                <span className="text-base sm:text-lg font-light tracking-wide">
                  <Typewriter />
                </span>
              </div>

              <p className="text-zinc-500 text-base leading-relaxed mb-10 max-w-md font-light">
                Sales, Service &amp; Spare Parts under one certified roof. Backed by Pak Suzuki
                authority, 100% genuine OEM parts, and expert-certified mechanics you can hold to
                a warranty.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#bikes"
                  className="group flex items-center gap-2 bg-[#E30613] hover:bg-red-700 text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105 shadow-xl shadow-red-950/50 hover:shadow-red-900/70"
                >
                  View Lineup
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                </a>
                <a
                  href={WA_GENERAL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-zinc-700 hover:border-[#E30613]/70 text-zinc-400 hover:text-[#f4f4f5] hover:bg-[#E30613]/8 font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Right — glassmorphism stat cards */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="group relative bg-zinc-900/60 backdrop-blur-md border border-zinc-800 border-t-2 border-t-[#E30613] rounded-2xl px-5 py-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-950/40 hover:border-zinc-700 cursor-default overflow-hidden"
                >
                  {/* hover inner glow */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        "radial-gradient(ellipse at top left, rgba(227,6,19,0.1) 0%, transparent 70%)",
                    }}
                  />
                  <p className="relative text-4xl font-black tracking-tighter text-[#E30613] mb-1">
                    {s.value}
                  </p>
                  <p className="relative text-sm font-semibold text-[#f4f4f5] leading-snug">{s.label}</p>
                  <p className="relative text-[11px] text-zinc-500 mt-0.5 leading-snug font-light">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust strip ── */}
      <div className="bg-[#E30613] py-3 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-7">
          {trustStrip.map((t) => (
            <div
              key={t.text}
              className="flex items-center gap-1.5 text-white text-[11px] font-semibold tracking-[0.12em] uppercase"
            >
              {t.icon}
              {t.text}
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          § BIKE INVENTORY — scroll-reveal + stagger
      ══════════════════════════════════════════════════════ */}
      <section id="bikes" className="py-28 px-4 bg-[#09090b]">
        <div className="max-w-6xl mx-auto">

          {/* Section header — own reveal */}
          <ScrollReveal className="mb-14">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <span className="inline-block text-[10px] font-bold uppercase tracking-[0.22em] text-[#E30613] mb-3">
                  Authorized Suzuki Inventory · 2026
                </span>
                <h2 className="font-semibold tracking-tight text-5xl sm:text-6xl text-[#f4f4f5] leading-tight">
                  The Lineup.
                </h2>
              </div>
              <p className="text-zinc-500 text-sm max-w-xs leading-relaxed font-light">
                Every model is genuine, warranty-backed, and available at both showrooms today.
              </p>
            </div>
          </ScrollReveal>

          {/* Cards grid — each card gets its own reveal + stagger delay */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bikes.map((bike, i) => (
              <ScrollReveal key={bike.name} className={CARD_DELAYS[i]}>
                <div className="group relative bg-zinc-900/50 border border-zinc-800 hover:border-[#E30613]/40 rounded-3xl overflow-hidden flex flex-col transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-950/50 h-full">

                  {/* Floating glow on hover */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
                    style={{
                      background:
                        "radial-gradient(ellipse at top, rgba(227,6,19,0.09) 0%, transparent 65%)",
                    }}
                  />

                  {/* Image */}
                  <div className="relative h-52 overflow-hidden bg-zinc-950">
                    <Image
                      src={bike.image}
                      alt={bike.name}
                      fill
                      unoptimized
                      className="object-cover object-center opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

                    {/* Category chip */}
                    <span className="absolute top-3 left-3 bg-zinc-900/80 backdrop-blur-sm text-zinc-300 text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full border border-zinc-700/80">
                      {bike.category}
                    </span>

                    {/* Tag chip */}
                    <span
                      className={`absolute top-3 right-3 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${
                        bike.premium
                          ? "bg-[#E30613] text-white"
                          : "bg-zinc-800 text-zinc-300 border border-zinc-700"
                      }`}
                    >
                      {bike.tag}
                    </span>

                    {/* CC */}
                    <span className="absolute bottom-3 left-3 bg-[#E30613] text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                      {bike.cc}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="relative z-10 p-5 flex flex-col flex-1">
                    <h3 className="font-semibold tracking-tight text-[#f4f4f5] text-base mb-2 leading-snug">
                      {bike.name}
                    </h3>

                    {/* Price pill */}
                    <span className="self-start bg-[#E30613] text-white font-bold text-xs px-3 py-1.5 rounded-full mb-4 shadow-lg shadow-red-950/50 tracking-wide">
                      {bike.price}
                    </span>

                    {/* Specs */}
                    <ul className="space-y-1.5 mb-4">
                      {bike.specs.map((sp) => (
                        <li key={sp} className="flex items-center gap-2 text-zinc-500 text-xs font-light">
                          <CheckCircle className="w-3.5 h-3.5 text-[#E30613] shrink-0" />
                          {sp}
                        </li>
                      ))}
                    </ul>

                    <p className="text-zinc-600 text-xs leading-relaxed flex-1 mb-5 font-light">{bike.desc}</p>

                    {/* WhatsApp CTA */}
                    <a
                      href={bike.wa}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex items-center justify-center gap-2 border border-zinc-700 hover:border-[#E30613] hover:bg-[#E30613] text-zinc-400 hover:text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all duration-300"
                    >
                      <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                      Inquire via WhatsApp
                      <ArrowUpRight className="w-3 h-3 opacity-40 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all duration-300" />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          § SERVICES — scroll-reveal
      ══════════════════════════════════════════════════════ */}
      <section id="services" className="py-28 px-4 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.22em] text-[#E30613] mb-3">
              What We Do
            </span>
            <h2 className="font-semibold tracking-tight text-5xl sm:text-6xl text-[#f4f4f5]">
              One Roof.
            </h2>
            <h2 className="font-light tracking-tight text-5xl sm:text-6xl text-zinc-600">
              Three Specialties.
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} className={CARD_DELAYS[i]}>
                <div className="group relative bg-zinc-900/50 border border-zinc-800 hover:border-[#E30613]/40 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-950/40 overflow-hidden h-full">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "radial-gradient(ellipse at top left, rgba(227,6,19,0.08) 0%, transparent 65%)",
                    }}
                  />
                  <div className="relative">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#E30613]/50 block mb-4">
                      {s.num}
                    </span>
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#E30613]/10 border border-[#E30613]/20 group-hover:bg-[#E30613]/20 transition-colors duration-300 mb-5">
                      {s.icon}
                    </div>
                    <h3 className="font-semibold tracking-tight text-xl text-[#f4f4f5] mb-3">{s.title}</h3>
                    <p className="text-zinc-500 leading-relaxed text-sm font-light">{s.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          § WHY US
      ══════════════════════════════════════════════════════ */}
      <section id="why-us" className="py-28 px-4 bg-[#09090b] border-t border-zinc-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <ScrollReveal>
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.22em] text-[#E30613] mb-5">
              The MotoZone Standard
            </span>
            <h2 className="font-semibold tracking-tight text-4xl sm:text-5xl text-[#f4f4f5] leading-tight mb-6">
              Why Choose{" "}
              <span className="text-[#E30613]">MotoZone?</span>
            </h2>
            <p className="text-zinc-500 text-sm leading-relaxed mb-8 font-light">
              As an officially certified Pak Suzuki 3S dealer, every process is held to Pak
              Suzuki&apos;s exacting standards — no compromises on parts quality, mechanic
              certification, or service transparency.
            </p>
            <ul className="space-y-3.5">
              {[
                "Pak Suzuki authorized — not merely affiliated",
                "Factory-trained, certified technicians on every job",
                "In-house mechanical & electrical diagnostics",
                "10–15 day written warranty on all service work",
                "100% OEM spare parts — genuine, every single time",
                "Showroom open every day, 10 AM to 9:30 PM",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-zinc-300 text-sm font-light">
                  <CheckCircle className="w-4 h-4 text-[#E30613] mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal className="delay-150">
            <div className="relative bg-zinc-900/50 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl shadow-zinc-950/80">
              <div className="h-[2px] bg-gradient-to-r from-[#E30613] via-red-500 to-transparent" />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at top right, rgba(227,6,19,0.09) 0%, transparent 60%)",
                }}
              />
              <div className="relative p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-[#E30613] w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-xl shadow-red-950/60">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold tracking-tight text-[#f4f4f5] text-base">Pak Suzuki Certified</p>
                    <p className="text-[10px] text-zinc-500 font-medium uppercase tracking-widest mt-0.5">
                      Official 3S Dealership
                    </p>
                  </div>
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed mb-7 font-light">
                  MotoZone is a Pak Suzuki Certified 3S Dealership — Sales, Service, and Spare
                  Parts. Every process, part, and technician meets Pak Suzuki&apos;s official
                  quality framework. No shortcuts. No substitutes. Just the standard.
                </p>
                <a
                  href={WA_GENERAL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#E30613] hover:bg-red-700 text-white font-semibold text-sm py-3 rounded-2xl transition-all duration-300 hover:scale-105 shadow-xl shadow-red-950/50"
                >
                  <MessageCircle className="w-4 h-4" />
                  Book a Service Inquiry
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          § BRANCHES — scroll-reveal
      ══════════════════════════════════════════════════════ */}
      <section id="branches" className="py-28 px-4 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.22em] text-[#E30613] mb-3">
              Find Us
            </span>
            <h2 className="font-semibold tracking-tight text-5xl sm:text-6xl text-[#f4f4f5]">
              Two Showrooms.
            </h2>
            <p className="text-zinc-500 mt-3 text-sm font-light">
              Open every day · 10:00 AM – 9:30 PM
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {branches.map((b, idx) => (
              <ScrollReveal key={b.name} className={idx === 0 ? "delay-0" : "delay-200"}>
                <div className="group bg-zinc-900/50 border border-zinc-800 hover:border-[#E30613]/40 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-950/40">
                  <div className="h-[2px] bg-gradient-to-r from-[#E30613] via-red-500 to-transparent" />
                  <div className="p-8">
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E30613] mb-1">
                          Branch 0{idx + 1}
                        </p>
                        <h3 className="font-semibold tracking-tight text-2xl text-[#f4f4f5]">{b.name}</h3>
                        <p className="text-zinc-500 text-xs mt-0.5 font-light">{b.subtitle}</p>
                      </div>
                      <a
                        href={b.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 flex items-center gap-1.5 text-[11px] font-semibold text-zinc-400 border border-zinc-700 hover:border-[#E30613] hover:bg-[#E30613] hover:text-white px-3 py-1.5 rounded-full transition-all duration-300 uppercase tracking-wide"
                      >
                        <MapPin className="w-3 h-3" />
                        Maps
                        <ArrowUpRight className="w-2.5 h-2.5" />
                      </a>
                    </div>

                    <div className="h-px bg-zinc-800 mb-6" />

                    <div className="flex items-start gap-3 mb-4">
                      <MapPin className="w-4 h-4 text-[#E30613] mt-0.5 shrink-0" />
                      <p className="text-zinc-400 text-sm leading-snug font-light">{b.address}</p>
                    </div>

                    <div className="flex items-center gap-3 mb-6">
                      <Clock className="w-4 h-4 text-[#E30613] shrink-0" />
                      <p className="text-zinc-400 text-sm font-light">10:00 AM – 9:30 PM, Every Day</p>
                    </div>

                    <div className="flex flex-wrap gap-2.5">
                      {b.phones.map((p) => (
                        <a
                          key={p}
                          href={`tel:${p.replace(/\s/g, "")}`}
                          className="flex items-center gap-2 border border-zinc-700 hover:border-[#E30613] hover:bg-[#E30613]/10 hover:text-white text-zinc-400 text-xs font-medium px-4 py-2 rounded-full transition-all duration-300"
                        >
                          <Phone className="w-3 h-3 shrink-0" />
                          {p}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          § FINAL CTA
      ══════════════════════════════════════════════════════ */}
      <section className="relative py-24 px-4 text-center overflow-hidden bg-[#E30613]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, rgba(0,0,0,0.05) 0px, rgba(0,0,0,0.05) 1px, transparent 1px, transparent 16px)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, rgba(255,255,255,0.1) 0%, transparent 65%)",
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="font-semibold tracking-tight text-4xl sm:text-5xl text-white leading-tight mb-4">
            Ready to Ride?
          </h2>
          <p className="text-red-100 text-sm leading-relaxed mb-10 font-light">
            Reach us on WhatsApp or call a showroom directly. Certified mechanics, genuine OEM
            parts, and a warranty that stands behind every job.
          </p>
          <div className="flex flex-wrap justify-center gap-3.5">
            <a
              href={WA_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-[#E30613] hover:bg-red-50 font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-2xl shadow-red-950/30"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
            <a
              href="tel:+923029222607"
              className="flex items-center gap-2 border border-white/40 hover:border-white text-white hover:bg-white/10 font-medium text-sm px-8 py-4 rounded-full transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              Shah Latif Town
            </a>
            <a
              href="tel:+923212164020"
              className="flex items-center gap-2 border border-white/40 hover:border-white text-white hover:bg-white/10 font-medium text-sm px-8 py-4 rounded-full transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              PIB Colony
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#09090b] border-t border-zinc-900 py-8 px-4 text-center">
        <p className="font-semibold tracking-tight text-zinc-300 mb-1 text-sm">
          MOTOZONE &mdash; Pak Suzuki Authorized 3S Dealership
        </p>
        <p className="text-zinc-600 text-xs font-light">
          © {new Date().getFullYear()} MotoZone. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
