import {
  Phone,
  MapPin,
  Clock,
  Shield,
  Wrench,
  Star,
  CheckCircle,
  ChevronRight,
  Award,
  Zap,
  Settings,
} from "lucide-react";

const branches = [
  {
    name: "Shah Latif Town Branch",
    address: "R-455, Sector 16-A, Bhens Colony Road",
    phones: ["+92 302 922 2607", "+92 213 410 2484"],
  },
  {
    name: "PIB Colony Branch",
    address: "Main Martin Road",
    phones: ["+92 321 216 4020"],
  },
];

const services = [
  {
    icon: <Settings className="w-7 h-7 text-blue-600" />,
    title: "Sales",
    desc: "Authorized Suzuki vehicle sales with official pricing, financing options, and full documentation support.",
  },
  {
    icon: <Wrench className="w-7 h-7 text-blue-600" />,
    title: "Service",
    desc: "Certified mechanics handle mechanical and electrical repairs with a 10–15 day service warranty.",
  },
  {
    icon: <Shield className="w-7 h-7 text-blue-600" />,
    title: "Spare Parts",
    desc: "100% Genuine Suzuki OEM parts sourced directly from Pak Suzuki — no counterfeits, ever.",
  },
];

const highlights = [
  { icon: <Award className="w-5 h-5" />, text: "Pak Suzuki Certified 3S Dealership" },
  { icon: <CheckCircle className="w-5 h-5" />, text: "100% Genuine OEM Parts" },
  { icon: <Zap className="w-5 h-5" />, text: "Mechanical & Electrical Expertise" },
  { icon: <Star className="w-5 h-5" />, text: "10–15 Days Service Warranty" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* ── Topbar ── */}
      <div className="bg-blue-600 text-white text-sm py-2 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            Open: 10:00 AM – 9:30 PM, Every Day
          </span>
          <span className="flex items-center gap-1.5">
            <Phone className="w-4 h-4" />
            +92 302 922 2607
          </span>
        </div>
      </div>

      {/* ── Navbar ── */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <span className="text-2xl font-extrabold tracking-tight text-slate-900">
              Moto<span className="text-blue-600">Zone</span>
            </span>
            <p className="text-xs text-slate-500 leading-none mt-0.5">Pak Suzuki Authorized 3S Dealer</p>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="#branches" className="hover:text-blue-600 transition-colors">Branches</a>
            <a href="#why-us" className="hover:text-blue-600 transition-colors">Why Us</a>
            <a
              href={`tel:+923029222607`}
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              Call Now
            </a>
          </nav>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="bg-slate-50 py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
              Pak Suzuki Certified 3S Dealership
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight mb-5">
              Your Trusted <span className="text-blue-600">Suzuki</span> Partner in Karachi
            </h1>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              MotoZone offers Sales, Service &amp; Spare Parts under one roof — all backed by Pak Suzuki
              certification, genuine OEM parts, and expert-certified mechanics.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#branches"
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                Find a Branch <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#services"
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
              >
                Our Services
              </a>
            </div>
          </div>

          {/* Stats card */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "3S", label: "Certified Dealer" },
              { value: "OEM", label: "Genuine Parts Only" },
              { value: "2", label: "Branches in Karachi" },
              { value: "15d", label: "Service Warranty" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm text-center"
              >
                <p className="text-3xl font-extrabold text-blue-600">{s.value}</p>
                <p className="text-sm text-slate-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Highlights strip ── */}
      <section className="bg-blue-600 py-5 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6">
          {highlights.map((h) => (
            <div key={h.text} className="flex items-center gap-2 text-white text-sm font-medium">
              {h.icon}
              {h.text}
            </div>
          ))}
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900">Our 3S Services</h2>
            <p className="text-slate-500 mt-2">Everything Suzuki — under one certified roof.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-slate-50 border border-slate-100 rounded-2xl p-8 hover:shadow-md transition-shadow"
              >
                <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-5">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us ── */}
      <section id="why-us" className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Why Choose MotoZone?</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
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
                <li key={item} className="flex items-start gap-3 text-slate-700 text-sm">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-600 w-10 h-10 rounded-xl flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-slate-900">Pak Suzuki Certified</p>
                <p className="text-xs text-slate-500">Official 3S Dealership</p>
              </div>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              MotoZone is a Pak Suzuki Certified 3S Dealership — covering Sales, Service, and Spare Parts.
              This certification means every process, part, and technician meets Pak Suzuki&apos;s
              official quality standards, giving you complete peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* ── Branches ── */}
      <section id="branches" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900">Our Branches</h2>
            <p className="text-slate-500 mt-2">Two convenient locations across Karachi.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {branches.map((b) => (
              <div
                key={b.name}
                className="bg-slate-50 border border-slate-100 rounded-2xl p-8 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4">{b.name}</h3>
                <div className="flex items-start gap-3 mb-4 text-slate-600 text-sm">
                  <MapPin className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                  {b.address}
                </div>
                <div className="flex items-start gap-3 mb-4 text-slate-600 text-sm">
                  <Clock className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                  10:00 AM – 9:30 PM, Every Day
                </div>
                <div className="space-y-2">
                  {b.phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/\s/g, "")}`}
                      className="flex items-center gap-3 text-sm text-blue-600 font-medium hover:underline"
                    >
                      <Phone className="w-4 h-4" />
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
      <section className="bg-blue-600 py-16 px-4 text-center text-white">
        <h2 className="text-3xl font-extrabold mb-3">Ready to Experience Certified Suzuki Service?</h2>
        <p className="text-blue-100 mb-8 max-w-xl mx-auto">
          Visit either of our branches or call us now. Genuine parts, certified mechanics, and a warranty
          you can count on.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:+923029222607"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors flex items-center gap-2"
          >
            <Phone className="w-4 h-4" /> Call Shah Latif Town
          </a>
          <a
            href="tel:+923212164020"
            className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <Phone className="w-4 h-4" /> Call PIB Colony
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-4 text-sm text-center">
        <p className="font-semibold text-white mb-1">MotoZone — Pak Suzuki Authorized 3S Dealership</p>
        <p>© {new Date().getFullYear()} MotoZone. All rights reserved.</p>
      </footer>
    </div>
  );
}
