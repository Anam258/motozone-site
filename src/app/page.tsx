'use client';

import Image from 'next/image';
import { Shield, Wrench, Star, ChevronRight, Phone, MapPin, Clock, Award, Zap, CheckCircle } from 'lucide-react';

const bikes = [
  {
    name: 'Suzuki GR 150',
    price: 'PKR 4,99,000',
    tag: 'Best Seller',
    tagColor: 'bg-blue-600',
    specs: ['149cc SOHC Engine', '14.8 BHP Power', 'Disc Brake', '5-Speed Gearbox'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    name: 'Suzuki GSX-R150',
    price: 'PKR 7,25,000',
    tag: 'Sport',
    tagColor: 'bg-red-600',
    specs: ['147cc DOHC Engine', '18.9 BHP Power', 'Dual Disc Brakes', '6-Speed Gearbox'],
    image: 'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=800&q=80',
  },
  {
    name: 'Suzuki Gixxer SF',
    price: 'PKR 6,50,000',
    tag: 'Full Fairing',
    tagColor: 'bg-zinc-600',
    specs: ['154.9cc Engine', 'Fuel Injection', 'Semi-Digital Console', 'ABS Optional'],
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80',
  },
  {
    name: 'Suzuki V-Strom 250',
    price: 'PKR 9,80,000',
    tag: 'Adventure',
    tagColor: 'bg-orange-600',
    specs: ['248cc Parallel Twin', 'Long Travel Suspension', 'Windscreen', 'Knuckle Guards'],
    image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&q=80',
  },
  {
    name: 'Suzuki Intruder 150',
    price: 'PKR 5,75,000',
    tag: 'Cruiser',
    tagColor: 'bg-amber-600',
    specs: ['154.9cc Engine', 'Bobber Styling', 'LED DRL', 'Low Seat Height'],
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
  },
  {
    name: 'Suzuki Hayabusa',
    price: 'PKR 45,00,000',
    tag: 'Flagship',
    tagColor: 'bg-blue-500',
    specs: ['1340cc Inline-4', '190 BHP Power', 'Brembo Brakes', 'Cornering ABS'],
    image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&q=80',
  },
];

const services = [
  { icon: <Wrench className="w-7 h-7" />, title: 'Certified Mechanics', desc: 'Factory-trained Suzuki technicians with OEM diagnostic tools and genuine parts.' },
  { icon: <Shield className="w-7 h-7" />, title: 'Authorized Dealership', desc: 'Official Suzuki Pakistan authorized dealer with full warranty support.' },
  { icon: <Award className="w-7 h-7" />, title: 'Genuine Parts', desc: 'Only 100% Suzuki OEM parts used — no counterfeits, ever.' },
  { icon: <Zap className="w-7 h-7" />, title: 'Fast Servicing', desc: 'Express service bays for routine maintenance. In and out in under 2 hours.' },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white overflow-x-hidden">

      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-sm flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" fill="currentColor" />
            </div>
            <span className="text-xl font-bold tracking-tight">Moto<span className="text-blue-500">Zone</span></span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400 font-medium">
            <a href="#bikes" className="hover:text-white transition-colors">Bikes</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#why-us" className="hover:text-white transition-colors">Why Us</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
          <a href="#contact" className="hidden md:flex items-center gap-2 bg-blue-600 hover:bg-blue-500 transition-colors text-white text-sm font-semibold px-4 py-2 rounded-lg">
            <Phone className="w-4 h-4" /> Book a Test Ride
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=90"
            alt="MotoZone Hero"
            fill
            className="object-cover object-center opacity-30"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-600/40 text-blue-400 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
              <Shield className="w-3.5 h-3.5" /> Authorized Suzuki Dealer — Pakistan
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-none tracking-tight mb-6">
              Ride the<br />
              <span className="text-blue-500">Pinnacle</span><br />
              of Power.
            </h1>
            <p className="text-zinc-400 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
              Pakistan&apos;s most trusted Suzuki dealership. Premium heavy bikes, factory-certified mechanics, and a showroom built for enthusiasts who demand the best.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#bikes" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 transition-colors font-bold text-base px-6 py-3 rounded-xl">
                Explore Bikes <ChevronRight className="w-5 h-5" />
              </a>
              <a href="#services" className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 transition-colors font-bold text-base px-6 py-3 rounded-xl border border-zinc-700">
                Our Services
              </a>
            </div>

            <div className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-zinc-800/60">
              {[['6+', 'Suzuki Models'], ['500+', 'Bikes Sold'], ['3000+', 'Service Jobs'], ['100%', 'OEM Parts']].map(([num, label]) => (
                <div key={label}>
                  <div className="text-3xl font-extrabold text-white">{num}</div>
                  <div className="text-zinc-500 text-sm mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AUTHORIZED BADGE STRIP */}
      <div className="bg-blue-600/10 border-y border-blue-600/20 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-3 text-sm text-zinc-300 font-medium">
          {['Official Suzuki Pakistan Authorized Dealer', 'Certified Suzuki Mechanics On-Site', 'Genuine Suzuki OEM Parts Only', 'Full Manufacturer Warranty Honored'].map((item) => (
            <span key={item} className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-blue-500 shrink-0" /> {item}
            </span>
          ))}
        </div>
      </div>

      {/* BIKES */}
      <section id="bikes" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-blue-500 text-sm font-semibold uppercase tracking-widest mb-3">Our Lineup</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Premium Suzuki Heavy Bikes</h2>
          <p className="text-zinc-400 mt-4 max-w-xl mx-auto">Every model sourced directly from Suzuki Pakistan. All bikes come with full documentation, warranty, and dealer support.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bikes.map((bike) => (
            <div key={bike.name} className="group bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-blue-600/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-950/50">
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={bike.image}
                  alt={bike.name}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
                <span className={`absolute top-3 left-3 ${bike.tagColor} text-white text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md`}>
                  {bike.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-1">{bike.name}</h3>
                <p className="text-blue-400 font-semibold text-lg mb-4">{bike.price}</p>
                <ul className="space-y-1.5 mb-5">
                  {bike.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2 text-zinc-400 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-zinc-800 hover:bg-blue-600 transition-colors text-sm font-semibold py-2.5 rounded-lg border border-zinc-700 hover:border-blue-600">
                  Enquire Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-blue-500 text-sm font-semibold uppercase tracking-widest mb-3">What We Offer</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Certified Suzuki Service</h2>
            <p className="text-zinc-400 mt-4 max-w-xl mx-auto">Our workshop runs on factory standards. Every technician is Suzuki-certified and every part is 100% genuine.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-blue-600/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-blue-600/15 text-blue-400 flex items-center justify-center mb-5">
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why-us" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-blue-500 text-sm font-semibold uppercase tracking-widest mb-3">The MotoZone Difference</p>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">Why Riders Choose MotoZone</h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                We&apos;re not just a showroom — we&apos;re a community of riders. From your first test ride to your 10,000 km service, MotoZone is with you every step of the way.
              </p>
              <ul className="space-y-4">
                {[
                  'Suzuki Pakistan official authorized dealership since 2015',
                  'In-house certified mechanics with Suzuki factory training',
                  'Transparent pricing — no hidden costs, ever',
                  'Easy financing options through partner banks',
                  'Post-sale support and free first service included',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-zinc-300">
                    <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-80 lg:h-full min-h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=900&q=85"
                alt="MotoZone Workshop"
                fill
                className="object-cover object-center"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-1 mb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400" fill="currentColor" />
                  ))}
                </div>
                <p className="text-white font-semibold">&quot;Best Suzuki dealer in the city. Absolutely world-class service.&quot;</p>
                <p className="text-zinc-400 text-sm mt-1">— Usman K., GSX-R150 Owner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <div className="relative py-20 overflow-hidden bg-blue-600">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }}
        />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Ready to Find Your Perfect Ride?</h2>
          <p className="text-blue-100 text-lg mb-8">Visit our showroom or book a test ride today. Our experts are ready to help you choose the right Suzuki.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#contact" className="flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 transition-colors font-bold px-6 py-3 rounded-xl text-sm">
              <Phone className="w-4 h-4" /> Call Us Now
            </a>
            <a href="#bikes" className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 transition-colors text-white font-bold px-6 py-3 rounded-xl text-sm border border-blue-500">
              Browse All Bikes <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* CONTACT */}
      <section id="contact" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-blue-500 text-sm font-semibold uppercase tracking-widest mb-3">Get In Touch</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Visit Our Showroom</h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { icon: <MapPin className="w-6 h-6" />, label: 'Location', value: 'Main GT Road, Lahore, Punjab, Pakistan' },
            { icon: <Phone className="w-6 h-6" />, label: 'Phone', value: '+92 300 0000000' },
            { icon: <Clock className="w-6 h-6" />, label: 'Hours', value: 'Mon–Sat: 9AM – 8PM\nSun: 11AM – 6PM' },
          ].map(({ icon, label, value }) => (
            <div key={label} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center hover:border-blue-600/40 transition-colors">
              <div className="w-12 h-12 bg-blue-600/15 text-blue-400 rounded-xl flex items-center justify-center mx-auto mb-4">{icon}</div>
              <p className="text-zinc-500 text-xs uppercase tracking-widest mb-1">{label}</p>
              <p className="text-white font-medium whitespace-pre-line">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-blue-600 rounded-sm flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" fill="currentColor" />
            </div>
            <span className="font-bold">Moto<span className="text-blue-500">Zone</span></span>
          </div>
          <p className="text-zinc-500 text-sm text-center">© {new Date().getFullYear()} MotoZone. Authorized Suzuki Dealer. All rights reserved.</p>
          <p className="text-zinc-600 text-xs">Built for riders. Powered by passion.</p>
        </div>
      </footer>

    </main>
  );
}
