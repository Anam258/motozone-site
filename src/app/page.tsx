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
  Star,
} from "lucide-react";
import NavBar from "@/components/NavBar";

// ─── Constants ───────────────────────────────────────────────────────────────

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
    category: "Premium Commuter",
    specs: ["Euro II Engine", "4-Stroke OHC", "Fuel Efficient", "Electric Start"],
    desc: "The reliable everyday workhorse — Euro II certified engine, smooth fuel efficiency, and dependable performance for daily city commutes.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    wa: `${WA_BASE}${encodeURIComponent("Salam MotoZone, I'm interested in the Suzuki GD 110S (Rs. 369,900). Please share availability and details.")}`,
  },
  {
    name: "Suzuki GS 150",
    price: "Rs. 399,900",
    cc: "150cc",
    category: "Heavy-Duty Commuter",
    specs: ["150cc 4-Stroke", "OHC Engine", "Heavy-Duty Build", "Alloy Wheels"],
    desc: "Powerful 150cc 4-stroke engine crafted for heavy-duty performance — built to handle both city streets and longer highway runs with ease.",
    image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=800&q=80",
    wa: `${WA_BASE}${encodeURIComponent("Salam MotoZone, I'm interested in the Suzuki GS 150 (Rs. 399,900). Please share availability and details.")}`,
  },
  {
    name: "Suzuki GSX 125",
    price: "Rs. 504,900",
    cc: "125cc",
    category: "Sports Aerodynamic",
    specs: ["Premium Sports Design", "Front Disc Brake", "Digital Console", "LED Lighting"],
    desc: "Premium aerodynamic sports design meets urban agility — front disc brake, full digital console, and LED lighting for the modern sport rider.",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80",
    wa: `${WA_BASE}${encodeURIComponent("Salam MotoZone, I'm interested in the Suzuki GSX 125 (Rs. 504,900). Please share availability and details.")}`,
  },
  {
    name: "Suzuki GR 150",
    price: "Rs. 589,900",
    cc: "150cc",
    category: "Sports Touring",
    specs: ["Sports Touring Legend", "Digital Speedo", "Ultimate Road Stance", "Disc Brake"],
    desc: "The sports touring legend of Pakistan — commanding road stance, digital speedometer, and a 150cc engine tuned for both speed and long-distance comfort.",
    image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&q=80",
    wa: `${WA_BASE}${encodeURIComponent("Salam MotoZone, I'm interested in the Suzuki GR 150 (Rs. 589,900). Please share availability and details.")}`,
  },
];

const branches = [
  {
    name: "Shah Latif Town Branch",
    address: "R-455, Sector 16-A, Bhens Colony Road",
    phones: ["+92 302 922 2607", "+92 213 410 2484"],
    mapsUrl:
      "https://maps.google.com/?q=R-455,+Shah+Latif+Town,+Sector+16-A,+Bhens+Colony+Road,+Bin+Qasim+Karachi",
  },
  {
    name: "PIB Colony Branch",
    address: "Main Martin Road",
    phones: ["+92 321 216 4020"],
    mapsUrl: "https://goo.gl/maps/24JQFtCCC5jRdh93A",
  },
];

const services = [
  {
    icon: <Settings className="w-7 h-7 text-red-600" />,
    title: "Sales",
    desc: "Authorized Suzuki vehicle sales with official pricing, financing options, and complete documentation support.",
  },
  {
    icon: <Wrench className="w-7 h-7 text-red-600" />,
    title: "Service",
    desc: "Certified mechanics handle all mechanical and electrical repairs, backed by a 10–15 day service warranty.",
  },
  {
    icon: <Shield className="w-7 h-7 text-red-600" />,
    title: "Spare Parts",
    desc: "100% Genuine Suzuki OEM parts sourced directly from Pak Suzuki — zero counterfeits, guaranteed authenticity.",
  },
];

const highlights = [
  { icon: <Award className="w-5 h-5" />, text: "Pak Suzuki Certified 3S Dealership" },
  { icon: <CheckCircle className="w-5 h-5" />, text: "100% Genuine OEM Parts" },
  { icon: <Zap className="w-5 h-5" />, text: "Mechanical & Electrical Expertise" },
  { icon: <Star className="w-5 h-5" />, text: "10–15 Days Service Warranty" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavBar />

      {/* ── Hero ── */}
      <section className="bg-slate-50 py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-red-100 text-red-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-wide">
              Pak Suzuki Certified 3S Dealership
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight mb-5">
              Your Trusted{" "}
              <span className="text-red-600">Suzuki</span>{" "}
              Partner in Karachi
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              MotoZone offers Sales, Service &amp; Spare Parts under one roof — all backed by
              Pak Suzuki certification, genuine OEM parts, and expert-certified mechanics.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#bikes"
                className="bg-red-600 text-white px-7 py-3.5 rounded-full font-semibold text-base hover:bg-red-700 transition-colors flex items-center gap-2"
              >
                Explore Bikes <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href={WA_GENERAL}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-red-600 text-red-600 px-7 py-3.5 rounded-full font-semibold text-base hover:bg-red-50 transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Stat grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "3S",  label: "Certified Dealer"    },
              { value: "OEM", label: "Genuine Parts Only"  },
              { value: "2",   label: "Branches in Karachi" },
              { value: "15d", label: "Service Warranty"    },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm text-center"
              >
                <p className="text-3xl font-extrabold text-red-600">{s.value}</p>
                <p className="text-sm text-slate-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Highlights strip ── */}
      <section className="bg-red-600 py-5 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6">
          {highlights.map((h) => (
            <div key={h.text} className="flex items-center gap-2 text-white text-sm font-medium">
              {h.icon}
              {h.text}
            </div>
          ))}
        </div>
      </section>

      {/* ── Bikes Gallery ── */}
      <section id="bikes" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-red-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
              Authorized Suzuki Inventory
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Explore Our Premium Lineup
            </h2>
            <p className="text-slate-500 mt-3 text-base max-w-xl mx-auto">
              Every model is available through our certified dealership — genuine, warranty-backed, and ready to ride.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bikes.map((bike) => (
              <div
                key={bike.name}
                className="bg-white border border-slate-100 rounded-2xl overflow-hidden flex flex-col hover:shadow-xl hover:shadow-red-500/5 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 bg-slate-100 overflow-hidden">
                  <Image
                    src={bike.image}
                    alt={bike.name}
                    fill
                    className="object-cover object-center hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
                    {bike.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-base font-extrabold text-slate-900 leading-snug">{bike.name}</h3>
                    <span className="shrink-0 bg-red-50 text-red-600 text-xs font-bold px-2 py-0.5 rounded-full">
                      {bike.cc}
                    </span>
                  </div>

                  <p className="text-red-600 font-bold text-lg mb-2">{bike.price}</p>

                  <ul className="mb-3 space-y-1">
                    {bike.specs.map((sp) => (
                      <li key={sp} className="flex items-center gap-1.5 text-slate-500 text-xs">
                        <CheckCircle className="w-3.5 h-3.5 text-red-400 shrink-0" />
                        {sp}
                      </li>
                    ))}
                  </ul>

                  <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">{bike.desc}</p>

                  <a
                    href={bike.wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Inquire via WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900">Our 3S Services</h2>
            <p className="text-slate-500 mt-2 text-base">Everything Suzuki — under one certified roof.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-md transition-shadow"
              >
                <div className="bg-red-50 w-12 h-12 rounded-xl flex items-center justify-center mb-5">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-slate-600 leading-relaxed text-base">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us ── */}
      <section id="why-us" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Why Choose MotoZone?</h2>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              As an officially certified Pak Suzuki 3S dealer, we are held to the highest standards of
              quality, authenticity, and customer care — so you never have to worry about counterfeit
              parts or unqualified repairs.
            </p>
            <ul className="space-y-4">
              {[
                "Pak Suzuki authorized — not just affiliated",
                "Factory-trained, certified mechanics on every job",
                "Mechanical & electrical diagnostics in-house",
                "10–15 day warranty on all service work",
                "100% authentic OEM spare parts, always in stock",
                "Open daily, 10 AM to 9:30 PM",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700 text-base">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-red-600 w-11 h-11 rounded-xl flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-base">Pak Suzuki Certified</p>
                <p className="text-sm text-slate-500">Official 3S Dealership</p>
              </div>
            </div>
            <p className="text-slate-600 text-base leading-relaxed">
              MotoZone is a Pak Suzuki Certified 3S Dealership — covering Sales, Service, and Spare
              Parts. This certification means every process, part, and technician meets Pak
              Suzuki&apos;s official quality standards, giving you complete peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* ── Branches ── */}
      <section id="branches" className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900">Our Branches</h2>
            <p className="text-slate-500 mt-2 text-base">Two convenient locations across Karachi.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {branches.map((b) => (
              <div
                key={b.name}
                className="bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-md hover:border-red-100 transition-all"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4">{b.name}</h3>
                <a
                  href={b.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 mb-4 text-slate-600 text-base group"
                >
                  <MapPin className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
                  <span>
                    {b.address}
                    <span className="block text-sm text-red-600 font-medium mt-1 group-hover:underline">
                      Open in Google Maps →
                    </span>
                  </span>
                </a>
                <div className="flex items-start gap-3 mb-4 text-slate-600 text-base">
                  <Clock className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
                  10:00 AM – 9:30 PM, Every Day
                </div>
                <div className="space-y-2">
                  {b.phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/\s/g, "")}`}
                      className="flex items-center gap-3 text-base text-red-600 font-medium hover:underline"
                    >
                      <Phone className="w-4 h-4 shrink-0" />
                      {p}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-red-600 py-16 px-4 text-center text-white">
        <h2 className="text-3xl font-extrabold mb-3">
          Ready to Experience Certified Suzuki Service?
        </h2>
        <p className="text-red-100 mb-8 max-w-xl mx-auto text-base leading-relaxed">
          Visit either of our branches or reach us on WhatsApp right now. Genuine parts, certified
          mechanics, and a warranty you can count on.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={WA_GENERAL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-red-600 px-8 py-3.5 rounded-full font-bold text-base hover:bg-red-50 transition-colors flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" /> WhatsApp Us
          </a>
          <a
            href="tel:+923029222607"
            className="border-2 border-white text-white px-8 py-3.5 rounded-full font-bold text-base hover:bg-red-700 transition-colors flex items-center gap-2"
          >
            <Phone className="w-5 h-5" /> Call Shah Latif Town
          </a>
          <a
            href="tel:+923212164020"
            className="border-2 border-white text-white px-8 py-3.5 rounded-full font-bold text-base hover:bg-red-700 transition-colors flex items-center gap-2"
          >
            <Phone className="w-5 h-5" /> Call PIB Colony
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-4 text-sm text-center">
        <p className="font-semibold text-white mb-1">
          MotoZone — Pak Suzuki Authorized 3S Dealership
        </p>
        <p>© {new Date().getFullYear()} MotoZone. All rights reserved.</p>
      </footer>
    </div>
  );
}
