"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  ["About", "/about"], ["Services", "/services"], ["Destinations", "/destinations"],
  ["Gallery", "/gallery"], ["FAQ", "/faq"],
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 24); onScroll(); window.addEventListener("scroll", onScroll); return () => window.removeEventListener("scroll", onScroll); }, []);
  const light = scrolled || open;
  return <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${light ? "border-b border-olive/10 bg-cream/95 shadow-sm shadow-olive/5 backdrop-blur-md" : "bg-gradient-to-b from-black/50 to-transparent"}`}>
    <nav aria-label="Primary" className="site-shell flex h-24 items-center justify-between">
      <Link href="/" className={`font-serif text-lg tracking-[.19em] sm:text-xl ${light ? "text-olive" : "text-cream"}`}>HILL COUNTRY<span className="block text-[9px] tracking-[.46em] text-gold">CHAUFFEUR</span></Link>
      <div className="hidden items-center gap-9 lg:flex">{links.map(([label, href]) => <Link key={href} href={href} className={`nav-link ${light ? "!text-olive/75 hover:!text-gold" : ""}`}>{label}</Link>)}<Link href="/contact" className="button button-gold px-6 py-3 text-xs">Plan a day</Link></div>
      <button className={`grid h-10 w-10 place-items-center lg:hidden ${light ? "text-olive" : "text-cream"}`} onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</button>
    </nav>
    {open && <div className="border-t border-white/15 bg-olive px-6 py-6 lg:hidden">{links.map(([label, href]) => <Link onClick={() => setOpen(false)} key={href} href={href} className="block border-b border-white/10 py-4 font-serif text-xl text-cream">{label}</Link>)}<Link onClick={() => setOpen(false)} href="/contact" className="mt-6 inline-flex button button-gold">Reserve a ride</Link></div>}
  </header>;
}
